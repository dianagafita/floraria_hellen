import ItemCard from "@/components/items/item-card";
import Image from "next/image";
import i from "./1.jpeg";
import Title from "@/components/util/title";
import SortItems from "@/components/util/sort-items";
import { TitleByPath } from "@/components/util/getPathTitle";
import { getProductsByType } from "@/app/api/store/products";

const paths = [
  { href: "/plants", title: "PLANTE", style: "text-black-300/75" },
];

export default async function PlantsPage() {
  const plants = await getProductsByType({
    type: `plante`,
  });

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
        <ItemCard images={plants} />
      </div>
    </div>
  );
}
