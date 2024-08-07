import { getProductsByType } from "@/app/api/store/products";
import ItemCard from "@/components/items/item-card";
import Categories from "@/components/util/categories";
import FlowerPageLayout from "@/components/util/customFlowersLayout";
import { TitleByPath } from "@/components/util/getPathTitle";
import SortItems from "@/components/util/sort-items";
import img from "./flowers.jpeg";
import Loading from "@/lib/loading";
import { redirect } from "next/navigation";

const validFlowerTypes = [
  "buchete",
  "aranjamente",
  "evenimente",
  "ocazii-speciale",
];

export default async function FlowerBouquetsPage({ params }) {
  const { flowerType } = params;
  if (!validFlowerTypes.includes(flowerType)) {
    redirect("/");
  }

  const flowerBouquets = await getProductsByType({
    type: `${flowerType}`,
  });

  const paths = [
    {
      href: `/${flowerType}`,
      title: "BUCHETE FLORI",
      style: "text-black-300/75",
    },
  ];

  return (
    <div className="flex flex-col">
      <FlowerPageLayout mainImage={img} />
      <TitleByPath paths={paths} />

      <Categories type={flowerType} />
      <SortItems nrOfProducts={flowerBouquets.length} />
      {!flowerBouquets ? (
        <Loading />
      ) : (
        <ItemCard
          images={flowerBouquets}
          type="flori"
          flowerType={flowerType}
        />
      )}
    </div>
  );
}
