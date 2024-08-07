// "use server";

// import NikeReceiptEmail from "@/components/order-receipt";
// import prisma from "@/lib/prisma";
// import { NextResponse } from "next/server";
// import { Resend } from "resend";

// export async function GET(req, { params }) {
//   const { orderId } = params;

//   try {
//     const order = await prisma.order.findUnique({
//       where: {
//         id: parseInt(orderId),
//       },
//       include: {
//         order_items: {
//           include: {
//             product: true, // Include product details in each order item
//           },
//         },
//       },
//     });

//     if (!order) {
//       return NextResponse.json({ error: "Order not found" }, { status: 404 });
//     }

//     return NextResponse.json(order, { status: 200 });
//   } catch (error) {
//     console.error("Error fetching order:", error);
//     return NextResponse.json(
//       { error: "Failed to fetch order" },
//       { status: 500 }
//     );
//   }
// }

// export async function updateOrder(orderId) {
//   const order = await prisma.order.update({
//     where: {
//       id: parseInt(orderId),
//     },
//     data: { order_state: "paid" },
//   });
//   const resend = new Resend(process.env.RESEND_API_KEY);
//   await resend.emails.send({
//     from: "Floraria Hellen <onboarding@resend.dev>",
//     to: ["gafita.diana12@gmail.com"],
//     subject: "Comanda plasata cu succes",
//     react: NikeReceiptEmail({ firstName: "John" }),
//   });
//   if (!order) {
//     return NextResponse.json({ error: "Order not found" }, { status: 404 });
//   }

//   return NextResponse.json(order, { status: 200 });
// }
import { EmailTemplate } from "@/components/emailComp";
import NikeReceiptEmail from "@/components/order-receipt";
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
            product: true,
          },
        },
      },
    });

    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "Floraria Hellen <onboarding@resend.dev>",
      to: ["gafita.diana12@gmail.com"],
      subject: "Comanda plasata cu succes",
      react: NikeReceiptEmail({ order: orderReceipt, firstName: "Jhon" }),
    });

    return NextResponse.json(order, { status: 200 });
  } catch (error) {
    console.error("Error updating order or sending email:", error);
    return NextResponse.json(
      { error: "Failed to update order or send email" },
      { status: 500 }
    );
  }
}
