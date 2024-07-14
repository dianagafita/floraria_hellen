"use client";
import { useState, useEffect } from "react";
import { useLoadScript } from "@react-google-maps/api";
import calculateDistance from "@/components/util/calc";
import CheckoutHeader from "@/components/checkout-page/checkout-header";
import CheckoutSummary from "@/components/checkout-page/checkout-summary";
import CheckoutForm from "@/components/checkout-page/checkout-form";
import OrderSummary from "../../../components/orders/orderSummary";
import { useCart } from "@/context/cart-context";
import { redirect } from "next/navigation";

export default function CheckoutPage() {
  const { cartItems, cartTotal } = useCart();
  if (cartItems.length === 0) {
    redirect("/");
  }
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
  console.log(cartTotal);
  return (
    <div className="flex flex-col md:flex-row h-full ">
      <div className="w-full lg:w-1/2 flex flex-col overflow-y-auto items-center border-r border-[#cdcdcb]">
        <CheckoutHeader />
        <CheckoutSummary
          isOrderSummaryOpen={isOrderSummaryOpen}
          toggleOrderSummary={toggleOrderSummary}
          shippingFee={shippingFee}
          cartItems={cartItems}
          cartTotal={cartTotal}
        />
        <CheckoutForm
          address={address}
          cartTotal={cartItems}
          setAddress={setAddress}
          handleCalculateDistance={handleCalculateDistance}
          isCalculating={isCalculating}
          shippingFee={shippingFee}
        />
      </div>
      <div className="hidden lg:flex lg:w-1/2 lg:sticky top-0 py-20 px-10 justify-center bg-[#f5f5f5]">
        <div className="w-full h-auto">
          <OrderSummary
            shippingFee={shippingFee}
            cartItems={cartItems}
            cartTotal={cartTotal}
          />
        </div>
      </div>
    </div>
  );
}
// // pages/checkout.js
// "use client";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

// export default function Checkout() {
//   // const { cart } = useCart();
//   const router = useRouter();

//   const [verify, setVerify] = useState("1");

//   useEffect(() => {
//     const fetchAuthStatus = async () => {
//       const response = await fetch("/api/valid");
//       const data = await response.json();

//       setVerify(data);
//     };

//     fetchAuthStatus();
//     if (!data.loading && !data.user) {
//       router.push("/login");
//     }
//   }, [verify.user, verify.loading, verify.router]);

//   if (verify.loading) return <p>Loading...</p>;
//   if (!verify.user) return null;

//   return (
//     <div>
//       <h1>Checkout</h1>
//       {cart.map((item) => (
//         <div key={item.id}>
//           <p>{item.name}</p>
//           <p>{item.price}</p>
//         </div>
//       ))}
//       {/* Implement the payment and order submission logic here */}
//     </div>
//   );
// }
// "use client";
// import { useState, useEffect } from "react";
// import { useCart } from "@/context/cart-context";
// import { useRouter } from "next/navigation";

// export default function Checkout() {
//   const { cartItems } = useCart();
//   const router = useRouter();

//   const [verify, setVerify] = useState({ user: null, loading: true });

//   useEffect(() => {
//     const fetchAuthStatus = async () => {
//       const response = await fetch("/api/valid");
//       const data = await response.json();
//       setVerify({ user: data.user, loading: false });
//     };

//     fetchAuthStatus();
//   }, []);

//   useEffect(() => {
//     if (!verify.loading && !verify.user) {
//       router.push("/login");
//     }
//   }, [verify, router]);

//   if (verify.loading) return <p>Loading...</p>;
//   if (!verify.user) return null;

//   return (
//     <div>
//       <h1>Checkout</h1>
//       {cartItems.map((item) => (
//         <div key={item.id}>
//           <p>{item.name}</p>
//           <p>{item.price}</p>
//         </div>
//       ))}
//       {/* Implement the payment and order submission logic here */}
//     </div>
//   );
// }
