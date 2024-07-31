// "use client";
// import { useEffect, useState } from "react";
// import OrderItem from "@/components/orders/order-item";
// import Title from "@/components/util/title";
// import { getAllOrders } from "@/app/api/store/orders";

// export default function OrdersPage() {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       const userId = 1; // Replace this with the actual user ID you want to fetch orders for
//       const response = await fetch(`/api/orders/${userId}`);
//       const data = await response.json();
//       setOrders(data);
//     };

//     fetchOrders();
//   }, []);

//   return (
//     <div className="flex items-center justify-center w-full flex-col p-5">
//       <Title moreStyle="my-5">COMENZILE MELE</Title>
//       {orders.length < 1 ? (
//         <p>Nu ati plasat nicio comanda!</p>
//       ) : (
//         <div className="w-full md:w-2/3">
//           {orders.map((order) => (
//             <OrderItem key={order.id} order={order} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

import OrderItem from "@/components/orders/order-item";
import Title from "@/components/util/title";
import { getUserById } from "@/app/api/store/user";

export default async function OrdersPage() {
  // async function createOrder() {
  // const orderData = {
  //   userId: 2, // Replace with the actual user ID
  //   products: [
  //     { productId: 1, quantity: 2 }, // Product ID and its quantity
  //     { productId: 2, quantity: 1 },
  //   ],
  //   totalPrice: 100.0, // Replace with the total price
  //   orderState: "pending", // Replace with the desired order state
  // };

  //   try {
  //     const response = await fetch(`/api/orders`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(orderData),
  //     });

  //     if (!response.ok) {
  //       const errorData = await response.json();
  //       console.error("Error creating order:", errorData.error);
  //     } else {
  //       const order = await response.json();
  //       console.log("Order created successfully:", order);
  //       setOrders((prevOrders) => [...prevOrders, order]); // Add the new order to the orders state
  //     }
  //   } catch (error) {
  //     console.error("Error making request:", error);
  //   }
  // }
  const response = await verifyAuth();
  // if (response.user) {
  //   userdata = await getUserById(response.user.id);
  // }
  return (
    <div className="flex items-center justify-center w-full flex-col p-5">
      <Title moreStyle="my-5">COMENZILE MELE</Title>
      {/* <button onClick={createOrder} className="mb-5 p-2 bg-blue-500 text-white">
        Create Order
      </button> */}

      <OrderItem userId={response.user.id} mode="all" />
    </div>
  );
}
