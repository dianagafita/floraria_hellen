// import { NextResponse } from "next/server";
// import { getAllOrders } from "../../store/orders";

// export async function GET(req, { params }) {
//   const { userId } = params;
//   if (!userId) {
//     return NextResponse.json({ error: "No ID provided" }, { status: 400 });
//   }

//   try {
//     const orsers = await getAllOrders(userId);
//     if (!user) {
//       return NextResponse.json({ error: "User not found" }, { status: 404 });
//     }
//     return NextResponse.json(orsers, { status: 200 });
//   } catch (error) {
//     console.error("Error fetching user:", error);
//     return NextResponse.json(
//       { error: "Failed to fetch user" },
//       { status: 500 }
//     );
//   }
// }
// pages/api/orders/[userId].js

import { NextResponse } from "next/server";
import { createOrder, getAllOrders } from "@/app/api/store/orders";

export async function GET(req, { params }) {
  const { userId } = params;
  if (!userId) {
    return NextResponse.json({ error: "No ID provided" }, { status: 400 });
  }

  try {
    const orders = await getAllOrders(parseInt(userId, 10));
    if (!orders) {
      return NextResponse.json({ error: "Orders not found" }, { status: 404 });
    }
    return NextResponse.json(orders, { status: 200 });
  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json(
      { error: "Failed to fetch orders" },
      { status: 500 }
    );
  }
}

// export async function POST(req) {
//   const { userId, productIds, totalPrice, orderState } = await req.json();

//   try {
//     const order = await createOrder(userId, productIds, totalPrice, orderState);

//     if (!order) {
//       return NextResponse.json({ error: "User not found" }, { status: 404 });
//     }
//     return NextResponse.json(order, { status: 200 });
//   } catch (error) {
//     console.error("Error updating user:", error);
//     return NextResponse.json(
//       { error: "Failed to update user" },
//       { status: 500 }
//     );
//   }
// }

export async function POST(req) {
  const { userId, products, totalPrice, orderState } = await req.json();

  try {
    const order = await createOrder(userId, products, totalPrice, orderState);

    if (!order) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json(order, { status: 200 });
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json(
      { error: "Failed to update user" },
      { status: 500 }
    );
  }
}
