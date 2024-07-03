import { Facebook, Instagram, User } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { variants } from "@/styles/motion-variants";
import MenuItem from "../header/menu-item";
import GoogleTranslate from "@/app/(content)/GoogleTranslate";
import { languagesLong } from "@/constants";

export default function MobileHeaderFooter({ isLoggedIn }) {
  return (
    <MenuItem className="absolute bottom-0 w-full p-4 bg-white text-center text-sm list-none">
      <div className="flex justify-between items-centerh-[2rem] ">
        <div className="flex  items-center  ">
          <User strokeWidth={0.9} size={27} />
          <span className="ml-2">{isLoggedIn ? "Cont" : "Log In"}</span>
        </div>
        <div className="flex items-center  ">
          <Link
            className="cursor-pointer ]"
            href="https://www.instagram.com/floraria.hellen?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          >
            <Instagram size={23} strokeWidth={1.3} />
          </Link>
          <Link
            className="cursor-pointer ml-[10px]"
            href="https://www.facebook.com/floraria.hellen"
          >
            <Facebook size={23} strokeWidth={1.3} />
          </Link>
          <GoogleTranslate langFormat={languagesLong} />
        </div>
      </div>
    </MenuItem>
  );
}
