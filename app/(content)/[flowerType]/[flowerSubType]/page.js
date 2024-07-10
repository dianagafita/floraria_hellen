import { getProductsBySubType } from "@/app/api/store/products";
import ItemCard from "@/components/items/item-card";
import Categories from "@/components/util/categories";
import FlowerPageLayout from "@/components/util/customFlowersLayout";
import { TitleByPath } from "@/components/util/getPathTitle";
import SortItems from "@/components/util/sort-items";
// import { CartProvider, useCart } from "@/context/cart-context";
const paths = [
  {
    href: "/flower-bouquets",
    title: "BUCHETE FLORI",
    style: "text-black-300/75",
  },
  {
    href: "/flower-bouquets",
    title: "BUCHETE FLORI",
    style: "text-black-300/75",
  },
];
const validFlowerTypes = ["trandafiri", "tulips", "lilies"]; // Add all valid flower types here

export default async function RosesBouquetsPage({ params }) {
  const { flowerSubType, flowerType } = params;

  if (!validFlowerTypes.includes(flowerSubType)) {
    redirect("/");
  }

  const flowerBouquets = await getProductsBySubType({
    type: `${flowerType}`,
    subtype: `${flowerSubType}`,
  });
  console.log(flowerSubType);
  console.log(flowerBouquets);

  return (
    <div className="flex flex-col">
      <FlowerPageLayout />
      <TitleByPath paths={paths} />

      <Categories />
      <SortItems />
      <ItemCard images={flowerBouquets} />
    </div>
  );
}
