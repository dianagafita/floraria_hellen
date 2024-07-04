"use client";

import Link from "next/link";
import { PROFILE_MENU } from "@/constants";
import { usePathname } from "next/navigation";

export default function ProfileMenuDrawer() {
  const pathname = usePathname();

  return (
    <div
      className={` top-[10.5rem] border-y z-10  border-gray-300  shadow-md md:w-full`}
    >
      <div className="flex justify-center w-full">
        <span className="flex font-[200]  items-center text-[12px] md:text-[14px] ">
          <Link
            href="/profile"
            className={`${
              "/profile" === pathname ? " bg-[#f5f5f5]" : ""
            } border-l p-4 border-[#f5f5g5] px-6`}
          ></Link>

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
            >
              {item.title}
            </Link>
          ))}
        </span>
      </div>
    </div>
  );
}
