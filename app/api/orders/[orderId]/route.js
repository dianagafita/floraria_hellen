import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

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

    return NextResponse.json(order, { status: 200 });
  } catch (error) {
    console.error("Error fetching order:", error);
    return NextResponse.json(
      { error: "Failed to fetch order" },
      { status: 500 }
    );
  }
}
