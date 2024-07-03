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

export default function Header() {
  const [isHovering, setIsHovered] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  function openSearchMobile() {
    setIsSearching((prev) => !prev);
  }

  const { toogleOpenCart } = useContext(CartContext);

  return (
    <div className="sticky top-0 bg-white z-[50]">
      <div className="flex flex-col">
        <MiniHeaderSection />
        <div className={classes["main-header-section"]}>
          <span className={classes.space}></span>
          <span
            className="hidden md:flex cursor-pointer items-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Search strokeWidth={0.7} size={27} />
            <Searchbar isVisible={isHovering} />
          </span>
          <Link href="/">
            <Image src={logo} alt="icon" priority />
          </Link>
          <div className={classes.section}>
            <span className={classes.searchIcon} onClick={openSearchMobile}>
              <Search
                size={32}
                strokeWidth={0.5}
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
  );
}
