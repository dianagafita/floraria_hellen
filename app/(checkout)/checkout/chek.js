// import React, { useState, useEffect } from "react";
// import { useCart } from "@/context/cart-context";
// import { useRouter } from "next/navigation";

// export default function Chek() {
//   const { cart } = useCart();
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
//   }, [verify.user, verify.loading, router]);

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
