// "use client";
// import CartPageItems from "@/components/cart/cart-page-items";
// import img from "@/components/cart/a.jpeg";
// import img2 from "@/components/cart/IMG_3509.jpeg";
// export default function OrderSummary() {
//   return (
//     <div>
//       {" "}
//       <div className="mt-5 border-b border-[#cdcdcb] pb-5">
//         <CartPageItems img={img} />
//       </div>
//       <div className=" mt-5 border-b border-[#cdcdcb] pb-5">
//         <CartPageItems img={img2} />
//       </div>
//       <div className="flex flex-col font-[300]  self-end mt-5">
//         <div className="flex justify-between text-lg mb-1 text-sm">
//           <span className="font-[300]">Subtotal</span>
//           <span>200.00 lei</span>
//         </div>
//         <div className="flex justify-between text-lg mb-2 pb-5 text-sm border-b border-[#cdcdcb]">
//           <span className="font-[300]">Livrare</span>
//           <span>20.00 lei</span>
//         </div>
//       </div>
//       <div className="flex justify-between text-lg mb-1">
//         <span className="font-[500]">Total</span>
//         <span>220.00 lei</span>
//       </div>
//     </div>
//   );
// }
import React from "react";
import CartPageItems from "@/components/cart/cart-page-items";
import img from "@/components/cart/a.jpeg";
import img2 from "@/components/cart/IMG_3509.jpeg";

export default function OrderSummary({ shippingFee }) {
  return (
    <div>
      <div className="mt-5 border-b border-[#cdcdcb] pb-5">
        <CartPageItems img={img} />
      </div>
      <div className="mt-5 border-b border-[#cdcdcb] pb-5">
        <CartPageItems img={img2} />
      </div>
      <div className="flex flex-col font-[300] self-end mt-5">
        <div className="flex justify-between text-lg mb-1 text-sm">
          <span className="font-[300]">Subtotal</span>
          <span>200.00 lei</span>
        </div>
        <div className="flex justify-between text-lg mb-2 pb-5 text-sm border-b border-[#cdcdcb]">
          <span className="font-[300]">Livrare</span>
          <span>{shippingFee} lei</span>
        </div>
      </div>
      <div className="flex justify-between text-lg mb-1">
        <span className="font-[500]">Total</span>
        <span>{200 + shippingFee} lei</span>
      </div>
    </div>
  );
}
