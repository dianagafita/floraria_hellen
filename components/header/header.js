"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/header-logo2.jpg";
import classes from "./header.module.css";
import { PiBagThin } from "react-icons/pi";
import { User, Search } from "lucide-react";
import SideNav from "./sidenav/side-nav";
import MiniHeaderSection from "./mini-header-section";
import Searchbar from "./searchbar/search-bar";
import { useState } from "react";
import { useCycle } from "framer-motion";
import MenuToggle from "./menu-toogle";
import classes2 from "./backdrop.module.css";
import MobileHeader from "./header-mobile";
import { useCart } from "@/context/cart-context";

export default function Header() {
  const [isHovering, setIsHovered] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  function openSearchMobile() {
    setIsSearching((prev) => !prev);
  }

  const [isOpen, toggleOpen] = useCycle(false, true);
  const { cartCount, toogleOpenCart } = useCart();

  return (
    <>
      <div className="sticky top-0 bg-white z-[50] shadow-md">
        <div className="flex flex-col">
          <MiniHeaderSection />
          <div className={classes["main-header-section"]}>
            {isOpen && (
              <div className={classes2.backdrop} onClick={toggleOpen}></div>
            )}
            <span className="md:hidden">
              <MenuToggle toggle={toggleOpen} isOpen={isOpen} />
            </span>
            <span
              className="hidden md:flex cursor-pointer items-center"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Search strokeWidth={0.7} size={27} />
              <Searchbar isVisible={isHovering} />
            </span>{" "}
            <Link href="/">
              <Image src={logo} alt="icon" priority />
            </Link>
            <div className={classes.section}>
              <span className={classes.searchIcon} onClick={openSearchMobile}>
                <Search
                  size={32}
                  strokeWidth={0.9}
                  className={classes.searchIcons}
                />
              </span>
              <span className={classes.personIcon}>
                <Link href="/profile">
                  <User strokeWidth={0.9} size={27} />
                </Link>
              </span>
              <div className="flex my-[0.7rem]" onClick={toogleOpenCart}>
                <PiBagThin size={27} className=" " />
                {cartCount > 0 ? (
                  <h className="absolute top-7 right-2 bg-[rgb(116,10,10)] text-white rounded-full px-[5.5px] text-[10px] font-[100]">
                    {cartCount}
                  </h>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
        <SideNav isSearching={isSearching} />
      </div>
      <MobileHeader isOpen={isOpen} toggleOpen={toggleOpen} />
    </>
  );
}
// "use client";
// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import Container from "@mui/material/Container";
// import Badge from "@mui/material/Badge";
// import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useCart } from "@/context/cart-context";

// const pages = ["Products", "Collections", "Blog", "About us"];

// function ResponsiveAppBar() {
//   const router = useRouter();
//   const { cartCount } = useCart();

//   return (
//     <AppBar>
//       <Container>
//         <Toolbar>
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             sx={{
//               mr: 2,
//               display: { xs: "none", md: "flex" },
//               fontWeight: 500,
//               color: "inherit",
//               textDecoration: "none",
//             }}
//             onClick={() => {
//               router.push("/");
//             }}
//             style={{ cursor: "pointer" }}
//           >
//             My Ecommerce Site
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               color="inherit"
//             >
//               Menu{" "}
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorOrigin={{
//                 vertical: "bottom",
//                 horizontal: "left",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "left",
//               }}
//               sx={{
//                 display: { xs: "block", md: "none" },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>

//           <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
//             {pages.map((page) => (
//               <Link
//                 key={page}
//                 style={{ textDecoration: "none", color: "#fff" }}
//                 href="/"
//               >
//                 <Button sx={{ my: 2, color: "white", display: "block" }}>
//                   {page}
//                 </Button>
//               </Link>
//             ))}
//           </Box>

//           <Box
//             sx={{ flexGrow: 0 }}
//             onClick={() => {
//               router.push("/cart");
//             }}
//           >
//             <Tooltip title="Shopping Cart">
//               <IconButton sx={{ p: 0 }}>Cart{cartCount}</IconButton>
//             </Tooltip>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
// export default ResponsiveAppBar;
