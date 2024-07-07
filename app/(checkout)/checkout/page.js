"use client";
import { useState, useEffect } from "react";
import { useLoadScript } from "@react-google-maps/api";
import calculateDistance from "@/components/util/calc";
import CheckoutHeader from "@/components/checkout-page/checkout-header";
import CheckoutSummary from "@/components/checkout-page/checkout-summary";
import CheckoutForm from "@/components/checkout-page/checkout-form";
import OrderSummary from "../../../components/orders/orderSummary";

export default function CheckoutPage() {
  const [isOrderSummaryOpen, setIsOrderSummaryOpen] = useState(false);
  const [shippingFee, setShippingFee] = useState(0);
  const [distance, setDistance] = useState(null);
  const [address, setAddress] = useState({
    street: "",
    city: "",
    number: "",
    postalCode: "",
  });
  const [isCalculating, setIsCalculating] = useState(false);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const toggleOrderSummary = () => {
    setIsOrderSummaryOpen(!isOrderSummaryOpen);
  };

  const handleCalculateDistance = async () => {
    setIsCalculating(true);
    const fullAddress = `${address.street} ${address.number}, ${address.city}, Suceava, ${address.postalCode}`;
    await calculateDistance(fullAddress, setDistance, isLoaded, loadError);
    setIsCalculating(false);
  };

  useEffect(() => {
    if (distance !== null) {
      const fee = Math.round((distance / 1000) * 3); // Adjust this calculation based on your actual fee logic
      setShippingFee(fee);
    }
  }, [distance]);

  return (
    <div className="flex flex-col md:flex-row h-full ">
      <div className="w-full lg:w-1/2 flex flex-col overflow-y-auto items-center border-r border-[#cdcdcb]">
        <CheckoutHeader />
        <CheckoutSummary
          isOrderSummaryOpen={isOrderSummaryOpen}
          toggleOrderSummary={toggleOrderSummary}
          shippingFee={shippingFee}
        />
        <CheckoutForm
          address={address}
          setAddress={setAddress}
          handleCalculateDistance={handleCalculateDistance}
          isCalculating={isCalculating}
          shippingFee={shippingFee}
        />
      </div>
      <div className="hidden lg:flex lg:w-1/2 lg:sticky top-0 py-20 px-10 justify-center bg-[#f5f5f5]">
        <div className="w-full h-auto">
          <OrderSummary shippingFee={shippingFee} />
        </div>
      </div>
    </div>
  );
}
