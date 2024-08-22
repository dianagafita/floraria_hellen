import { getProductsByType } from "@/app/api/store/products";
import Categories from "@/components/util/categories";
import FlowerPageLayout from "@/components/util/customFlowersLayout";
import { TitleByPath } from "@/components/util/getPathTitle";
import img from "./flowers.jpeg";
import Loading from "@/lib/loading";
import { redirect } from "next/navigation";
import SortableFlowerList from "@/components/sort";
import { getTitleOfPath } from "@/components/path";

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

  const { title } = getTitleOfPath(`/${flowerType}`);
  console.log("hhh", title);
  const flowerBouquets = await getProductsByType({
    type: `${flowerType}`,
  });

  const paths = [
    {
      href: `/${flowerType}`,
      title: title,
      style: "text-black-300/75",
    },
  ];

  return (
    <div className="flex flex-col">
      <FlowerPageLayout mainImage={img} />
      <TitleByPath paths={paths} />
      <Categories type={flowerType} />
      {!flowerBouquets ? (
        <Loading />
      ) : (
        <SortableFlowerList flowerType={flowerType} flowers={flowerBouquets} />
      )}{" "}
    </div>
  );
}
