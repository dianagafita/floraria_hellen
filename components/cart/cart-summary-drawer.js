"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function CollapsibleCart() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-300 rounded-md shadow-lg">
      <button
        onClick={toggleCart}
        className="flex justify-between items-center w-full p-4 bg-gray-100 text-left"
      >
        <div className="flex">
          <span className="font-bold mr-5">Rezumatul comenzii</span>
          {isOpen ? (
            <ChevronUp size={23} strokeWidth={1} />
          ) : (
            <ChevronDown size={23} strokeWidth={1} />
          )}
        </div>

        <span className="font-bold">100.4,00 lei</span>
      </button>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="overflow-hidden"
      >
        <div className="p-4">
          {/* Add your cart items here */}
          <div className="flex justify-between mb-2">
            <span>Item 1</span>
            <span>$10.00</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Item 2</span>
            <span>$15.00</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Item 3</span>
            <span>$20.00</span>
          </div>
          {/* Add more items as needed */}
          <div className="mt-4 border-t pt-2">
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>$45.00</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
