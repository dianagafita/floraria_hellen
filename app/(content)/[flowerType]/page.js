import { getProductsByType } from "@/app/api/store/products";
import ItemCard from "@/components/items/item-card";
import Categories from "@/components/util/categories";
import FlowerPageLayout from "@/components/util/customFlowersLayout";
import { TitleByPath } from "@/components/util/getPathTitle";
import SortItems from "@/components/util/sort-items";
import img from "./IMG_6947.jpeg";
import { notFound, redirect } from "next/navigation";
import NotFoundLayout from "../not-found-layout";

const paths = [
  {
    href: "/flower-bouquets",
    title: "BUCHETE FLORI",
    style: "text-black-300/75",
  },
];
const validFlowerTypes = ["buchet", "aranjament", "lilies"]; // Add all valid flower types here

export default async function FlowerBouquetsPage({ params }) {
  const { flowerType } = params;
  if (!validFlowerTypes.includes(flowerType)) {
    redirect("/");
  }

  const flowerBouquets = await getProductsByType({
    type: `${flowerType}`,
  });

  return (
    <div className="flex flex-col">
      <FlowerPageLayout mainImage={img} />
      <TitleByPath paths={paths} />

      <Categories />
      <SortItems />
      <ItemCard images={flowerBouquets} />
      {/* <ProductList products={products} /> */}
    </div>
  );
}
