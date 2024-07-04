import { getProductsBySubType } from "@/app/api/store/products";
import ItemCard from "@/components/items/item-card";
import Categories from "@/components/util/categories";
import { TitleByPath } from "@/components/util/getPathTitle";
import SortItems from "@/components/util/sort-items";
const paths = [
  {
    href: "/flower-bouquets",
    title: "BUCHETE FLORI",
    style: "text-black-300/75",
  },
];

export default async function RosesBouquetsPage() {
  const flowerBouquets = await getProductsBySubType({
    type: "buchet",
    subtype: "trandafiri",
  });
  console.log(flowerBouquets);
  return (
    <div className="flex flex-col">
      <TitleByPath paths={paths} />

      <Categories />
      <SortItems />
      <ItemCard images={flowerBouquets} />
    </div>
  );
}
