// // "use client";
// // import { useState } from "react";
// // import { motion } from "framer-motion";
// // import {
// //   ChevronUp,
// //   ChevronDown,
// //   User,
// //   CircleUserRound,
// //   ChevronRight,
// // } from "lucide-react";
// // import { PiPerson } from "react-icons/pi";
// // import Link from "next/link";

// // export default function ProfileMenuDrawer() {
// //   const [isOpen, setIsOpen] = useState(false);

// //   const toggleCart = () => {
// //     setIsOpen(!isOpen);
// //   };
// //   const bg = !isOpen ? "bg-black text-white" : "bg-white text-black";

// //   return (
// //     <div
// //       className={`sticky top-[10.5rem] border z-15 ${bg} border-gray-300 rounded shadow-md md:w-full`}
// //     >
// //       <button onClick={toggleCart} className="flex w-full  p-2.5">
// //         <div className="flex justify-between w-full  ">
// //           <span className=" flex font-bold mr-5 items-center">
// //             <CircleUserRound strokeWidth={0.6} size={30} />
// //             <span className="font-[200]">Diana </span>
// //           </span>
// //           {isOpen ? (
// //             <ChevronUp size={23} strokeWidth={1} />
// //           ) : (
// //             <ChevronDown size={23} strokeWidth={1} />
// //           )}
// //         </div>
// //       </button>
// //       <motion.div
// //         initial={{ height: 0 }}
// //         animate={{ height: isOpen ? "auto" : 0 }}
// //         transition={{ type: "spring", stiffness: 1000, damping: 50 }}
// //         className="overflow-hidden"
// //       >
// //         <div className="p-4">
// //           <Link
// //             href="/profile/personal-data"
// //             className="flex justify-between mb-2"
// //           >
// //             Informatii Cont
// //             <ChevronRight size={23} strokeWidth={1} />
// //           </Link>
// //           <Link href="/profile/adresses" className="flex justify-between mb-2 ">
// //             Adrese
// //             <ChevronRight size={23} strokeWidth={1} />
// //           </Link>
// //           <Link href="/profile/orders" className="flex justify-between mb-2">
// //             Comenzi
// //             <ChevronRight size={23} strokeWidth={1} />
// //           </Link>
// //           <Link href="/profile/cards" className="flex justify-between mb-2">
// //             Cardurile Mele
// //             <ChevronRight size={23} strokeWidth={1} />
// //           </Link>
// //           {/* Add more items as needed */}
// //           <div className="mt-4 border-t pt-2">
// //             <div className="flex justify-between font-bold">
// //               <span>Delogare</span>
// //             </div>
// //           </div>
// //         </div>
// //       </motion.div>
// //     </div>
// //   );
// // }
// "use client";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   ChevronUp,
//   ChevronDown,
//   CircleUserRound,
//   ChevronRight,
// } from "lucide-react";
// import Link from "next/link";

// export default function ProfileMenuDrawer() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleCart = () => {
//     setIsOpen(!isOpen);
//   };
//   const bg = !isOpen ? "bg-black text-white" : "bg-white text-black";

//   return (
//     <div
//       className={`sticky top-[10.5rem] border z-10 ${bg} border-gray-300 rounded shadow-md md:w-full`}
//     >
//       <button onClick={toggleCart} className="flex w-full p-2.5">
//         <div className="flex justify-between w-full">
//           <span className="flex font-bold mr-5 items-center">
//             <CircleUserRound strokeWidth={0.6} size={30} />
//             <span className="font-[200]">Diana </span>
//           </span>
//           {isOpen ? (
//             <ChevronUp size={23} strokeWidth={1} />
//           ) : (
//             <ChevronDown size={23} strokeWidth={1} />
//           )}
//         </div>
//       </button>
//       <motion.div
//         initial={{ height: 0 }}
//         animate={{ height: isOpen ? "auto" : 0 }}
//         transition={{ type: "spring", stiffness: 1000, damping: 50 }}
//         className="overflow-hidden"
//       >
//         <div className="p-4">
//           <Link
//             href="/profile/personal-data"
//             className="flex justify-between mb-2"
//           >
//             Informatii Cont
//             <ChevronRight size={23} strokeWidth={1} />
//           </Link>
//           <Link href="/profile/adresses" className="flex justify-between mb-2">
//             Adrese
//             <ChevronRight size={23} strokeWidth={1} />
//           </Link>
//           <Link href="/profile/orders" className="flex justify-between mb-2">
//             Comenzi
//             <ChevronRight size={23} strokeWidth={1} />
//           </Link>
//           <Link href="/profile/cards" className="flex justify-between mb-2">
//             Cardurile Mele
//             <ChevronRight size={23} strokeWidth={1} />
//           </Link>
//           <div className="mt-4 border-t pt-2">
//             <div className="flex justify-between font-bold">
//               <span>Delogare</span>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }
"use client";
import { useState } from "react";
import Link from "next/link";
import { PROFILE_MENU } from "@/constants";
import { usePathname } from "next/navigation";

export default function ProfileMenuDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  console.log(pathname);
  const toggleCart = () => {
    setIsOpen(!isOpen);
  };
  const bg = !isOpen ? " text-black" : "bg-white text-black";

  return (
    <div
      className={` top-[10.5rem] border-y z-10 ${bg} border-gray-300  shadow-md md:w-full`}
    >
      <button onClick={toggleCart} className="flex w-full ">
        <div className="flex justify-center w-full">
          <span className="flex font-[200]  items-center text-[12px] md:text-[14px] ">
            <Link
              href="/profile"
              className={`${
                "/profile" === pathname ? " bg-[#f5f5f5]" : ""
              } border-l p-4 border-[#f5f5g5] px-6`}
            >
              DIANA
            </Link>
            {PROFILE_MENU.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className={`flex justify-between px-6 ${
                  item.href === pathname ? " bg-[#f5f5f5]" : ""
                } ${
                  item.title === "INFORMATII CONT "
                    ? "border-x border-[#f5f5g5]"
                    : "border-r border-[#f5f5g5]"
                }   p-4`}
                onClick={toggleCart}
              >
                {item.title}
              </Link>
            ))}
          </span>
        </div>
      </button>
    </div>
  );
}
