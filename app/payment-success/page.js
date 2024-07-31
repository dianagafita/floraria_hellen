"use client";
import { useEffect, useState } from "react";

export default function PaymentSuccessPage({ searchParams }) {
  const { amount, cartItems } = searchParams;
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    if (amount && cartItems) {
      const parsedCartItems = JSON.parse(decodeURIComponent(cartItems));
      const products = parsedCartItems.map((item) => ({
        productId: item.product.id,
        quantity: item.quantity,
      }));

      const orderDatas = {
        userId: 2,
        products: products,
        totalPrice: parseFloat(amount),
        orderState: "complete",
      };

      setOrderData(orderDatas);

      fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            console.error("Error creating order:", data.error);
          } else {
            console.log("Order created successfully:", data.order);
          }
        });
    }
  }, [searchParams]);

  return (
    <main className="max-w-6xl text-center p-10 text-white text-center border m-10 rounded-md ">
      <div className="mb-10">
        <h1 className="text-4xl font-[100] mb-2">Comanda plasata!</h1>
        <div className="bg-black p-2 rounded-md  mt-5 text-4xl font-bold">
          ${amount}
        </div>
      </div>
    </main>
  );
}
// components/PaymentSuccess.js
// "use client";
// import { usePayment } from "@/context/payment-context";
// import { useEffect } from "react";

// export default function PaymentSuccess() {
//   const { paymentData } = usePayment();
//   if (!paymentData) {
//     console.error("Payment data is not available");
//     return <div>Loading...</div>; // or some other fallback UI
//   }

//   console.log(paymentData);
//   useEffect(() => {
//     if (paymentData) {
//       const { amount, cartItems } = paymentData;

//       const products = cartItems.map((item) => ({
//         productId: item.product.id,
//         quantity: item.quantity,
//       }));

//       const orderData = {
//         userId: 2,
//         products: products,
//         totalPrice: parseFloat(amount),
//         orderState: "complete",
//       };

//       fetch("/api/orders", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(orderData),
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           if (data.error) {
//             console.error("Error creating order:", data.error);
//           } else {
//             console.log("Order created successfully:", data.order);
//           }
//         });
//     }
//   }, [paymentData]);

//   return (
//     <div className="flex items-center justify-center">
//       <h1>Payment Successful!</h1>
//       <p>Your order has been placed.</p>
//     </div>
//   );
// }
