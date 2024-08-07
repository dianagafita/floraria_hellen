// "use client";

// import { EmailTemplate } from "@/components/emailComp";
// import { VerEmailTemp } from "@/components/verEmail";
// import { redirect } from "next/navigation";
// import { useEffect, useState } from "react";
// import { Resend } from "resend";
// import { updateOrder } from "../api/orders/[orderId]/route";

// export default function PaymentSuccessPage({ searchParams }) {
//   const [orderUpdated, setOrderUpdated] = useState(false);
//   const { orderId } = searchParams;

//   console.log(orderId);
//   useEffect(() => {
//     if (orderId && !orderUpdated) {
//       updateOrderStatus(orderId);
//       setTimeout(() => {
//         redirect("/");
//       }, 8000);
//     }
//   }, [orderId, orderUpdated]);

//   const updateOrderStatus = async (orderId) => {
//     await updateOrder(orderId);
//   };

//   return (
//     <main className="max-w-6xl text-center p-10 text-white text-center border m-10 rounded-md">
//       <div className="mb-10">
//         <h1 className="text-4xl font-[100] mb-2 text-black">
//           Comanda platita!
//         </h1>
//         <div className="bg-black p-2 rounded-md mt-5 text-4xl font-bold">
//           Order ID: {orderId}
//         </div>
//       </div>
//     </main>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function PaymentSuccessPage({ searchParams }) {
  const [orderUpdated, setOrderUpdated] = useState(false);
  const { orderId } = searchParams;
  const router = useRouter();

  console.log(orderId);

  useEffect(() => {
    if (orderId && !orderUpdated) {
      updateOrderStatus(orderId).then(() => {
        setOrderUpdated(true);
        setTimeout(() => {
          router.push("/");
        }, 8000);
      });
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
