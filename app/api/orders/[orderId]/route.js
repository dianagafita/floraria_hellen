import { EmailTemplate } from "@/components/emailComp";
import OrderReceiptEmail from "@/components/order-receipt";
import NikeReceiptEmail from "@/components/order-receipt";
import NewOrderReceiptEmail from "@/components/store-new-order";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function GET(req, { params }) {
  const { orderId } = params;

  try {
    const order = await prisma.order.findUnique({
      where: {
        id: parseInt(orderId),
      },
      include: {
        order_items: {
          include: {
            product: true, // Include product details in each order item
            extras: true, // Include extras for each order item
          },
        },
      },
    });

    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    return NextResponse.json(order, { status: 200 });
  } catch (error) {
    console.error("Error fetching order:", error);
    return NextResponse.json(
      { error: "Failed to fetch order" },
      { status: 500 }
    );
  }
}

export async function PUT(req, { params }) {
  const { orderId } = params;

  try {
    const order = await prisma.order.update({
      where: {
        id: parseInt(orderId),
      },
      data: { order_state: "paid" },
    });

    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    const orderReceipt = await prisma.order.findUnique({
      where: {
        id: parseInt(orderId),
      },
      include: {
        order_items: {
          include: {
            product: {
              include: {
                flowers: true,
              },
            },
            extras: true, // Include extras for each order item
          },
        },
      },
    });
    console.log(orderReceipt.order_items);
    const resendClient = new Resend(process.env.RESEND_API_KEY);

    console.log("Sending user confirmation email...");
    const userEmailResponse = await resendClient.emails.send({
      from: "Floraria Hellen <gafita.diana12@gmail.com>",
      to: ["gafita.diana12@gmail.com"],
      subject: "Comanda plasata cu succes",
      react: OrderReceiptEmail({ order: orderReceipt, firstName: "Jhon" }),
    });
    console.log("User email response:", userEmailResponse);

    const storeEmailResponse = await resendClient.emails.send({
      from: "Floraria Hellen <onboading@resend.dev>",
      to: ["gafita.diana12@gmail.com"],
      subject: "COMANDA NOUA",
      react: NewOrderReceiptEmail({ order: orderReceipt, firstName: "ana" }),
    });
    console.log("Store email response:", storeEmailResponse);

    console.log("Store notification email sent!");

    return NextResponse.json(order, { status: 200 });
  } catch (error) {
    console.error("Error updating order or sending email:", error);
    return NextResponse.json(
      { error: "Failed to update order or send email" },
      { status: 500 }
    );
  }
}
