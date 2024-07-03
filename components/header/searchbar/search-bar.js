"use client";
import { motion } from "framer-motion";
import Search from "./search";

export const variants = {
  hidden: { x: "-9%", opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.1 } },
};

export default function Searchbar({ isVisible }) {
  return (
    <motion.div
      className=" md:flex"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.1 }}
    >
      <Search pChanges="w-[100%]" />
    </motion.div>
  );
}
