// // // "use client";
// // // import { useEffect, useState } from "react";

// // // export default function PaymentSuccessPage({ searchParams }) {
// // //   const { amount, cartItems } = searchParams;
// // //   const [orderData, setOrderData] = useState(null);
// // //   console.log("SUCC", amount, cartItems);
// // //   useEffect(() => {
// // //     if (amount && cartItems) {
// // //       const decodedCartItems = decodeURIComponent(cartItems);
// // //       const parsedCartItems = JSON.parse(decodedCartItems);
// // //       console.log("Parsed Cart Items:", parsedCartItems);

// // //       const products = parsedCartItems.map((item) => ({
// // //         productId: item.product.id,
// // //         quantity: item.quantity,
// // //       }));

// // //       const orderDatas = {
// // //         userId: 2,
// // //         products: products,
// // //         totalPrice: parseFloat(amount),
// // //         orderState: "complete",
// // //       };

// // //       setOrderData(orderDatas);

// // //       fetch("/api/orders", {
// // //         method: "POST",
// // //         headers: {
// // //           "Content-Type": "application/json",
// // //         },
// // //         body: JSON.stringify(orderData),
// // //       })
// // //         .then((res) => res.json())
// // //         .then((data) => {
// // //           if (data.error) {
// // //             console.error("Error creating order:", data.error);
// // //           } else {
// // //             console.log("Order created successfully:", data.order);
// // //           }
// // //         });
// // //     }
// // //   }, [searchParams]);

// // //   return (
// // //     <main className="max-w-6xl text-center p-10 text-white text-center border m-10 rounded-md ">
// // //       <div className="mb-10">
// // //         <h1 className="text-4xl font-[100] mb-2">Comanda plasata!</h1>
// // //         <div className="bg-black p-2 rounded-md  mt-5 text-4xl font-bold">
// // //           ${amount}
// // //         </div>
// // //       </div>
// // //     </main>
// // //   );
// // // }
// // // // components/PaymentSuccess.js
// // // // "use client";
// // // // import { usePayment } from "@/context/payment-context";
// // // // import { useEffect } from "react";

// // // // export default function PaymentSuccess() {
// // // //   const { paymentData } = usePayment();
// // // //   if (!paymentData) {
// // // //     console.error("Payment data is not available");
// // // //     return <div>Loading...</div>; // or some other fallback UI
// // // //   }

// // // //   console.log(paymentData);
// // // //   useEffect(() => {
// // // //     if (paymentData) {
// // // //       const { amount, cartItems } = paymentData;

// // // //       const products = cartItems.map((item) => ({
// // // //         productId: item.product.id,
// // // //         quantity: item.quantity,
// // // //       }));

// // // //       const orderData = {
// // // //         userId: 2,
// // // //         products: products,
// // // //         totalPrice: parseFloat(amount),
// // // //         orderState: "complete",
// // // //       };

// // // //       fetch("/api/orders", {
// // // //         method: "POST",
// // // //         headers: {
// // // //           "Content-Type": "application/json",
// // // //         },
// // // //         body: JSON.stringify(orderData),
// // // //       })
// // // //         .then((res) => res.json())
// // // //         .then((data) => {
// // // //           if (data.error) {
// // // //             console.error("Error creating order:", data.error);
// // // //           } else {
// // // //             console.log("Order created successfully:", data.order);
// // // //           }
// // // //         });
// // // //     }
// // // //   }, [paymentData]);

// // // //   return (
// // // //     <div className="flex items-center justify-center">
// // // //       <h1>Payment Successful!</h1>
// // // //       <p>Your order has been placed.</p>
// // // //     </div>
// // // //   );
// // // // }
// // "use client";
// // import { useEffect, useState } from "react";

// // export default function PaymentSuccessPage({ searchParams }) {
// //   const { amount, cartItems } = searchParams;
// //   const [orderData, setOrderData] = useState(null);

// //   useEffect(() => {
// //     if (amount && cartItems) {
// //       const decodedCartItems = decodeURIComponent(cartItems);
// //       const parsedCartItems = JSON.parse(decodedCartItems);
// //       console.log("Parsed Cart Items:", parsedCartItems);

// //       const products = parsedCartItems.map((item) => ({
// //         productId: item.product.id,
// //         quantity: item.quantity,
// //       }));

// //       const orderDatas = {
// //         userId: 2,
// //         products: products,
// //         totalPrice: parseFloat(amount),
// //         orderState: "complete",
// //       };

// //       setOrderData(orderDatas);

// //       fetch("/api/orders", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify(orderDatas), // Ensure that the correct data is being sent
// //       })
// //         .then((res) => res.json())
// //         .then((data) => {
// //           if (data.error) {
// //             console.error("Error creating order:", data.error);
// //           } else {
// //             console.log("Order created successfully:", data.order);
// //           }
// //         })
// //         .catch((error) => {
// //           console.error("Fetch error:", error);
// //         });
// //     }
// //   }, [searchParams]);

// //   return (
// //     <main className="max-w-6xl text-center p-10 text-white text-center border m-10 rounded-md ">
// //       <div className="mb-10">
// //         <h1 className="text-4xl font-[100] mb-2">Comanda plasata!</h1>
// //         <div className="bg-black p-2 rounded-md mt-5 text-4xl font-bold">
// //           ${amount}
// //         </div>
// //       </div>
// //     </main>
// //   );
// // }
// // "use client";
// // import { useEffect, useRef, useState } from "react";

// // export default function PaymentSuccessPage({ searchParams }) {
// //   const { amount, cartItems } = searchParams;
// //   const [orderCreated, setOrderCreated] = useState(false);
// //   const orderCreationRef = useRef(false);

// //   useEffect(() => {
// //     if (amount && cartItems && !orderCreated && !orderCreationRef.current) {
// //       orderCreationRef.current = true;
// //       createOrder();
// //     }
// //   }, [amount, cartItems, orderCreated]);

// //   const createOrder = async () => {
// //     try {
// //       const decodedCartItems = decodeURIComponent(cartItems);
// //       const parsedCartItems = JSON.parse(decodedCartItems);
// //       console.log("Parsed Cart Items:", parsedCartItems);

// //       const products = parsedCartItems.map((item) => ({
// //         productId: item.product.id,
// //         quantity: item.quantity,
// //       }));

// //       const orderData = {
// //         userId: 2,
// //         products: products,
// //         totalPrice: parseFloat(amount),
// //         orderState: "complete",
// //       };

// //       const response = await fetch("/api/orders", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify(orderData),
// //       });

// //       const data = await response.json();
// //       if (data.error) {
// //         console.error("Error creating order:", data.error);
// //       } else {
// //         console.log("Order created successfully:", data.order);
// //         setOrderCreated(true);
// //       }
// //     } catch (error) {
// //       console.error("Failed to create order:", error);
// //     }
// //   };

// //   return (
// //     <main className="max-w-6xl text-center p-10 text-white text-center border m-10 rounded-md">
// //       <div className="mb-10">
// //         <h1 className="text-4xl font-[100] mb-2 text-black">
// //           Comanda plasata!
// //         </h1>
// //         <div className="bg-black p-2 rounded-md mt-5 text-4xl font-bold">
// //           ${amount}
// //         </div>
// //       </div>
// //     </main>
// //   );
// // }
// "use client";
// import { useEffect, useRef, useState } from "react";

// export default async function PaymentSuccessPage() {
//   const response = await fetch("/api/orders", {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(orderData),
//   });

//   const data = await response.json();
//   if (data.error) {
//     console.error("Error creating order:", data.error);
//   } else {
//     console.log("Order created successfully:", data.order);
//     setOrderCreated(true);
//   }

//   return (
//     <main className="max-w-6xl text-center p-10 text-white text-center border m-10 rounded-md">
//       <div className="mb-10">
//         <h1 className="text-4xl font-[100] mb-2 text-black">
//           Comanda plasata!
//         </h1>
//         <div className="bg-black p-2 rounded-md mt-5 text-4xl font-bold">
//           ${amount}
//         </div>
//       </div>
//     </main>
//   );
// }
// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";

// export default function PaymentSuccessPage({searchParams}) {
//   const [orderUpdated, setOrderUpdated] = useState(false);
//   const router = useRouter();
//   const { orderId } = router.query;

//   useEffect(() => {
//     if (orderId && !orderUpdated) {
//       updateOrderStatus(orderId);
//     }
//   }, [orderId, orderUpdated]);

//   const updateOrderStatus = async (orderId) => {
//     try {
//       const response = await fetch(`/api/orders/${orderId}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ orderState: "paid" }),
//       });

//       const data = await response.json();
//       if (data.error) {
//         console.error("Error updating order:", data.error);
//       } else {
//         console.log("Order updated successfully:", data.order);
//         setOrderUpdated(true);
//       }
//     } catch (error) {
//       console.error("Failed to update order:", error);
//     }
//   };

//   return (
//     <main className="max-w-6xl text-center p-10 text-white text-center border m-10 rounded-md">
//       <div className="mb-10">
//         <h1 className="text-4xl font-[100] mb-2 text-black">
//           Comanda plasata!
//         </h1>
//         <div className="bg-black p-2 rounded-md mt-5 text-4xl font-bold">
//           Order ID: {orderId}
//         </div>
//       </div>
//     </main>
//   );
// }
"use client";

import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function PaymentSuccessPage({ searchParams }) {
  const [orderUpdated, setOrderUpdated] = useState(false);
  const { orderId } = searchParams;

  console.log(orderId);
  useEffect(() => {
    if (orderId && !orderUpdated) {
      updateOrderStatus(orderId);
      setTimeout(() => {
        redirect("/");
      }, 8000);
    }
  }, [orderId, orderUpdated]);

  const updateOrderStatus = async (orderId) => {
    try {
      const response = await fetch(`/api/orders/${orderId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if (data.error) {
        console.error("Error updating order:", data.error);
      } else {
        console.log("Order updated successfully:", data);
        setOrderUpdated(true);
      }
    } catch (error) {
      console.error("Failed to update order:", error);
    }
  };

  return (
    <main className="max-w-6xl text-center p-10 text-white text-center border m-10 rounded-md">
      <div className="mb-10">
        <h1 className="text-4xl font-[100] mb-2 text-black">
          Comanda platita!
        </h1>
        <div className="bg-black p-2 rounded-md mt-5 text-4xl font-bold">
          Order ID: {orderId}
        </div>
      </div>
    </main>
  );
}
