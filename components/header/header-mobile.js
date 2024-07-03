// // // "use client";

// // // import { useState, useEffect } from "react";
// // // import Link from "next/link";
// // // import { usePathname } from "next/navigation";
// // // import classes from "./backdrop.module.css";
// // // import { SIDENAV_ITEMS, languagesShort } from "@/constants";
// // // import { motion, useCycle } from "framer-motion";
// // // import { ChevronDown } from "lucide-react";
// // // import {
// // //   variansts_sidenav_items,
// // //   variants,
// // //   variants_menu_item2,
// // //   variants_sidebar,
// // //   variants_sub_menu_item,
// // //   variants_nested_sub_menu_item,
// // //   variants_sidebar3,
// // // } from "@/styles/motion-variants";
// // // import MenuItem from "./menu-item";
// // // import GoogleTranslate from "@/app/(content)/GoogleTranslate";
// // // import MobileHeaderFooter from "../footer/mobile-header-footer";
// // // import MenuToggle from "./menu-toogle";

// // // export default function MobileHeader() {
// // //   const pathname = usePathname();
// // //   const [isOpen, toggleOpen] = useCycle(false, true);

// // //   return (
// // //     <>
// // //       {isOpen && <div className={classes.backdrop} onClick={toggleOpen}></div>}
// // //       <motion.nav
// // //         initial={false}
// // //         animate={isOpen ? "open" : "closed"}
// // //         className={`fixed z-[60] inset-0 w-[60%] md:hidden ${
// // //           isOpen ? "" : "pointer-events-none"
// // //         }`}
// // //       >
// // //         <motion.div
// // //           className="absolute inset-0 left-0 w-full bg-white"
// // //           variants={variants_sidebar}
// // //         />
// // //         <div className="absolute flex justify-between items-center w-full p-4 pt-[2rem] z-[1100]">
// // //           <MenuToggle toggle={toggleOpen} />
// // //           <motion.li
// // //             variants={variants_sidebar3}
// // //             className="list-none text-sm "
// // //           >
// // //             <GoogleTranslate langFormat={languagesShort} />
// // //           </motion.li>
// // //         </div>
// // //         <motion.ul
// // //           variants={variansts_sidenav_items}
// // //           className="absolute top-10 grid w-full px-3 py-16 max-h-screen overflow-y-auto "
// // //         >
// // //           <div>
// // //             {SIDENAV_ITEMS.map((item, idx) => {
// // //               const isLastItem = idx === SIDENAV_ITEMS.length - 1;

// // //               return (
// // //                 <div key={idx}>
// // //                   {item.submenu ? (
// // //                     <MenuItemWithSubMenu item={item} isOpen={isOpen} />
// // //                   ) : (
// // //                     <MenuItem>
// // //                       <Link
// // //                         href={item.path}
// // //                         onClick={() => toggleOpen()}
// // //                         className={`flex w-full h-full font-light text-m md:text-xl py-[13px] ${
// // //                           item.path === pathname ? "font-medium text-black" : ""
// // //                         }`}
// // //                       >
// // //                         {item.title}
// // //                       </Link>
// // //                     </MenuItem>
// // //                   )}

// // //                   {!isLastItem && (
// // //                     <MenuItem className="h-px w-full bg-gray-300" />
// // //                   )}
// // //                 </div>
// // //               );
// // //             })}
// // //           </div>
// // //         </motion.ul>
// // //         <motion.div variants={variansts_sidenav_items}>
// // //           <MobileHeaderFooter />
// // //         </motion.div>
// // //       </motion.nav>
// // //     </>
// // //   );
// // // }

// // // function MenuItemWithSubMenu({ item, isOpen }) {
// // //   const pathname = usePathname();
// // //   const [subMenuOpen, setSubMenuOpen] = useState(false);

// // //   useEffect(() => {
// // //     if (!isOpen) {
// // //       setSubMenuOpen(false);
// // //     }
// // //   }, [isOpen]);

// // //   const toggleSubMenu = () => {
// // //     setSubMenuOpen(!subMenuOpen);
// // //   };

// // //   return (
// // //     <>
// // //       <MenuItem>
// // //         <button
// // //           className="flex w-full font-light text-m md:text-xl py-[13px]"
// // //           onClick={toggleSubMenu}
// // //         >
// // //           <div className="flex flex-row justify-between w-full items-center">
// // //             <span
// // //               className={`${pathname.includes(item.path) ? "font-bold" : ""}`}
// // //             >
// // //               {item.title}
// // //             </span>
// // //             <div
// // //               style={{
// // //                 fontWeight: "100",
// // //                 marginLeft: "0.5rem",
// // //                 paddingLeft: "0.5rem",
// // //                 borderLeft: "rgb(204, 204, 204) solid 1px",
// // //               }}
// // //             >
// // //               <div className={`${subMenuOpen && "rotate-180"}`}>
// // //                 <ChevronDown
// // //                   size={32}
// // //                   strokeWidth={0.5}
// // //                   width="20"
// // //                   height="20"
// // //                 />
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </button>
// // //       </MenuItem>
// // //       <div className="ml-2 flex flex-col">
// // //         {isOpen && (
// // //           <motion.ul
// // //             initial={false}
// // //             animate={subMenuOpen ? "open" : "closed"}
// // //             variants={variants}
// // //             className="mb-2"
// // //           >
// // //             {item.subMenuItems?.map((subItem, subIdx) => (
// // //               <motion.li
// // //                 key={subIdx}
// // //                 variants={variants_sub_menu_item}
// // //                 className="font-light"
// // //               >
// // //                 {/* Render sub-menu item or nested sub-menu if it exists */}
// // //                 {subItem.subMenuItemsMenu ? (
// // //                   <MenuItemWithNestedSubMenu
// // //                     item={subItem}
// // //                     isOpen={subMenuOpen}
// // //                   />
// // //                 ) : (
// // //                   <MenuItem>
// // //                     <Link
// // //                       href={subItem.path}
// // //                       className={` ${
// // //                         subItem.path === pathname ? "font-bold" : ""
// // //                       }`}
// // //                     >
// // //                       {subItem.title}
// // //                     </Link>
// // //                   </MenuItem>
// // //                 )}
// // //               </motion.li>
// // //             ))}
// // //           </motion.ul>
// // //         )}
// // //       </div>
// // //     </>
// // //   );
// // // }

// // // function MenuItemWithNestedSubMenu({ item, isOpen }) {
// // //   const pathname = usePathname();
// // //   const [nestedSubMenuOpen, setNestedSubMenuOpen] = useState(false);

// // //   useEffect(() => {
// // //     if (!isOpen) {
// // //       setNestedSubMenuOpen(false);
// // //     }
// // //   }, [isOpen]);

// // //   const toggleNestedSubMenu = () => {
// // //     setNestedSubMenuOpen(!nestedSubMenuOpen);
// // //   };

// // //   return (
// // //     <>
// // //       <MenuItem>
// // //         <button
// // //           className="flex w-full font-light text-m md:text-xl py-[13px]"
// // //           onClick={toggleNestedSubMenu}
// // //         >
// // //           <div className="flex flex-row justify-between w-full items-center text-[15px]">
// // //             <span
// // //               className={`${pathname.includes(item.path) ? "font-bold" : ""}`}
// // //             >
// // //               {item.title}
// // //             </span>
// // //             <div
// // //               style={{
// // //                 fontWeight: "100",
// // //                 marginLeft: "0.5rem",
// // //                 paddingLeft: "0.5rem",
// // //                 borderLeft: "rgb(204, 204, 204) solid 1px",
// // //               }}
// // //             >
// // //               <div className={`${nestedSubMenuOpen && "rotate-180"}`}>
// // //                 <ChevronDown
// // //                   size={32}
// // //                   strokeWidth={0.5}
// // //                   width="20"
// // //                   height="20"
// // //                 />
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </button>
// // //       </MenuItem>
// // //       <div className="ml-2 flex flex-col">
// // //         {isOpen && (
// // //           <motion.ul
// // //             initial={false}
// // //             animate={nestedSubMenuOpen ? "open" : "closed"}
// // //             variants={variants_nested_sub_menu_item}
// // //             className="mb-2"
// // //           >
// // //             {item.subMenuItemsMenu?.map((nestedSubItem, nestedSubIdx) => (
// // //               <motion.li
// // //                 key={nestedSubIdx}
// // //                 variants={variants_sub_menu_item}
// // //                 className="font-[100]"
// // //               >
// // //                 <MenuItem>
// // //                   <Link
// // //                     href={nestedSubItem.path}
// // //                     className={` ${
// // //                       nestedSubItem.path === pathname ? "font-bold" : ""
// // //                     }`}
// // //                   >
// // //                     {nestedSubItem.title}
// // //                   </Link>
// // //                 </MenuItem>
// // //               </motion.li>
// // //             ))}
// // //           </motion.ul>
// // //         )}
// // //       </div>
// // //     </>
// // //   );
// // // }
// // "use client";

// // import { useState, useEffect } from "react";
// // import Link from "next/link";
// // import { usePathname } from "next/navigation";
// // import { motion, useCycle } from "framer-motion";
// // import { ChevronDown } from "lucide-react";
// // import { SIDENAV_ITEMS, languagesShort } from "@/constants";
// // import GoogleTranslate from "@/app/(content)/GoogleTranslate";
// // import MobileHeaderFooter from "../footer/mobile-header-footer";
// // import MenuToggle from "./menu-toogle";
// // import classes from "./backdrop.module.css";

// // const sidebarVariants = {
// //   open: {
// //     x: 0,
// //     transition: {
// //       type: "spring",
// //       stiffness: 500,
// //       damping: 100,
// //       staggerChildren: 0.1,
// //     },
// //   },
// //   closed: {
// //     x: "-100%",
// //     transition: {
// //       type: "spring",
// //       stiffness: 500,
// //       damping: 100,
// //     },
// //   },
// // };

// // const menuItemVariants = {
// //   open: {
// //     opacity: 1,
// //     y: 0,
// //     transition: { type: "spring", stiffness: 50, damping: 20 },
// //   },
// //   closed: {
// //     opacity: 0,
// //     y: -20,
// //     transition: { type: "spring", stiffness: 50, damping: 20 },
// //   },
// // };

// // export default function MobileHeader() {
// //   const pathname = usePathname();
// //   const [isOpen, toggleOpen] = useCycle(false, true);

// //   return (
// //     <>
// //       {isOpen && <div className={classes.backdrop} onClick={toggleOpen}></div>}
// //       <motion.nav
// //         initial={false}
// //         animate={isOpen ? "open" : "closed"}
// //         variants={sidebarVariants}
// //         className={`fixed z-[60] inset-0 w-[60%] md:hidden bg-white`}
// //       >
// //         <div className="flex justify-between items-center w-full p-4 pt-[2rem]">
// //           <MenuToggle toggle={toggleOpen} />
// //           <motion.div variants={menuItemVariants}>
// //             <GoogleTranslate langFormat={languagesShort} />
// //           </motion.div>
// //         </div>
// //         <motion.ul className="grid w-full px-3 py-16 max-h-screen overflow-y-auto">
// //           {SIDENAV_ITEMS.map((item, idx) => (
// //             <MenuItemWithSubMenu
// //               key={idx}
// //               item={item}
// //               isOpen={isOpen}
// //               toggleOpen={toggleOpen}
// //               pathname={pathname}
// //             />
// //           ))}
// //         </motion.ul>
// //         <motion.div variants={menuItemVariants}>
// //           <MobileHeaderFooter />
// //         </motion.div>
// //       </motion.nav>
// //     </>
// //   );
// // }

// // function MenuItemWithSubMenu({ item, isOpen, toggleOpen, pathname }) {
// //   const [subMenuOpen, setSubMenuOpen] = useState(false);

// //   useEffect(() => {
// //     if (!isOpen) {
// //       setSubMenuOpen(false);
// //     }
// //   }, [isOpen]);

// //   const toggleSubMenu = () => {
// //     setSubMenuOpen(!subMenuOpen);
// //   };

// //   return (
// //     <>
// //       <motion.li variants={menuItemVariants} className="mb-2">
// //         <button
// //           className="flex w-full font-light text-m md:text-xl py-[13px]"
// //           onClick={toggleSubMenu}
// //         >
// //           <div className="flex flex-row justify-between w-full items-center">
// //             <span
// //               className={`${pathname.includes(item.path) ? "font-bold" : ""}`}
// //             >
// //               {item.title}
// //             </span>
// //             <div
// //               style={{
// //                 fontWeight: "100",
// //                 marginLeft: "0.5rem",
// //                 paddingLeft: "0.5rem",
// //                 borderLeft: "rgb(204, 204, 204) solid 1px",
// //               }}
// //             >
// //               <div className={`${subMenuOpen && "rotate-180"}`}>
// //                 <ChevronDown
// //                   size={32}
// //                   strokeWidth={0.5}
// //                   width="20"
// //                   height="20"
// //                 />
// //               </div>
// //             </div>
// //           </div>
// //         </button>
// //       </motion.li>
// //       <div className="ml-2 flex flex-col">
// //         {isOpen && subMenuOpen && (
// //           <motion.ul
// //             initial={false}
// //             animate={subMenuOpen ? "open" : "closed"}
// //             variants={sidebarVariants}
// //             className="mb-2"
// //           >
// //             {item.subMenuItems?.map((subItem, subIdx) => (
// //               <motion.li
// //                 key={subIdx}
// //                 variants={menuItemVariants}
// //                 className="font-light"
// //               >
// //                 <Link
// //                   href={subItem.path}
// //                   className={` ${subItem.path === pathname ? "font-bold" : ""}`}
// //                   onClick={() => toggleOpen()}
// //                 >
// //                   {subItem.title}
// //                 </Link>
// //               </motion.li>
// //             ))}
// //           </motion.ul>
// //         )}
// //       </div>
// //     </>
// //   );
// // }
// // "use client";

// // import { useState, useEffect } from "react";
// // import Link from "next/link";
// // import { usePathname } from "next/navigation";
// // import { motion, useCycle } from "framer-motion";
// // import { ChevronDown } from "lucide-react";
// // import { SIDENAV_ITEMS, languagesShort } from "@/constants";
// // import GoogleTranslate from "@/app/(content)/GoogleTranslate";
// // import MobileHeaderFooter from "../footer/mobile-header-footer";
// // import MenuToggle from "./menu-toogle";
// // import classes from "./backdrop.module.css";

// // const sidebarVariants = {
// //   open: {
// //     x: 0,
// //     transition: {
// //       type: "spring",
// //       stiffness: 500,
// //       damping: 100,
// //       staggerChildren: 0.1,
// //     },
// //   },
// //   closed: {
// //     x: "-100%",
// //     transition: {
// //       type: "spring",
// //       stiffness: 500,
// //       damping: 100,
// //     },
// //   },
// // };

// // const menuItemVariants = {
// //   open: {
// //     opacity: 1,
// //     y: 0,
// //     transition: { type: "spring", stiffness: 50, damping: 20 },
// //   },
// //   closed: {
// //     opacity: 0,
// //     y: -20,
// //     transition: { type: "spring", stiffness: 50, damping: 20 },
// //   },
// // };

// // export default function MobileHeader() {
// //   const pathname = usePathname();
// //   const [isOpen, toggleOpen] = useCycle(false, true);

// //   return (
// //     <>
// //       {isOpen && <div className={classes.backdrop} onClick={toggleOpen}></div>}
// //       <div className="fixed top-[1.9rem] left-0 z-[70] p-4">
// //         <MenuToggle toggle={toggleOpen} />
// //       </div>
// //       <motion.nav
// //         initial={false}
// //         animate={isOpen ? "open" : "closed"}
// //         variants={sidebarVariants}
// //         className={` fixed z-[60] inset-0 w-[60%] md:hidden bg-white`}
// //       >
// //         <div className="flex justify-end  w-full p-4 pt-[2rem]">
// //           <motion.div variants={menuItemVariants}>
// //             <GoogleTranslate langFormat={languagesShort} />
// //           </motion.div>
// //         </div>
// //         <motion.ul className="grid w-full px-3 py-16 max-h-screen overflow-y-auto">
// //           {SIDENAV_ITEMS.map((item, idx) => (
// //             <MenuItemWithSubMenu
// //               key={idx}
// //               item={item}
// //               isOpen={isOpen}
// //               toggleOpen={toggleOpen}
// //               pathname={pathname}
// //             />
// //           ))}
// //         </motion.ul>
// //         <motion.div variants={menuItemVariants}>
// //           <MobileHeaderFooter />
// //         </motion.div>
// //       </motion.nav>
// //     </>
// //   );
// // }

// // function MenuItemWithSubMenu({ item, isOpen, toggleOpen, pathname }) {
// //   const [subMenuOpen, setSubMenuOpen] = useState(false);

// //   useEffect(() => {
// //     if (!isOpen) {
// //       setSubMenuOpen(false);
// //     }
// //   }, [isOpen]);

// //   const toggleSubMenu = () => {
// //     setSubMenuOpen(!subMenuOpen);
// //   };

// //   return (
// //     <>
// //       <motion.li variants={menuItemVariants} className="mb-2">
// //         <button
// //           className="flex w-full font-light text-m md:text-xl py-[13px]"
// //           onClick={toggleSubMenu}
// //         >
// //           <div className="flex flex-row justify-between w-full items-center">
// //             <span
// //               className={`${pathname.includes(item.path) ? "font-bold" : ""}`}
// //             >
// //               {item.title}
// //             </span>
// //             <div
// //               style={{
// //                 fontWeight: "100",
// //                 marginLeft: "0.5rem",
// //                 paddingLeft: "0.5rem",
// //                 borderLeft: "rgb(204, 204, 204) solid 1px",
// //               }}
// //             >
// //               <div className={`${subMenuOpen && "rotate-180"}`}>
// //                 <ChevronDown
// //                   size={32}
// //                   strokeWidth={0.5}
// //                   width="20"
// //                   height="20"
// //                 />
// //               </div>
// //             </div>
// //           </div>
// //         </button>
// //       </motion.li>
// //       <div className="ml-2 flex flex-col">
// //         {isOpen && subMenuOpen && (
// //           <motion.ul
// //             initial={false}
// //             animate={subMenuOpen ? "open" : "closed"}
// //             variants={sidebarVariants}
// //             className="mb-2"
// //           >
// //             {item.subMenuItems?.map((subItem, subIdx) => (
// //               <motion.li
// //                 key={subIdx}
// //                 variants={menuItemVariants}
// //                 className="font-light"
// //               >
// //                 <Link
// //                   href={subItem.path}
// //                   className={` ${subItem.path === pathname ? "font-bold" : ""}`}
// //                   onClick={() => toggleOpen()}
// //                 >
// //                   {subItem.title}
// //                 </Link>
// //               </motion.li>
// //             ))}
// //           </motion.ul>
// //         )}
// //       </div>
// //     </>
// //   );
// // }
// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { motion, useCycle } from "framer-motion";
// import { ChevronDown } from "lucide-react";
// import { SIDENAV_ITEMS, languagesShort } from "@/constants";
// import GoogleTranslate from "@/app/(content)/GoogleTranslate";
// import MobileHeaderFooter from "../footer/mobile-header-footer";
// import classes from "./backdrop.module.css";
// import MenuToggle from "./menu-toogle";

// const sidebarVariants = {
//   open: {
//     x: 0,
//     transition: {
//       type: "spring",
//       stiffness: 500,
//       damping: 100,
//       staggerChildren: 0.1,
//     },
//   },
//   closed: {
//     x: "-100%",
//     transition: {
//       type: "spring",
//       stiffness: 500,
//       damping: 100,
//     },
//   },
// };

// const menuItemVariants = {
//   open: {
//     opacity: 1,
//     y: 0,
//     transition: { type: "spring", stiffness: 50, damping: 20 },
//   },
//   closed: {
//     opacity: 0,
//     y: -20,
//     transition: { type: "spring", stiffness: 50, damping: 20 },
//   },
// };

// export default function MobileHeader() {
//   const pathname = usePathname();
//   const [isOpen, toggleOpen] = useCycle(false, true);

//   return (
//     <>
//       {isOpen && <div className={classes.backdrop} onClick={toggleOpen}></div>}
//       <div className="fixed top-[1.9rem] left-0 z-[70] p-4">
//         <MenuToggle toggle={toggleOpen} />
//       </div>
//       <motion.nav
//         initial={false}
//         animate={isOpen ? "open" : "closed"}
//         variants={sidebarVariants}
//         className={`fixed z-[60] inset-0 w-[60%] md:hidden bg-white`}
//       >
//         <div className="flex justify-end w-full p-4 pt-[2rem]">
//           <motion.div variants={menuItemVariants}>
//             <GoogleTranslate langFormat={languagesShort} />
//           </motion.div>
//         </div>
//         <motion.ul className="grid w-full px-3 py-16 max-h-screen overflow-y-auto">
//           {SIDENAV_ITEMS.map((item, idx) => (
//             <MenuItemWithSubMenu
//               key={idx}
//               item={item}
//               isOpen={isOpen}
//               toggleOpen={toggleOpen}
//               pathname={pathname}
//             />
//           ))}
//         </motion.ul>
//         <motion.div variants={menuItemVariants}>
//           <MobileHeaderFooter />
//         </motion.div>
//       </motion.nav>
//     </>
//   );
// }

// function MenuItemWithSubMenu({ item, isOpen, toggleOpen, pathname }) {
//   const [subMenuOpen, setSubMenuOpen] = useState(false);

//   useEffect(() => {
//     if (!isOpen) {
//       setSubMenuOpen(false);
//     }
//   }, [isOpen]);

//   const toggleSubMenu = () => {
//     setSubMenuOpen(!subMenuOpen);
//   };

//   return (
//     <>
//       <motion.li variants={menuItemVariants} className="mb-2">
//         <button
//           className="flex w-full font-light text-m md:text-xl py-[13px]"
//           onClick={toggleSubMenu}
//         >
//           <div className="flex flex-row justify-between w-full items-center">
//             <span
//               className={`${pathname.includes(item.path) ? "font-bold" : ""}`}
//             >
//               {item.title}
//             </span>
//             <div
//               style={{
//                 fontWeight: "100",
//                 marginLeft: "0.5rem",
//                 paddingLeft: "0.5rem",
//                 borderLeft: "rgb(204, 204, 204) solid 1px",
//               }}
//             >
//               <div className={`${subMenuOpen && "rotate-180"}`}>
//                 <ChevronDown
//                   size={32}
//                   strokeWidth={0.5}
//                   width="20"
//                   height="20"
//                 />
//               </div>
//             </div>
//           </div>
//         </button>
//       </motion.li>
//       <div className="ml-2 flex flex-col">
//         {isOpen && subMenuOpen && (
//           <motion.ul
//             initial={false}
//             animate={subMenuOpen ? "open" : "closed"}
//             variants={sidebarVariants}
//             className="mb-2"
//           >
//             {item.subMenuItems?.map((subItem, subIdx) => (
//               <motion.li
//                 key={subIdx}
//                 variants={menuItemVariants}
//                 className="font-light"
//               >
//                 <Link
//                   href={subItem.path}
//                   className={` ${subItem.path === pathname ? "font-bold" : ""}`}
//                   onClick={() => toggleOpen()}
//                 >
//                   {subItem.title}
//                 </Link>
//               </motion.li>
//             ))}
//           </motion.ul>
//         )}
//       </div>
//     </>
//   );
// }
// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { motion, useCycle } from "framer-motion";
// import { ChevronDown } from "lucide-react";
// import { SIDENAV_ITEMS, languagesShort } from "@/constants";
// import GoogleTranslate from "@/app/(content)/GoogleTranslate";
// import MobileHeaderFooter from "../footer/mobile-header-footer";
// import classes from "./backdrop.module.css";
// import MenuToggle from "./menu-toogle";

// const sidebarVariants = {
//   open: {
//     x: 0,
//     transition: {
//       type: "spring",
//       stiffness: 500,
//       damping: 60,
//       staggerChildren: 0.1,
//     },
//   },
//   closed: {
//     x: "-100%",
//     transition: {
//       type: "spring",
//       stiffness: 500,
//       damping: 50,
//     },
//   },
// };

// const menuItemVariants = {
//   open: {
//     opacity: 1,
//     y: 0,
//     transition: { type: "spring", stiffness: 100, damping: 50 },
//   },
//   closed: {
//     opacity: 0,
//     y: -20,
//     transition: { type: "spring", stiffness: 100, damping: 50 },
//   },
// };

// export default function MobileHeader() {
//   const pathname = usePathname();
//   const [isOpen, toggleOpen] = useCycle(false, true);

//   return (
//     <>
//       {isOpen && <div className={classes.backdrop} onClick={toggleOpen}></div>}
//       <div className="md:hidden fixed top-[1.9rem] left-0 z-[70] p-4">
//         <MenuToggle toggle={toggleOpen} isOpen={isOpen} />
//       </div>
//       <motion.nav
//         initial={false}
//         animate={isOpen ? "open" : "closed"}
//         variants={sidebarVariants}
//         className={`fixed z-[60]  inset-0 w-[60%] md:hidden bg-white`}
//       >
//         <motion.ul className="grid w-full mt-10 px-3 py-16 max-h-screen overflow-y-auto">
//           {SIDENAV_ITEMS.map((item, idx) => (
//             <MenuItemWithSubMenu
//               key={idx}
//               item={item}
//               isOpen={isOpen}
//               toggleOpen={toggleOpen}
//               pathname={pathname}
//             />
//           ))}
//         </motion.ul>
//         <motion.div variants={menuItemVariants}>
//           <MobileHeaderFooter />
//         </motion.div>
//       </motion.nav>
//     </>
//   );
// }

// function MenuItemWithSubMenu({ item, isOpen, toggleOpen, pathname }) {
//   const [subMenuOpen, setSubMenuOpen] = useState(false);

//   useEffect(() => {
//     if (!isOpen) {
//       setSubMenuOpen(false);
//     }
//   }, [isOpen]);

//   const toggleSubMenu = () => {
//     setSubMenuOpen(!subMenuOpen);
//   };

//   return (
//     <>
//       <motion.li variants={menuItemVariants} className="mb-2">
//         <button
//           className="flex w-full font-light text-m md:text-xl py-[13px]"
//           onClick={toggleSubMenu}
//         >
//           <div className="flex flex-row justify-between w-full items-center">
//             <span
//               className={`${pathname.includes(item.path) ? "font-bold" : ""}`}
//             >
//               {item.title}
//             </span>
//             <div
//               style={{
//                 fontWeight: "100",
//                 marginLeft: "0.5rem",
//                 paddingLeft: "0.5rem",
//                 borderLeft: "rgb(204, 204, 204) solid 1px",
//               }}
//             >
//               <div className={`${subMenuOpen && "rotate-180"}`}>
//                 <ChevronDown
//                   size={32}
//                   strokeWidth={0.5}
//                   width="20"
//                   height="20"
//                 />
//               </div>
//             </div>
//           </div>
//         </button>
//       </motion.li>
//       <div className="ml-2 flex flex-col">
//         {isOpen && subMenuOpen && (
//           <motion.ul
//             initial={false}
//             animate={subMenuOpen ? "open" : "closed"}
//             variants={sidebarVariants}
//             className="mb-2"
//           >
//             {item.subMenuItems?.map((subItem, subIdx) => (
//               <motion.li
//                 key={subIdx}
//                 variants={menuItemVariants}
//                 className="font-light"
//               >
//                 <Link
//                   href={subItem.path}
//                   className={` ${subItem.path === pathname ? "font-bold" : ""}`}
//                   onClick={() => toggleOpen()}
//                 >
//                   {subItem.title}
//                 </Link>
//               </motion.li>
//             ))}
//           </motion.ul>
//         )}
//       </div>
//     </>
//   );
// }
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useCycle } from "framer-motion";
import { ChevronDown } from "lucide-react";
import GoogleTranslate from "@/app/(content)/GoogleTranslate";
import MobileHeaderFooter from "../footer/mobile-header-footer";
import classes from "./backdrop.module.css";
import MenuToggle from "./menu-toogle";
import { SIDENAV_ITEMS, languagesLong } from "@/constants";

const sidebarVariants = {
  open: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      staggerChildren: 0.1,
    },
  },
  closed: {
    x: "-100%",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
};

const menuItemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 70,
      staggerChildren: 0.1,
    },
  },
  closed: {
    opacity: 0,
    y: -20,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 50,
      staggerChildren: 0.1,
    },
  },
};

const variants_nested_sub_menu_item = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20,
      staggerChildren: 0.1,
    },
  },
  closed: {
    opacity: 0,
    y: -10,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20,
      staggerChildren: 0.1,
    },
  },
};

// const menuItemVariants = {
//   open: {
//     opacity: 1,
//     y: 0,
//     transition: { type: "spring", stiffness: 50, damping: 20 },
//   },
//   closed: {
//     opacity: 0,
//     y: -20,
//     transition: { type: "spring", stiffness: 50, damping: 20 },
//   },
// };

// const variants_nested_sub_menu_item = {
//   open: {
//     opacity: 1,
//     y: 0,
//     transition: { type: "spring", stiffness: 50, damping: 20 },
//   },
//   closed: {
//     opacity: 0,
//     y: -20,
//     transition: { type: "spring", stiffness: 50, damping: 20 },
//   },
// };

export default function MobileHeader() {
  const pathname = usePathname();
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <>
      {isOpen && <div className={classes.backdrop} onClick={toggleOpen}></div>}
      <div className=" md:hidden fixed top-[1.6rem] left-0 z-[70] p-4">
        <MenuToggle toggle={toggleOpen} isOpen={isOpen} />
      </div>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
        className={`fixed z-[60] inset-0 w-[70%] md:hidden bg-white`}
      >
        <motion.ul className="grid mt-10 w-full px-3 py-16 max-h-screen overflow-y-auto">
          {SIDENAV_ITEMS.map((item, idx) => (
            <MenuItemWithSubMenu
              key={idx}
              item={item}
              isOpen={isOpen}
              toggleOpen={toggleOpen}
              pathname={pathname}
            />
          ))}
        </motion.ul>
        {/* <motion.div variants={menuItemVariants}> */}
        <MobileHeaderFooter />
        {/* </motion.div> */}
      </motion.nav>
    </>
  );
}
// MenuItemWithSubMenu Component
function MenuItemWithSubMenu({ item, isOpen, toggleOpen, pathname }) {
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setSubMenuOpen(false);
    }
  }, [isOpen]);

  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  return (
    <>
      <motion.li variants={menuItemVariants} className="mb-2 text-sm">
        {item.submenu && (
          <button
            className="flex w-full font-light md:text-xl py-2"
            onClick={toggleSubMenu}
          >
            <div className="flex flex-row justify-between w-full items-center">
              <span
                className={`${
                  pathname.includes(item.path) ? "font-[400]" : ""
                }`}
              >
                {item.title}
              </span>
              <div
                style={{
                  fontWeight: "100",
                  marginLeft: "0.5rem",
                  paddingLeft: "0.5rem",
                  borderLeft: "rgb(204, 204, 204) solid 1px",
                }}
              >
                <div className={`${subMenuOpen && "rotate-180"}`}>
                  <ChevronDown
                    size={32}
                    strokeWidth={0.5}
                    width="20"
                    height="20"
                  />
                </div>
              </div>
            </div>
          </button>
        )}
        {!item.submenu && (
          <Link
            href={item.path}
            onClick={toggleOpen}
            passHref
            className={`flex w-full font-light text-m md:text-xl py-1 ${
              item.path === pathname ? "font-[400] text-black" : ""
            }`}
          >
            {item.title}
          </Link>
        )}
      </motion.li>
      {item.subMenuItems && (
        <motion.ul
          initial={false}
          animate={subMenuOpen ? "open" : "closed"}
          variants={variants_nested_sub_menu_item}
          className={`ml-2 flex flex-col ${
            subMenuOpen ? "" : "mt-[1rem] hidden md:block"
          }`}
        >
          {item.subMenuItems.map((subItem, subIdx) => (
            <MenuItemWithNestedSubMenu
              key={subIdx}
              item={subItem}
              isOpen={isOpen}
              toggleOpen={toggleOpen}
              pathname={pathname}
            />
          ))}
        </motion.ul>
      )}
    </>
  );
}

function MenuItemWithNestedSubMenu({ item, isOpen, toggleOpen, pathname }) {
  const [nestedSubMenuOpen, setNestedSubMenuOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setNestedSubMenuOpen(false);
    }
  }, [isOpen]);

  const toggleNestedSubMenu = () => {
    setNestedSubMenuOpen(!nestedSubMenuOpen);
  };

  return (
    <>
      <motion.li variants={variants_nested_sub_menu_item} className="mb-2 ">
        <button
          className="flex w-full  font-light md:text-xl py-1"
          onClick={toggleNestedSubMenu}
        >
          <div className="flex flex-row justify-between w-full items-center text-[15px]">
            <span
              className={`text-[14px]  ${
                pathname.includes(item.path) ? "font-[400]" : ""
              }`}
            >
              {item.title}
            </span>
            <div
              style={{
                fontWeight: "100",
                marginLeft: "0.5rem",
                paddingLeft: "0.5rem",
                borderLeft: "rgb(204, 204, 204) solid 1px",
              }}
            >
              <div className={`${nestedSubMenuOpen && "rotate-180"}`}>
                <ChevronDown
                  size={32}
                  strokeWidth={0.5}
                  width="20"
                  height="20"
                />
              </div>
            </div>
          </div>
        </button>
      </motion.li>
      {isOpen && (
        <motion.ul
          initial={false}
          animate={nestedSubMenuOpen ? "open" : "closed"}
          variants={variants_nested_sub_menu_item}
          className={` flex flex-col my-2 ${
            nestedSubMenuOpen ? "" : "mt-[1rem] hidden md:block "
          }`}
        >
          {item.subMenuItemsMenu?.map((nestedSubItem, nestedSubIdx) => (
            <motion.li
              key={nestedSubIdx}
              variants={menuItemVariants}
              className="font-[100] mb-2"
            >
              <Link
                href={nestedSubItem.path}
                className={`${
                  nestedSubItem.path === pathname ? "font-[400]" : ""
                }`}
              >
                {nestedSubItem.title}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </>
  );
}
