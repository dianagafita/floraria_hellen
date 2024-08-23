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
import { TbH1 } from "react-icons/tb";

export default function Header() {
  const [isSearching, setIsSearching] = useState(false);

  function openSearchMobile() {
    setIsSearching((prev) => !prev);
  }

  const [isOpen, toggleOpen] = useCycle(false, true);
  const { cartCount, toogleOpenCart } = useCart();

  return (
    <>
      <div className="sticky top-0 bg-white z-[50] shadow-sm">
        <div className="flex flex-col">
          <MiniHeaderSection />
          <div className={classes["main-header-section"]}>
            {isOpen && (
              <div className={classes2.backdrop} onClick={toggleOpen}></div>
            )}
            <span className=" md:hidden">
              <MenuToggle toggle={toggleOpen} isOpen={isOpen} />
            </span>
            <span
              onClick={openSearchMobile}
              className="hidden md:flex  items-center cursor-pointer"
            >
              <Search strokeWidth={0.7} size={27} />
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
              <div
                className="flex relative top-[0.5rem]  md:top-[0.7rem] cursor-pointer"
                onClick={toogleOpenCart}
              >
                <PiBagThin size={27} className=" " />
                {cartCount > 0 ? (
                  <h1 className="absolute left-4 bg-[rgb(116,10,10)] text-white rounded-full px-[5.5px] text-[10px] font-[100]">
                    {cartCount}
                  </h1>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
        <SideNav />
      </div>
      <MobileHeader isOpen={isOpen} toggleOpen={toggleOpen} />
      <Searchbar isVisible={isSearching} openSearch={openSearchMobile} />
    </>
  );
}
