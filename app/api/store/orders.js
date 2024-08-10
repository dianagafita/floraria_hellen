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

export async function createOrder(
  userId,
  products,
  shippingFee,
  cartTotal,
  senderInfo,
  recipientInfo,
  totalPrice,
  orderState
) {
  try {
    if (
      !userId ||
      !products ||
      !totalPrice ||
      !orderState ||
      !shippingFee ||
      !cartTotal ||
      !senderInfo ||
      !recipientInfo
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const newOrder = await prisma.order.create({
      data: {
        user: { connect: { id: userId } },
        order_items: {
          create: products.map(
            ({ productId, quantity, productDeliveryInfo }) => ({
              product: { connect: { id: productId } },
              quantity,
              productDeliveryInfo,
            })
          ),
        },
        shipping_fee: shippingFee,
        cart_total: cartTotal,
        sender_info: senderInfo,
        recipient_info: recipientInfo,
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
