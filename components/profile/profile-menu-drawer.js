"use client";

import Link from "next/link";
import { PROFILE_MENU } from "@/constants";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { logout } from "@/actions/auth-actions";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

export default function ProfileMenuDrawer({ user }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="top-[10.5rem] border-y z-10 border-gray-300 md:w-full ">
      <div className="flex md:hidden ">
        <button onClick={toggleMenu} className="  flex w-full py-2.5 px-5">
          <div className="flex justify-between w-full">
            <span className="flex font-bold mr-5 items-center">
              <span className="font-[200] text-transform: uppercase">
                {user?.second_name}
              </span>
            </span>
            {isOpen ? (
              <ChevronUp size={25} strokeWidth={0.6} />
            ) : (
              <ChevronDown size={25} strokeWidth={0.6} />
            )}
          </div>
        </button>

        <motion.div
          className={`absolute text-[14px] top-[12.5rem] md:top-[10.1rem] left-0 w-full bg-white shadow-lg z-[10] font-[100] ${
            isOpen ? "h-auto" : "h-0"
          } overflow-hidden`}
          initial={{ height: 0 }}
          animate={{ height: isOpen ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-3.5 p-5 border-t border-[#f5f5g5]">
            {PROFILE_MENU.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="flex justify-between py-1"
              >
                {item.title}
              </Link>
            ))}
            <div className="py-3 mt-3 border-t ">
              <form action={logout}>
                <button className="flex justify-between font-[300]">
                  DECONECTARE
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="hidden md:flex justify-center w-full">
        {user && (
          <div className="flex font-[200] items-center text-[12px] md:text-[13px]">
            <Link
              href="/profile"
              className={`${
                "/profile" === pathname ? "bg-[#f5f5f5]" : ""
              } text-transform: uppercase border-l p-4 border-[#f5f5g5] px-6`}
            >
              {user.second_name}
            </Link>
            {PROFILE_MENU.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className={`flex justify-between px-4 p-4 ${
                  item.href === pathname ? "bg-[#f5f5f5]" : ""
                } ${
                  item.title === "INFORMATII CONT "
                    ? "border-x border-[#f5f5g5]"
                    : "border-r border-[#f5f5g5]"
                }`}
              >
                {item.title}
              </Link>
            ))}
            <form action={logout}>
              <button className="border-r border-[#f5f5g5] px-6 p-4">
                DECONECTARE
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
