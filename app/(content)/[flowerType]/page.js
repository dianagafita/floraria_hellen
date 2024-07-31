import { getProductsByType } from "@/app/api/store/products";
import ItemCard from "@/components/items/item-card";
import Categories from "@/components/util/categories";
import FlowerPageLayout from "@/components/util/customFlowersLayout";
import { TitleByPath } from "@/components/util/getPathTitle";
import SortItems from "@/components/util/sort-items";
import img from "./flowers.jpeg";
import { redirect } from "next/navigation";
import Loading from "@/lib/loading";

const paths = [
  {
    href: "/flower-bouquets",
    title: "BUCHETE FLORI",
    style: "text-black-300/75",
  },
];
const validFlowerTypes = ["buchete", "aranjamente", "lilies"]; // Add all valid flower types here

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

      <Categories type={flowerType} />
      <SortItems />
      {!flowerBouquets ? <Loading /> : <ItemCard images={flowerBouquets} />}
      {/* <ProductList products={products} /> */}
    </div>
  );
}
