"use client";

import {
  useElements,
  useStripe,
  PaymentElement,
} from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import Button from "../util/button";
import Loading from "@/lib/loading";

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
      userId: 12,
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
    return <Loading />;
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
