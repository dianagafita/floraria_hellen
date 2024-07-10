// "use client";
// import { motion } from "framer-motion";
// import Search from "./search";

// export default function Searchbar({ isVisible }) {
//   return (
//     <motion.div
//       className={`absolute top-10 right-0 h-full bg-white shadow-lg z-2000 ${
//         isVisible ? "h-auto" : "h-0"
//       }`} // Ensures the drawer overlays the content
//     >
//       <Search pChanges="w-[100%]" />
//     </motion.div>
//   );
// }
"use client";
import { motion } from "framer-motion";
import Search from "./search";

export default function Searchbar({ isVisible }) {
  return (
    <motion.div
      className={`border-t border-[rgba(0,0,0,0.05)] fixed top-[7rem] md:top-[10.1rem] left-0 w-full bg-white shadow-lg z-[100] ${
        isVisible ? "h-auto" : "h-0"
      } overflow-hidden`}
      initial={{ height: 0 }}
      animate={{ height: isVisible ? "auto" : 0 }}
      transition={{ duration: 0.3 }}
    >
      <Search pChanges="w-[100%]" />
    </motion.div>
  );
}
