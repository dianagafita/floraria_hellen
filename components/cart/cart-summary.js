import Link from "next/link";
import { motion } from "framer-motion";
import Button from "../util/button";

export default function CartSummary({ toogleOpenCart }) {
  return (
    <div className="flex flex-col p-4 border-t shadow-top">
      <div className="flex justify-between mb-1">
        <span className="font-[300] text-[11px]">SUMAR COS</span>
        <span className=" font-[300] text-[11px]">1 articol</span>
      </div>
      <div className="flex justify-between text-sm">
        <span>SUBTOTAL:</span>
        <span className="mb-4">100,00 lei</span>
      </div>
      <Link
        href="/checkout"
        onClick={toogleOpenCart}
        className="text-sm font-[300]  p-2 text-center "
      >
        <Button moreStyle="w-full mb-2">FINALIZARE COMANDA</Button>
      </Link>
      <Link
        onClick={toogleOpenCart}
        href="/cart"
        className="self-center font-[300]  border border-black bg-white rounded-full text-black hover:bg-black hover:text-white  active:bg-black active:text-white  px-3 py-1 transition-all duration-200 ease-in-out transform`"
      >
        Vezi detalii cos...
      </Link>
    </div>
  );
}

export const variants = {
  hidden: { x: "-9%", opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.1 } },
};
