"use client";

import img1 from "@/components/items/images/1.jpg";
import img2 from "@/components/items/images/2.jpg";
import img3 from "@/components/items/images/3.jpg";
import img4 from "@/components/items/images/4.jpg";
import img5 from "@/components/items/images/5.jpg";
import img6 from "@/components/items/images/6.jpg";
import ItemCard from "@/components/items/item-card";
import Image from "next/image";
import i from "./1.jpeg";
import PageInfo from "@/components/main-page/page-info";
import { usePathname } from "next/navigation";
import Title from "@/components/util/title";
import SortItems from "@/components/util/sort-items";
import { TitleByPath } from "@/components/util/getPathTitle";

const images = [
  { t: img1, t2: img6 },
  { t: img2, t2: img5 },
  { t: img3, t2: img4 },
  { t: img4, t2: img3 },
  { t: img5, t2: img2 },
  { t: img6, t2: img1 },
];

const paths = [
  { href: "/plants", title: "PLANTE", style: "text-black-300/75" },
];

export default function PlantsPage() {
  return (
    <div>
      <div className="relative w-full h-[335px]">
        <Image
          src={i}
          alt="Main Image"
          layout="fill"
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white text-center bg-black bg-opacity-50">
          <Title>PLANTE IN GHIVECI</Title>
        </div>
      </div>
      <TitleByPath paths={paths} />
      <div className="m-4">
        <SortItems />

        <ul className="flex flex-wrap justify-center gap-5 mb-5">
          <ItemCard images={images} />
        </ul>
      </div>
    </div>
  );
}
