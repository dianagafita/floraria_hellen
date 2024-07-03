// // import { motion } from "framer-motion";
// // import classes from "./backdrop.module.css";
// // import { variants_sidebar } from "@/styles/motion-variants";

// // export default function CartModal({ isCartOpen, toogleOpenCart }) {
// //   return (
// //     <>
// //       {isCartOpen && (
// //         <>
// //           <div className={classes.backdrop} onClick={toogleOpenCart} />
// //           <motion.div initial={false} animate={isCartOpen ? "open" : "closed"}>
// //             <motion.div
// //               className="absolute inset-0 right-0 w-full bg-white"
// //               variants={variants_sidebar}
// //             />
// //             aaaaa
// //           </motion.div>
// //         </>
// //       )}
// //     </>
// //   );
// // }
// "use client";
// import classes from "../header/backdrop.module.css";
// import { variants_sidebar_2 } from "@/styles/motion-variants";
// import { useContext } from "react";
// import { CartContext } from "@/context/cart-context";
// import { motion } from "framer-motion";

// export default function CartModal() {
//   const { isCartOpen, toogleOpenCart } = useContext(CartContext);

//   return (
//     <>
//       {isCartOpen && (
//         <>
//           <div className={classes.backdrop2} onClick={toogleOpenCart} />
//           <motion.div
//             initial={false}
//             animate={isCartOpen ? "open" : "closed"}
//             className={`fixed inset-0 z-50 w-[50%]  ${
//               isCartOpen ? "" : "pointer-events-none"
//             }`}
//           >
//             <motion.div
//               className="absolute inset-0 right-0 w-[50%] bg-white"
//               variants={variants_sidebar_2}
//             >
//               <div className="p-4">
//                 <h2 className="text-xl font-semibold">Your Cart</h2>
//               </div>
//             </motion.div>
//           </motion.div>
//         </>
//       )}
//     </>
//   );
// }
"use client";
import { motion } from "framer-motion";
import { useContext } from "react";
import { CartContext } from "@/context/cart-context";
import classes from "../header/backdrop.module.css"; // Ensure you create this CSS module
import { X } from "lucide-react";
import CartCard from "./cart-card";
import CartSummary from "./cart-summary";
import img2 from "./IMG_3509.jpeg";
import img from "./a.jpeg";
import { PiBagThin } from "react-icons/pi";

export default function CartModal() {
  const { isCartOpen, toogleOpenCart } = useContext(CartContext);

  return (
    <>
      <>
        <div
          className={isCartOpen ? `${classes.backdrop2}` : ""}
          onClick={toogleOpenCart}
        />
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: isCartOpen ? "0%" : "100%" }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 1000, damping: 60 }}
          className={classes.cartContainer}
        >
          <div className="flex flex-col">
            <div className="flex justify-between px-4  py-3 bg-white text-black mb-5 border-b boreder-[#f5f5f5]">
              <PiBagThin size={20} />{" "}
              <span className="font-[400] text-[15px]">COS DE CUMPARATURI</span>
              <button onClick={toogleOpenCart}>
                <X strokeWidth={0.5} size={20} />
              </button>
            </div>

            <CartCard imgage={img} />
            <CartCard imgage={img2} />
          </div>
          <CartSummary toogleOpenCart={toogleOpenCart} />
        </motion.div>
        {/* </div> */}
      </>
    </>
  );
}
