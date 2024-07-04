"use client";
import { motion } from "framer-motion";
import { useContext } from "react";
import { CartContext } from "@/context/cart-context";
import classes from "./cart.module.css"; // Ensure you create this CSS module
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
