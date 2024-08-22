"use client";
import ProfileMenuDrawer from "@/components/profile/profile-menu-drawer";
import Image from "next/image";
import React from "react";
import imgs from "./flowers.jpeg";
import { useValidUser } from "@/context/auth-context";

export default function ProfileLayout({ children }) {
  const { user } = useValidUser();
  console.log(user);
  return (
    <>
      <div className="relative">
        <div className={`relative h-[160px] w-[100vw]  ${"order-last"}`}>
          <Image src={imgs} alt="" fill className="object-over" />
          <div className="absolute inset-0 flex  justify-center text-white text-center bg-black bg-opacity-50 text-5xl font-[100]"></div>
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl md:text-4xl font-[100]">
            PROFIL
          </span>
        </div>
      </div>
      {user ? <ProfileMenuDrawer userId={user} /> : ""}
      {children}
    </>

    // </div>
  );
}
