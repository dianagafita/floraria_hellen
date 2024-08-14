// import prisma from "@/lib/prisma";

import prisma from "@/lib/prisma";
export async function getAllOrders(userId) {
  const orders = await prisma.order.findMany({
    where: { user_id: parseInt(userId, 10) },
    include: {
      order_items: {
        include: {
          product: true, // Include product details in each order item
          extras: true, // Include extras for each order item
        },
      },
    },
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
  console.log("PROD", products);
  try {
    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    if (!user) {
      console.error(`User with ID ${userId} not found`);
      return { error: `User with ID ${userId} not found` };
    }

    // Prepare order items with optional extras
    const orderItemsData = await Promise.all(
      products.map(
        async ({ productId, quantity, productDeliveryInfo, extras }) => {
          // Check if the product exists
          const product = await prisma.product.findUnique({
            where: { id: productId },
          });
          if (!product) {
            console.error(`Product with ID ${productId} not found`);
            throw new Error(`Product with ID ${productId} not found`);
          }

          // Handle extras if provided
          let extrasData = [];
          if (extras && extras.length > 0) {
            extrasData = await Promise.all(
              extras.map(async (extra) => {
                // Check if the extra exists
                let extraRecord = await prisma.extra.findUnique({
                  where: { id: extra.id },
                });

                // Create extra if it does not exist
                if (!extraRecord) {
                  extraRecord = await prisma.extra.create({
                    data: {
                      name: extra.name,
                      description: extra.description,
                      price: extra.price,
                      quantity: parseInt(extra.quantity),
                      image: extra.image,
                    },
                  });
                }

                return extraRecord;
              })
            );
          }

          // Return order item data
          return {
            product: { connect: { id: productId } },
            quantity,
            productDeliveryInfo,
            extras:
              extrasData.length > 0
                ? { connect: extrasData.map((e) => ({ id: e.id })) }
                : { connect: [] },
          };
        }
      )
    );

    // Create the order
    const newOrder = await prisma.order.create({
      data: {
        user: { connect: { id: userId } },
        order_items: {
          create: orderItemsData,
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
    console.error("Error creating order:", error.message);
    return { error: error.message };
  }
}
