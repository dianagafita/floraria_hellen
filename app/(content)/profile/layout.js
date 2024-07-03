import ProfileMenuDrawer from "@/components/profile/profile-menu-drawer";
import Image from "next/image";
import React from "react";
import imgs from "./3.jpeg";
export default function ProfileLayout({ children }) {
  return (
    // <div className="md:flex  md:items-start p-5 m-5">
    <>
      <div className=" relative">
        <div className={`relative h-[160px] w-[100vw]  ${"order-last"}`}>
          <Image src={imgs} alt="" layout="fill" className="object-over" />
          <div className="absolute inset-0 flex  justify-center text-white text-center bg-black bg-opacity-50 text-5xl font-[100]"></div>
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl md:text-4xl font-[100]">
            PROFIL
          </span>
        </div>
      </div>
      <ProfileMenuDrawer />
      {children}
    </>

    // </div>
  );
}
