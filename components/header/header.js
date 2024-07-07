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
import { useContext, useState } from "react";
import { CartContext } from "@/context/cart-context";
import { useCycle } from "framer-motion";
import MenuToggle from "./menu-toogle";
import classes2 from "./backdrop.module.css";
import MobileHeader from "./header-mobile";

export default function Header() {
  const [isHovering, setIsHovered] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  function openSearchMobile() {
    setIsSearching((prev) => !prev);
  }

  const { toogleOpenCart } = useContext(CartContext);
  const [isOpen, toggleOpen] = useCycle(false, true);

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
              <span onClick={toogleOpenCart}>
                <PiBagThin size={27} />
              </span>
            </div>
          </div>
        </div>
        <SideNav isSearching={isSearching} />
      </div>
      <MobileHeader isOpen={isOpen} toggleOpen={toggleOpen} />
    </>
  );
}
