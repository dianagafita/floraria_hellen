import {
  getProductsBySubType,
  getProductsByType,
} from "@/app/api/store/products";
import ItemCard from "@/components/items/item-card";
import Categories from "@/components/util/categories";
import FlowerPageLayout from "@/components/util/customFlowersLayout";
import { TitleByPath } from "@/components/util/getPathTitle";
import SortItems from "@/components/util/sort-items";
import Loading from "@/lib/loading";
import { redirect } from "next/navigation";

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
const validFlowerTypes = ["trandafiri", "tulips", "lilies"];

export default async function RosesBouquetsPage({ params }) {
  const { flowerSubType, flowerType } = params;
  console.log(flowerSubType);
  if (flowerSubType && !validFlowerTypes.includes(flowerSubType)) {
    redirect("/");
  }
  let flowerBouquets;
  if (flowerSubType) {
    flowerBouquets = await getProductsBySubType({
      type: `${flowerType}`,
      subtype: `${flowerSubType}`,
    });
  } else {
    flowerBouquets = await getProductsByType({
      type: `${flowerType}`,
    });
  }

  console.log(flowerSubType);
  console.log(flowerBouquets);

  return (
    <div className="flex flex-col">
      <FlowerPageLayout />
      <TitleByPath paths={paths} />

      <Categories />
      <SortItems />
      {!flowerBouquets ? (
        <Loading />
      ) : (
        <ItemCard
          images={flowerBouquets}
          type="flori"
          flowerType={flowerType}
          subtype={flowerSubType}
        />
      )}
    </div>
  );
}
