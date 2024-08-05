// // "use client";

// // import {
// //   useElements,
// //   useStripe,
// //   PaymentElement,
// // } from "@stripe/react-stripe-js";
// // import React, { useEffect, useState } from "react";
// // import Button from "../util/button";

// // export default function PaymentForm({ amount, cartItems }) {
// //   const stripe = useStripe();
// //   console.log("PAY", cartItems);
// //   const elements = useElements();
// //   const [errorMessage, setErrorMessage] = useState("");
// //   const [clientSecret, setClientSecret] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const [orderData, setOrderData] = useState(null);

// //   useEffect(() => {
// //     fetch("/api/payment", {
// //       method: "POST",
// //       headers: {
// //         "Content-Type": "application/json",
// //       },
// //       body: JSON.stringify({ amount }),
// //     })
// //       .then((res) => res.json())
// //       .then((data) => setClientSecret(data.clientSecret));
// //   }, [amount]);

// //   async function handleSubmit(event) {
// //     event.preventDefault();
// //     setLoading(true);
// //     if (!stripe || !elements) {
// //       return;
// //     }

// //     const { error: submitError } = await elements.submit();
// //     if (submitError) {
// //       setErrorMessage(submitError.message);
// //       setLoading(false);
// //       return;
// //     }
// //     const encodedCartItems = encodeURIComponent(JSON.stringify(cartItems));

// //     const { error } = await stripe.confirmPayment({
// //       elements,
// //       clientSecret,
// //       confirmParams: {
// //         return_url: `http://localhost:3000/payment-success?amount=?&cartItems=?`,
// //         amount,
// //         cartItems,
// //       },
// //     });

// //     const products = cartItems.map((item) => ({
// //       productId: item.product.id,
// //       quantity: item.quantity,
// //     }));

// //     const orderDatas = {
// //       userId: 2,
// //       products: products,
// //       totalPrice: parseFloat(amount),
// //       orderState: "placed",
// //     };

// //     setOrderData(orderDatas);

// //     fetch("/api/orders", {
// //       method: "POST",
// //       headers: {
// //         "Content-Type": "application/json",
// //       },
// //       body: JSON.stringify(orderData),
// //     })
// //       .then((res) => res.json())
// //       .then((data) => {
// //         if (data.error) {
// //           console.error("Error creating order:", data.error);
// //         } else {
// //           console.log("Order created successfully:", data.order);
// //         }
// //       });

// //     if (error) {
// //       setErrorMessage(error);
// //     }
// //   }
// //   console.log("FORM", amount, cartItems);

// //   if (!clientSecret || !stripe || !elements) {
// //     return (
// //       <div className="flex items-center justify-center">
// //         <div
// //           className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-black"
// //           role="status"
// //         >
// //           <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
// //             Loading...
// //           </span>
// //         </div>
// //       </div>
// //     );
// //   }
// //   return (
// //     <form onSubmit={handleSubmit}>
// //       {clientSecret && <PaymentElement />}
// //       {errorMessage && <div>{errorMessage}</div>}
// //       {(stripe || !loading) && (
// //         <Button moreStyle="w-full mt-10" type="submit">
// //           {!loading ? `Plateste ${amount} lei` : "Procesare..."}
// //         </Button>
// //       )}
// //     </form>
// //   );
// // }
// "use client";

// import {
//   useElements,
//   useStripe,
//   PaymentElement,
// } from "@stripe/react-stripe-js";
// import React, { useEffect, useState } from "react";
// import Button from "../util/button";

// export default function PaymentForm({ amount, cartItems }) {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [errorMessage, setErrorMessage] = useState("");
//   const [clientSecret, setClientSecret] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [orderId, setOrderId] = useState(null);

//   useEffect(() => {
//     fetch("/api/payment", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ amount }),
//     })
//       .then((res) => res.json())
//       .then((data) => setClientSecret(data.clientSecret));
//   }, [amount]);

//   const createOrder = async () => {
//     const products = cartItems.map((item) => ({
//       productId: item.product.id,
//       quantity: item.quantity,
//     }));

//     const orderData = {
//       userId: 2,
//       products: products,
//       totalPrice: parseFloat(amount),
//       orderState: "placed",
//     };

//     const response = await fetch("/api/orders", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(orderData),
//     });

//     const data = await response.json();
//     console.log(data.id);
//     if (data.error) {
//       console.error("Error creating order:", data.error);
//     } else {
//       console.log("Order created successfully:", data);
//       setOrderId(data.id);
//     }
//   };

//   async function handleSubmit(event) {
//     event.preventDefault();
//     setLoading(true);
//     if (!stripe || !elements) {
//       return;
//     }

//     await createOrder();

//     const { error: submitError } = await elements.submit();
//     if (submitError) {
//       setErrorMessage(submitError.message);
//       setLoading(false);
//       return;
//     }
//     console.log(orderId);
//     const { error } = await stripe.confirmPayment({
//       elements,
//       clientSecret,
//       confirmParams: {
//         return_url: `http://localhost:3000/payment-success?orderId=${orderId}`,
//       },
//     });

//     if (error) {
//       setErrorMessage(error.message);
//       setLoading(false);
//     }
//   }

//   if (!clientSecret || !stripe || !elements) {
//     return (
//       <div className="flex items-center justify-center">
//         <div
//           className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-black"
//           role="status"
//         >
//           <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
//             Loading...
//           </span>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       {clientSecret && <PaymentElement />}
//       {errorMessage && <div>{errorMessage}</div>}
//       {(stripe || !loading) && (
//         <Button moreStyle="w-full mt-10" type="submit">
//           {!loading ? `Plateste ${amount} lei` : "Procesare..."}
//         </Button>
//       )}
//     </form>
//   );
// }
"use client";

import {
  useElements,
  useStripe,
  PaymentElement,
} from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import Button from "../util/button";

export default function PaymentForm({ amount, cartItems }) {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    fetch("/api/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [amount]);

  const createOrder = async () => {
    const products = cartItems.map((item) => ({
      productId: item.product.id,
      quantity: item.quantity,
    }));

    const orderData = {
      userId: 2,
      products: products,
      totalPrice: parseFloat(amount),
      orderState: "placed",
    };

    const response = await fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    });

    const data = await response.json();
    if (data.error) {
      console.error("Error creating order:", data.error);
    } else {
      console.log("Order created successfully:", data);
      setOrderId(data.id);
      return data.id; // Return the orderId
    }
  };

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    if (!stripe || !elements) {
      return;
    }

    const newOrderId = await createOrder(); // Await the order creation and get the orderId

    const { error: submitError } = await elements.submit();
    if (submitError) {
      setErrorMessage(submitError.message);
      setLoading(false);
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `http://localhost:3000/payment-success?orderId=${newOrderId}`, // Use the newOrderId
      },
    });

    if (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  }

  if (!clientSecret || !stripe || !elements) {
    return (
      <div className="flex items-center justify-center">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-black"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      {clientSecret && <PaymentElement />}
      {errorMessage && <div>{errorMessage}</div>}
      {(stripe || !loading) && (
        <Button moreStyle="w-full mt-10" type="submit">
          {!loading ? `Plateste ${amount} lei` : "Procesare..."}
        </Button>
      )}
    </form>
  );
}
