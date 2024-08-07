import ShortcutItemCard from "@/components/items/shortcut-item-card";
import ItemCard from "@/components/items/item-card";
import Image from "next/image";
import SortItems from "@/components/util/sort-items";

import img1 from "@/components/items/images/1.jpg";
import img2 from "@/components/items/images/2.jpg";
import img3 from "@/components/items/images/3.jpg";
import img4 from "@/components/items/images/4.jpg";
import img5 from "@/components/items/images/5.jpg";
import img6 from "@/components/items/images/6.jpg";

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
  {
    href: "/flower-bouquets",
    title: "BUCHETE FLORI",
    style: "text-black-300/75",
  },
];

export default function page({ data }) {
  return (
    <div className="relative w-full">
      {/* Main Image Section */}
      <div className="relative h-[335px] w-full">
        <Image src={img1} alt="" fill className="object-cover" />
        <div className="absolute inset-0 flex items-center justify-end text-black text-center bg-black bg-opacity-50">
          <span className="bg-white  p-10 mr-20 flex flex-col text-2xl">
            BUCHETE DE FLORI
            <span className="text-[10px] font-[100] text-[#A8A8A8]">
              Flori naturale si proapete
            </span>
          </span>
        </div>
      </div>

      <TitleByPath paths={paths} />

      {/* Content Section */}
      <div className="flex flex-col m-10">
        {/* <ShopByCategory /> */}
        <ShortcutItemCard />

        <SortItems />
        <ItemCard images={images} type="flori" />
      </div>
    </div>
  );
}
