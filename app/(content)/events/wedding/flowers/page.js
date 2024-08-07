import Image from "next/image";
import React from "react";
import img from "./t.jpeg";
import { TitleByPath } from "@/components/util/getPathTitle";
import imgs from "./1.jpeg";
import img2 from "./3.jpeg";
import img3 from "./4.jpeg";
import img4 from "./5.jpeg";
import img5 from "./6.jpeg";
import img6 from "./7.jpeg";
import Link from "next/link";

const imga = [
  {
    src: img2,
    href: `/events/wedding/flowers/ARANJAMENT TRANDAFIRI SI BUJORI`,
  },
  { src: img3, href: `/events/wedding/flowers/1` },
  { src: img4, href: `/events/wedding/flowers/1` },
  { src: img5, href: `/events/wedding/flowers/1` },
  { src: img6, href: `/events/wedding/flowers/1` },
  { src: imgs, href: `/events/wedding/flowers/1` },
];

export default function page() {
  const paths = [
    { href: "/events", title: "EVENIMENTE", style: "text-black-300/75" },
    { href: "/events/wedding", title: "NUNTA", style: "text-black" },
    {
      href: "/events/wedding/flowers",
      title: "ARANJAMENTE FLORALE",
      style: "text-black",
    },
  ];
  return (
    <div className="min-h-screen h-full">
      {" "}
      <div className="relative h-[335px] w-full">
        <Image src={img} alt="" fill className="object-cover" />
        <div className="absolute inset-0 flex items-center justify-end text-black text-center bg-black bg-opacity-50 px-5">
          <span className="tracking-widest  bg-white  py-10 px-5 md:px-20 md:mr-20 flex flex-col  text-sm md:text-2xl">
            ARANJAMENTE FLORALE{" "}
            <span className="text-[10px] text-end font-[100] text-[#A8A8A8]">
              Flori naturale si proapete
            </span>
            <Link
              href="/request-offer"
              className="text-[13px] text-end font-[100] text-[#606060] hover:text-[#404040] underline underline-offset-2"
            >
              CERE OFERTA{" "}
            </Link>
          </span>{" "}
        </div>
      </div>
      <TitleByPath paths={paths} />
      <h1 className="text-[2rem] m-[1.5rem] ">GALERIE FOTO</h1>
      <h2 className="text-[1rem] mx-[1.5rem] font-[100] ">
        ALEGETI DIN MODELE DE MAI JOS
      </h2>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 m-5">
        {imga.map((image, index) => (
          <Link
            href={image.href}
            key={index}
            className="relative group overflow-hidden"
          >
            <Image className="max-w-full rounded-md" src={image.src} alt="" />
            <span className=" tracking-widest  absolute inset-0 flex items-center justify-center md:bg-gradient-to-r from-[rgba(0,0,0,0.3)] to-white-600  text-white text-center opacity-0 translate-x-[-100%] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out">
              DETALII
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
