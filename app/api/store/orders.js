import prisma from "@/lib/prisma";

export async function getAllOrders(userId) {
  const orders = await prisma.order.findMany({
    where: { user_id: parseInt(userId, 10) },
    include: {
      order_items: {
        include: {
          product: true, // Include product details in each order item
        },
      },
    }, // Include related products and user
  });
  return orders;
}

// export async function createOrder(userId, productIds, totalPrice, orderState) {
//   try {
//     const newOrder = await prisma.order.create({
//       data: {
//         user: { connect: { id: userId } },
//         products: { connect: productIds.map((id) => ({ id })) },
//         total_price: totalPrice,
//         order_state: orderState,
//       },
//     });

//     console.log("Order created successfully", newOrder);
//     return newOrder;
//   } catch (error) {
//     console.error("Error creating order:", error);
//     throw error;
//   }
// }

export async function createOrder(userId, products, totalPrice, orderState) {
  try {
    const newOrder = await prisma.order.create({
      data: {
        user: { connect: { id: userId } },
        order_items: {
          create: products.map(({ productId, quantity }) => ({
            product: { connect: { id: productId } },
            quantity,
          })),
        },
        total_price: totalPrice,
        order_state: orderState,
      },
    });

    console.log("Order created successfully", newOrder);
    return newOrder;
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
}
