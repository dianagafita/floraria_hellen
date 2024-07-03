// // // // import React from "react";
// // // // import Input from "@/components/input";
// // // // import Button from "@/components/button";
// // // // import CartPage from "@/app/(content)/cart/page";
// // // // import Image from "next/image";
// // // // import icon from "@/app/icon.png";
// // // // import CartSummary from "@/components/cart/cart-summary";
// // // // import OrderSummary from "./orderSummary";
// // // // import Link from "next/link";
// // // // import { ChevronLeft, ChevronRight } from "lucide-react";
// // // // export default function CheckoutPage() {
// // // //   return (
// // // //     <form className="flex h-full">
// // // //       <div className="w-1/2 flex flex-col overflow-y-auto items-center border-r border-[#cdcdcb] ">
// // // //         <div className="relative w-48 h-24">
// // // //           <Image
// // // //             src={icon}
// // // //             alt="Image"
// // // //             className="object-cover"
// // // //             layout="fill"
// // // //           />
// // // //         </div>
// // // //         <div className="flex">
// // // //           <Link
// // // //             className="font-[300] text-[12px] flex items-center"
// // // //             href="/cart"
// // // //           >
// // // //             Cos <ChevronRight className="ml-2 mr-1" strokeWidth={1} size={15} />
// // // //           </Link>{" "}
// // // //           <span className="font-[500] text-[12px] flex items-center">
// // // //             Livrare{" "}
// // // //             <ChevronRight className="ml-2 mr-1" strokeWidth={1} size={15} />
// // // //           </span>{" "}
// // // //           <Link
// // // //             className="font-[300] text-[12px] flex items-center"
// // // //             href="/cart"
// // // //           >
// // // //             Plata <ChevronRight className="ml-2" strokeWidth={1} size={15} />
// // // //           </Link>
// // // //         </div>
// // // //         <div className="h-[700px]">
// // // //           <div className="flex flex-col bg-white drop-shadow-[0_0px_10px_rgba(0,0,0,0.15)] rounded-md my-10 p-10 m-6">
// // // //             <h2 className="text-lg font-[600]">
// // // //               <span className="border border-[rgb(155,47,14)] rounded-full px-2 py-1.5">
// // // //                 1.
// // // //               </span>{" "}
// // // //               Cine trimite cadoul?
// // // //             </h2>
// // // //             <Input type="text" name="personSendingEmail" label="E-mail" />
// // // //             <Input type="text" name="personSendingFirstName" label="Nume" />
// // // //             <Input type="text" name="personSendingSecondName" label="Prenume" />
// // // //             <Input type="text" name="personSendingPhone" label="Telefon" />
// // // //             <span className="text-xs ml-5">
// // // //               <span className="border border-[rgb(155,47,14)] rounded-full px-1.5 text-[rgb(155,47,14)] mr-3 font-[600]">
// // // //                 i
// // // //               </span>
// // // //               Factura se emite exculiv online si pe email. Nicio factura nu
// // // //               ajunge la beneficiarul cadoului.
// // // //             </span>
// // // //           </div>
// // // //           <div className="flex flex-col bg-white drop-shadow-[0_0px_10px_rgba(0,0,0,0.15)] rounded-md my-10 p-10 m-6">
// // // //             <h2 className="text-lg font-[600]">
// // // //               <span className="border border-[rgb(155,47,14)] rounded-full px-2 py-1.5">
// // // //                 2.
// // // //               </span>{" "}
// // // //               Cine primeste cadoul?
// // // //             </h2>
// // // //             <Input
// // // //               type="text"
// // // //               name="personReceivingFullName"
// // // //               label="Nume Complet"
// // // //             />
// // // //             <Input type="text" name="personReceivingPhone" label="Telefon" />
// // // //             <Input
// // // //               type="text"
// // // //               name="personReceivingAddress"
// // // //               label="Adresa Completa"
// // // //             />
// // // //           </div>
// // // //           <div className="flex justify-between m-5 pb-7">
// // // //             <Link
// // // //               className="font-[300] text-[12px] flex items-center"
// // // //               href="/cart"
// // // //             >
// // // //               {" "}
// // // //               <ChevronLeft className="ml-2 mr-1" strokeWidth={1} size={15} />
// // // //               Reveniti la cos{" "}
// // // //             </Link>{" "}
// // // //             <Button>Plateste</Button>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //       <div className="sticky w-1/2  flex py-20 px-10 justify-center bg-[#f5f5f5]">
// // // //         <div className="w-full h-auto">
// // // //           <OrderSummary />
// // // //         </div>
// // // //       </div>
// // // //     </form>
// // // //   );
// // // // }
// // // "use client";
// // // import React, { useState } from "react";
// // // import Input from "@/components/input";
// // // import Button from "@/components/button";
// // // import Image from "next/image";
// // // import icon from "@/app/icon.png";
// // // import OrderSummary from "./orderSummary";
// // // import Link from "next/link";
// // // import { ChevronLeft, ChevronRight } from "lucide-react";
// // // import { ChevronDown, ChevronUp } from "lucide-react";
// // // import { on } from "rsuite/esm/DOMHelper";
// // // import { motion } from "framer-motion";

// // // export default function CheckoutPage() {
// // //   const [isOrderSummaryOpen, setIsOrderSummaryOpen] = useState(false);
// // //   function onClick() {
// // //     setIsOrderSummaryOpen(!isOrderSummaryOpen);
// // //   }

// // //   return (
// // //     <form className="flex flex-col lg:flex-row h-full">
// // //       <div className="w-full lg:w-1/2 flex flex-col overflow-y-auto items-center border-r border-[#cdcdcb]">
// // //         <div className="relative w-48 h-24 mt-6">
// // //           <Image
// // //             src={icon}
// // //             alt="Image"
// // //             className="object-cover"
// // //             layout="fill"
// // //           />
// // //         </div>
// // //         <div className="flex mt-4">
// // //           <Link
// // //             className="font-[300] text-[12px] flex items-center"
// // //             href="/cart"
// // //           >
// // //             Cos <ChevronRight className="ml-2 mr-1" strokeWidth={1} size={15} />
// // //           </Link>
// // //           <span className="font-[500] text-[12px] flex items-center">
// // //             Livrare{" "}
// // //             <ChevronRight className="ml-2 mr-1" strokeWidth={1} size={15} />
// // //           </span>
// // //           <Link
// // //             className="font-[300] text-[12px] flex items-center"
// // //             href="/cart"
// // //           >
// // //             Plata <ChevronRight className="ml-2" strokeWidth={1} size={15} />
// // //           </Link>
// // //         </div>
// // //         <div className="h-[700px]">
// // //           <div className="flex flex-col bg-white drop-shadow-[0_0px_10px_rgba(0,0,0,0.15)] rounded-md my-10 p-10 m-6">
// // //             <h2 className="text-lg font-[600]">
// // //               <span className="border border-[rgb(155,47,14)] rounded-full px-2 py-1.5">
// // //                 1.
// // //               </span>{" "}
// // //               Cine trimite cadoul?
// // //             </h2>
// // //             <Input type="text" name="personSendingEmail" label="E-mail" />
// // //             <Input type="text" name="personSendingFirstName" label="Nume" />
// // //             <Input type="text" name="personSendingSecondName" label="Prenume" />
// // //             <Input type="text" name="personSendingPhone" label="Telefon" />
// // //             <span className="text-xs ml-5">
// // //               <span className="border border-[rgb(155,47,14)] rounded-full px-1.5 text-[rgb(155,47,14)] mr-3 font-[600]">
// // //                 i
// // //               </span>
// // //               Factura se emite exculiv online si pe email. Nicio factura nu
// // //               ajunge la beneficiarul cadoului.
// // //             </span>
// // //           </div>
// // //           <div className="flex flex-col bg-white drop-shadow-[0_0px_10px_rgba(0,0,0,0.15)] rounded-md my-10 p-10 m-6">
// // //             <h2 className="text-lg font-[600]">
// // //               <span className="border border-[rgb(155,47,14)] rounded-full px-2 py-1.5">
// // //                 2.
// // //               </span>{" "}
// // //               Cine primeste cadoul?
// // //             </h2>
// // //             <Input
// // //               type="text"
// // //               name="personReceivingFullName"
// // //               label="Nume Complet"
// // //             />
// // //             <Input type="text" name="personReceivingPhone" label="Telefon" />
// // //             <Input
// // //               type="text"
// // //               name="personReceivingAddress"
// // //               label="Adresa Completa"
// // //             />
// // //           </div>
// // //           <div className="flex justify-between m-5 pb-7">
// // //             <Link
// // //               className="font-[300] text-[12px] flex items-center"
// // //               href="/cart"
// // //             >
// // //               {" "}
// // //               <ChevronLeft className="ml-2 mr-1" strokeWidth={1} size={15} />
// // //               Reveniti la cos{" "}
// // //             </Link>{" "}
// // //             <Button>Plateste</Button>
// // //           </div>
// // //         </div>
// // //       </div>
// // //       <div
// // //         className={` top-[10.5rem] border z-10  border-gray-300 rounded shadow-md md:w-full`}
// // //       >
// // //         <button onClick={onClick} className="flex w-full p-2.5">
// // //           <div className="flex justify-between w-full">
// // //             <span className="flex font-bold mr-5 items-center">
// // //               <span className="font-[200]">Diana</span>
// // //             </span>
// // //             {isOrderSummaryOpen ? (
// // //               <ChevronUp size={23} strokeWidth={1} />
// // //             ) : (
// // //               <ChevronDown size={23} strokeWidth={1} />
// // //             )}
// // //           </div>
// // //         </button>
// // //         <motion.div
// // //           initial={{ height: 0 }}
// // //           animate={{ height: isOrderSummaryOpen ? "auto" : 0 }}
// // //           transition={{ type: "spring", stiffness: 1000, damping: 50 }}
// // //           className="overflow-hidden"
// // //         >
// // //           <div className="p-4">
// // //             <div className="mt-4 border-t pt-2">
// // //               <div className="flex justify-between font-bold">
// // //                 <span>Deconectare</span>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </motion.div>
// // //       </div>
// // //     </form>
// // //   );
// // // }
// // "use client";
// // import React, { useState } from "react";
// // import Input from "@/components/input";
// // import Button from "@/components/button";
// // import Image from "next/image";
// // import icon from "@/app/icon.png";
// // import OrderSummary from "./orderSummary";
// // import Link from "next/link";
// // import {
// //   ChevronLeft,
// //   ChevronRight,
// //   ChevronDown,
// //   ChevronUp,
// // } from "lucide-react";
// // import { motion } from "framer-motion";

// // export default function CheckoutPage() {
// //   const [isOrderSummaryOpen, setIsOrderSummaryOpen] = useState(false);

// //   const toggleOrderSummary = () => {
// //     setIsOrderSummaryOpen(!isOrderSummaryOpen);
// //   };

// //   return (
// //     <form className="flex flex-col lg:flex-row h-full">
// //       <div className="w-full lg:w-1/2 flex flex-col overflow-y-auto items-center border-r border-[#cdcdcb]">
// //         <div className="relative w-48 h-24 mt-6">
// //           <Image
// //             src={icon}
// //             alt="Image"
// //             className="object-cover"
// //             layout="fill"
// //           />
// //         </div>
// //         <div className="flex mt-4">
// //           <Link
// //             className="font-[300] text-[12px] flex items-center"
// //             href="/cart"
// //           >
// //             Cos <ChevronRight className="ml-2 mr-1" strokeWidth={1} size={15} />
// //           </Link>
// //           <span className="font-[500] text-[12px] flex items-center">
// //             Livrare{" "}
// //             <ChevronRight className="ml-2 mr-1" strokeWidth={1} size={15} />
// //           </span>
// //           <Link
// //             className="font-[300] text-[12px] flex items-center"
// //             href="/cart"
// //           >
// //             Plata <ChevronRight className="ml-2" strokeWidth={1} size={15} />
// //           </Link>
// //         </div>
// //         <div className="h-[700px]">
// //           <div className="flex flex-col bg-white drop-shadow-[0_0px_10px_rgba(0,0,0,0.15)] rounded-md my-10 p-10 m-6">
// //             <h2 className="text-lg font-[600]">
// //               <span className="border border-[rgb(155,47,14)] rounded-full px-2 py-1.5">
// //                 1.
// //               </span>{" "}
// //               Cine trimite cadoul?
// //             </h2>
// //             <Input type="text" name="personSendingEmail" label="E-mail" />
// //             <Input type="text" name="personSendingFirstName" label="Nume" />
// //             <Input type="text" name="personSendingSecondName" label="Prenume" />
// //             <Input type="text" name="personSendingPhone" label="Telefon" />
// //             <span className="text-xs ml-5">
// //               <span className="border border-[rgb(155,47,14)] rounded-full px-1.5 text-[rgb(155,47,14)] mr-3 font-[600]">
// //                 i
// //               </span>
// //               Factura se emite exculiv online si pe email. Nicio factura nu
// //               ajunge la beneficiarul cadoului.
// //             </span>
// //           </div>
// //           <div className="flex flex-col bg-white drop-shadow-[0_0px_10px_rgba(0,0,0,0.15)] rounded-md my-10 p-10 m-6">
// //             <h2 className="text-lg font-[600]">
// //               <span className="border border-[rgb(155,47,14)] rounded-full px-2 py-1.5">
// //                 2.
// //               </span>{" "}
// //               Cine primeste cadoul?
// //             </h2>
// //             <Input
// //               type="text"
// //               name="personReceivingFullName"
// //               label="Nume Complet"
// //             />
// //             <Input type="text" name="personReceivingPhone" label="Telefon" />
// //             <Input
// //               type="text"
// //               name="personReceivingAddress"
// //               label="Adresa Completa"
// //             />
// //           </div>
// //           <div className="flex justify-between m-5 pb-7">
// //             <Link
// //               className="font-[300] text-[12px] flex items-center"
// //               href="/cart"
// //             >
// //               {" "}
// //               <ChevronLeft className="ml-2 mr-1" strokeWidth={1} size={15} />
// //               Reveniti la cos{" "}
// //             </Link>{" "}
// //             <Button>Plateste</Button>
// //           </div>
// //         </div>
// //       </div>
// //       <div className="hidden lg:flex lg:w-1/2 lg:sticky top-0 py-20 px-10 justify-center bg-[#f5f5f5]">
// //         <div className="w-full h-auto">
// //           <OrderSummary />
// //         </div>
// //       </div>
// //       <div className="lg:hidden w-full">
// //         <div
// //           className={`top-[10.5rem] border z-10 border-gray-300 rounded shadow-md`}
// //         >
// //           <button onClick={toggleOrderSummary} className="flex w-full p-2.5">
// //             <div className="flex justify-between w-full">
// //               <span className="flex font-bold mr-5 items-center">
// //                 <span className="font-[200]">Rezumat comanda</span>
// //               </span>
// //               {isOrderSummaryOpen ? (
// //                 <ChevronUp size={23} strokeWidth={1} />
// //               ) : (
// //                 <ChevronDown size={23} strokeWidth={1} />
// //               )}
// //             </div>
// //           </button>
// //           <motion.div
// //             initial={{ height: 0 }}
// //             animate={{ height: isOrderSummaryOpen ? "auto" : 0 }}
// //             transition={{ type: "spring", stiffness: 1000, damping: 50 }}
// //             className="overflow-hidden"
// //           >
// //             <div className="p-4">
// //               <OrderSummary />
// //             </div>
// //           </motion.div>
// //         </div>
// //       </div>
// //     </form>
// //   );
// // }
// "use client";
// import React, { useState } from "react";
// import Input from "@/components/input";
// import Button from "@/components/button";
// import Image from "next/image";
// import icon from "@/app/icon.png";
// import OrderSummary from "./orderSummary";
// import Link from "next/link";
// import {
//   ChevronLeft,
//   ChevronRight,
//   ChevronDown,
//   ChevronUp,
// } from "lucide-react";
// import { motion } from "framer-motion";

// export default function CheckoutPage() {
//   const [isOrderSummaryOpen, setIsOrderSummaryOpen] = useState(false);

//   const toggleOrderSummary = () => {
//     setIsOrderSummaryOpen(!isOrderSummaryOpen);
//   };

//   return (
//     <form className="flex flex-col md:flex-row h-full">
//       <div className="w-full lg:w-1/2 flex flex-col overflow-y-auto items-center border-r border-[#cdcdcb]">
//         <div className="relative w-48 h-24 mt-6">
//           <Image
//             src={icon}
//             alt="Image"
//             className="object-cover"
//             layout="fill"
//           />
//         </div>
//         <div className="flex mt-4">
//           <Link
//             className="font-[300] text-[12px] flex items-center"
//             href="/cart"
//           >
//             Cos <ChevronRight className="ml-2 mr-1" strokeWidth={1} size={15} />
//           </Link>
//           <span className="font-[500] text-[12px] flex items-center">
//             Livrare{" "}
//             <ChevronRight className="ml-2 mr-1" strokeWidth={1} size={15} />
//           </span>
//           <Link
//             className="font-[300] text-[12px] flex items-center"
//             href="/cart"
//           >
//             Plata <ChevronRight className="ml-2" strokeWidth={1} size={15} />
//           </Link>
//         </div>{" "}
//         <div className="flex flex-col-reverse">
//           <div className="h-[700px]">
//             {" "}
//             <div className="flex flex-col bg-white drop-shadow-[0_0px_10px_rgba(0,0,0,0.15)] rounded-md my-10 p-10 m-6">
//               <h2 className="text-lg font-[600]">
//                 <span className="border border-[rgb(155,47,14)] rounded-full px-2 py-1.5">
//                   1.
//                 </span>{" "}
//                 Cine trimite cadoul?
//               </h2>
//               <Input type="text" name="personSendingEmail" label="E-mail" />
//               <Input type="text" name="personSendingFirstName" label="Nume" />
//               <Input
//                 type="text"
//                 name="personSendingSecondName"
//                 label="Prenume"
//               />
//               <Input type="text" name="personSendingPhone" label="Telefon" />
//               <span className="text-xs ml-5">
//                 <span className="border border-[rgb(155,47,14)] rounded-full px-1.5 text-[rgb(155,47,14)] mr-3 font-[600]">
//                   i
//                 </span>
//                 Factura se emite exculiv online si pe email. Nicio factura nu
//                 ajunge la beneficiarul cadoului.
//               </span>
//             </div>
//             <div className="flex flex-col bg-white drop-shadow-[0_0px_10px_rgba(0,0,0,0.15)] rounded-md my-10 p-10 m-6">
//               <h2 className="text-lg font-[600]">
//                 <span className="border border-[rgb(155,47,14)] rounded-full px-2 py-1.5">
//                   2.
//                 </span>{" "}
//                 Cine primeste cadoul?
//               </h2>
//               <Input
//                 type="text"
//                 name="personReceivingFullName"
//                 label="Nume Complet"
//               />
//               <Input type="text" name="personReceivingPhone" label="Telefon" />
//               <Input
//                 type="text"
//                 name="personReceivingAddress"
//                 label="Adresa Completa"
//               />
//             </div>
//             <div className="flex justify-between m-5 pb-7">
//               <Link
//                 className="font-[300] text-[12px] flex items-center"
//                 href="/cart"
//               >
//                 {" "}
//                 <ChevronLeft className="ml-2 mr-1" strokeWidth={1} size={15} />
//                 Reveniti la cos{" "}
//               </Link>{" "}
//               <Button>Plateste</Button>
//             </div>
//           </div>
//         </div>
//         <div className="hidden lg:flex lg:w-1/2 lg:sticky top-0 py-20 px-10 justify-center bg-[#f5f5f5]">
//           <div className="w-full h-auto">
//             <OrderSummary />
//           </div>
//         </div>
//         <div className="lg:hidden w-full">
//           <div
//             className={`top-[10.5rem] border z-10 border-gray-300 rounded shadow-md`}
//           >
//             <button
//               type="button"
//               onClick={toggleOrderSummary}
//               className="flex w-full p-2.5"
//             >
//               <div className="flex justify-between w-full">
//                 <span className="flex font-bold mr-5 items-center">
//                   <span className="font-[200]">Rezumat comanda</span>
//                 </span>
//                 {isOrderSummaryOpen ? (
//                   <ChevronUp size={23} strokeWidth={1} />
//                 ) : (
//                   <ChevronDown size={23} strokeWidth={1} />
//                 )}
//               </div>
//             </button>
//             <motion.div
//               initial={{ height: 0 }}
//               animate={{ height: isOrderSummaryOpen ? "auto" : 0 }}
//               transition={{ type: "spring", stiffness: 1000, damping: 50 }}
//               className="overflow-hidden"
//             >
//               <div className="p-4">
//                 <OrderSummary />
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </form>
//   );
// }
"use client";
import React, { useState } from "react";
import Input from "@/components/util/input";
import Button from "@/components/util/button";
import Image from "next/image";
import icon from "@/app/icon.png";
import OrderSummary from "../../../components/orders/orderSummary";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { motion } from "framer-motion";

export default async function CheckoutPage() {
  const [isOrderSummaryOpen, setIsOrderSummaryOpen] = useState(false);

  const toggleOrderSummary = () => {
    setIsOrderSummaryOpen(!isOrderSummaryOpen);
  };

  return (
    <form className="flex flex-col md:flex-row h-full">
      <div className="w-full lg:w-1/2 flex flex-col overflow-y-auto items-center border-r border-[#cdcdcb]">
        <div className="relative w-48 h-24 mt-6">
          <Image
            src={icon}
            alt="Image"
            className="object-cover"
            layout="fill"
          />
        </div>
        <div className="flex my-4">
          <Link
            className="font-[300] text-[12px] flex items-center"
            href="/cart"
          >
            Cos <ChevronRight className="ml-2 mr-1" strokeWidth={1} size={15} />
          </Link>
          <span className="font-[500] text-[12px] flex items-center">
            Livrare{" "}
            <ChevronRight className="ml-2 mr-1" strokeWidth={1} size={15} />
          </span>
          <Link
            className="font-[300] text-[12px] flex items-center"
            href="/cart"
          >
            Plata <ChevronRight className="ml-2" strokeWidth={1} size={15} />
          </Link>
        </div>{" "}
        <div className="lg:hidden w-full">
          <div className={`bg-[#f5f5f5] top-[10.5rem] border `}>
            <button
              type="button"
              onClick={toggleOrderSummary}
              className="flex w-full p-2.5 border-b"
            >
              <div className="flex justify-between w-full mx-6">
                <span className="flex font-bold mr-5 items-center">
                  <span className="font-[500]">Rezumatul comenzii</span>
                </span>
                {isOrderSummaryOpen ? (
                  <ChevronUp size={23} strokeWidth={1} />
                ) : (
                  <ChevronDown size={23} strokeWidth={1} />
                )}
              </div>
            </button>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: isOrderSummaryOpen ? "auto" : 0 }}
              transition={{ type: "spring", stiffness: 1000, damping: 50 }}
              className="overflow-hidden"
            >
              <div className="p-4 m-6">
                <OrderSummary />
              </div>
            </motion.div>
          </div>
        </div>
        <div className="h-full md:h-[700px]">
          <div className="flex flex-col bg-white  rounded-md  p-10 mx-6">
            <h2 className="text-lg font-[600]">
              <span className="border border-[rgb(155,47,14)] rounded-full px-2 py-1.5">
                1.
              </span>{" "}
              Cine trimite cadoul?
            </h2>
            <Input type="text" name="personSendingEmail" label="E-mail" />
            <Input type="text" name="personSendingFirstName" label="Nume" />
            <Input type="text" name="personSendingSecondName" label="Prenume" />
            <Input type="text" name="personSendingPhone" label="Telefon" />
            <span className="text-xs ml-5">
              <span className="border border-[rgb(155,47,14)] rounded-full px-1.5 text-[rgb(155,47,14)] mr-3 font-[600]">
                i
              </span>
              Factura se emite exculiv online si pe email. Nicio factura nu
              ajunge la beneficiarul cadoului.
            </span>
          </div>
          <div className="flex flex-col bg-white drop-shadow-[0_0px_10px_rgba(0,0,0,0.15)] rounded-md my-10 p-10 m-6">
            <h2 className="text-lg font-[600]">
              <span className="border border-[rgb(155,47,14)] rounded-full px-2 py-1.5">
                2.
              </span>{" "}
              Cine primeste cadoul?
            </h2>
            <Input
              type="text"
              name="personReceivingFullName"
              label="Nume Complet"
            />
            <Input type="text" name="personReceivingPhone" label="Telefon" />
            <Input
              type="text"
              name="personReceivingAddress"
              label="Adresa Completa"
            />
          </div>
          <div className="flex justify-between m-5 pb-7">
            <Link
              className="font-[300] text-[12px] flex items-center"
              href="/cart"
            >
              <ChevronLeft className="ml-2 mr-1" strokeWidth={1} size={15} />
              Reveniti la cos
            </Link>
            <Button>Plateste</Button>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex lg:w-1/2 lg:sticky top-0 py-20 px-10 justify-center bg-[#f5f5f5]">
        <div className="w-full h-auto">
          <OrderSummary />
        </div>
      </div>
    </form>
  );
}
