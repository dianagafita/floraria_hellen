// "use client";
// import { motion } from "framer-motion";
// import { useCart } from "@/context/cart-context";
// import classes from "./cart.module.css"; // Ensure you create this CSS module
// import { X } from "lucide-react";
// import CartCard from "./cart-card";
// import CartSummary from "./cart-summary";
// import img2 from "./IMG_3509.jpeg";
// import img from "./a.jpeg";
// import { PiBagThin } from "react-icons/pi";
// import { cartModalVariants, sidebarVariants } from "@/styles/motion-variants";
// import { useEffect, useState } from "react";

// export default function CartModal() {
//   const [nrArt, setNrArt] = useState(0);
//   const { cartItems, isCartOpen, toogleOpenCart, cartTotal } = useCart();
//   console.log(cartItems);
//   return (
//     <>
//       <div
//         className={isCartOpen ? `${classes.backdrop2}` : ""}
//         onClick={toogleOpenCart}
//       />
//       <motion.div
//         initial={false}
//         animate={isCartOpen ? "open" : "closed"}
//         variants={cartModalVariants}
//         className={classes.cartContainer}
//       >
//         <div className="flex flex-col">
//           <div className="flex justify-between px-4  py-4 bg-white text-black mb-5 border-b boreder-[#f5f5f5]">
//             <PiBagThin size={20} />{" "}
//             <span className="font-[400] text-[15px]">COS DE CUMPARATURI</span>
//             <button onClick={toogleOpenCart}>
//               <X strokeWidth={0.8} size={24} />
//             </button>
//           </div>

//           {/* {cartItems.length === 0 ? (
//             <span>Cosul e gol</span>
//           ) : ( */}
//           {cartItems.map((item) => {
//             setNrArt(nrArt + item.product.id);

//             return <CartCard key={item.product.id} item={item} />;
//           })}
//         </div>
//         <CartSummary
//           toogleOpenCart={toogleOpenCart}
//           cartTotal={cartTotal}
//           cartItems={nrArt}
//         />
//       </motion.div>
//       {/* </div> */}
//     </>
//   );
// }
"use client";
import { motion } from "framer-motion";
import { useCart } from "@/context/cart-context";
import classes from "./cart.module.css"; // Ensure you create this CSS module
import { X } from "lucide-react";
import CartCard from "./cart-card";
import CartSummary from "./cart-summary";
import { PiBagThin } from "react-icons/pi";
import { cartModalVariants } from "@/styles/motion-variants";
import { useEffect, useState } from "react";

export default function CartModal() {
  const { cartItems, isCartOpen, toogleOpenCart, cartTotal } = useCart();

  const nrArt = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      {isCartOpen && (
        <div className={classes.backdrop2} onClick={toogleOpenCart} />
      )}
      <motion.div
        initial={false}
        animate={isCartOpen ? "open" : "closed"}
        variants={cartModalVariants}
        className={classes.cartContainer}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between px-4 py-4 bg-white text-black mb-5 border-b border-[#f5f5f5]">
            <PiBagThin size={20} />{" "}
            <span className="font-[400] text-[15px]">COS DE CUMPARATURI</span>
            <button onClick={toogleOpenCart}>
              <X strokeWidth={0.8} size={24} />
            </button>
          </div>

          {cartItems.length === 0 ? (
            <div className="flex justify-center items-center h-full text-[16px] text-[#C0C0C0]">
              Cosul de cumparaturi este gol!
            </div>
          ) : (
            cartItems.map((item) => (
              <CartCard key={item.product.id} item={item} />
            ))
          )}
        </div>
        <CartSummary
          toogleOpenCart={toogleOpenCart}
          cartTotal={cartTotal}
          cartItems={nrArt}
        />
      </motion.div>
    </>
  );
}
