// // import ItemCard from "@/components/items/item-card";
// // import Image from "next/image";
// // import i from "./1.jpeg";
// // import Title from "@/components/util/title";
// // import SortItems from "@/components/util/sort-items";
// // import { TitleByPath } from "@/components/util/getPathTitle";
// // import { getProductsByType } from "@/app/api/store/products";
// // import { redirect } from "next/navigation";

// // const paths = [
// //   { href: "/plants", title: "PLANTE", style: "text-black-300/75" },
// // ];
// // const validFlowerTypes = ["plante", "flori-criogenate", "coroane-funerare"]; // Add all valid flower types here

// // export default async function OtherFlowersPage({ params }) {
// //   const { flowerType } = params.otherFlowers;
// //   console.log(params);
// //   if (!validFlowerTypes.includes(flowerType)) {
// //     redirect("/");
// //   }

// //   const flowers = await getProductsByType({
// //     type: `${params.otherFlowers}`,
// //   });

// //   return (
// //     <div>
// //       <div className="relative w-full h-[335px]">
// //         <Image
// //           src={i}
// //           alt="Main Image"
// //           layout="fill"
// //           className="object-cover"
// //         />
// //         <div className="absolute inset-0 flex items-center justify-center text-white text-center bg-black bg-opacity-50">
// //           <Title>PLANTE IN GHIVECI</Title>
// //         </div>
// //       </div>
// //       <TitleByPath paths={paths} />
// //       <div className="m-4">
// //         <SortItems />
// //         <ItemCard images={flowers} />
// //       </div>
// //     </div>
// //   );
// // }
// import ItemCard from "@/components/items/item-card";
// import Image from "next/image";
// import i from "./1.jpeg";
// import Title from "@/components/util/title";
// import SortItems from "@/components/util/sort-items";
// import { TitleByPath } from "@/components/util/getPathTitle";
// import { getProductsByType } from "@/app/api/store/products";
// import { redirect } from "next/navigation";

// const paths = [
//   { href: "/plants", title: "PLANTE", style: "text-black-300/75" },
// ];
// const validFlowerTypes = ["plante", "flori-criogenate", "coroane-funerare"];
// const titles = ["PLANTE IN GHIVECI", "FLORI CRIOGENATE", "COROANE FUNERARE"];

// export default async function OtherFlowersPage({ params }) {
//   console.log("Params:", params);

//   const flowerType = params.otherFlowers || "";

//   console.log(`Flower type: ${flowerType}`);

//   if (!validFlowerTypes.includes(flowerType)) {
//     console.log(`Invalid flower type: ${flowerType}`);
//     redirect("/");
//     return null;
//   }

//   const flowers = await getProductsByType({
//     type: flowerType,
//   });
//   return (
//     <div>
//       <div className="relative w-full h-[335px]">
//         <Image src={i} alt="Main Image" fill className="object-cover" />
//         <div className="absolute inset-0 flex items-center justify-center text-white text-center bg-black bg-opacity-50">
//           {flowerType === "plante" ? (
//             <Title>{titles[0]}</Title>
//           ) : flowerType === "flori-criogenate" ? (
//             <Title>{titles[1]}</Title>
//           ) : (
//             <Title>{titles[2]}</Title>
//           )}
//         </div>
//       </div>
//       <TitleByPath paths={paths} />
//       <div className="m-4">
//         <SortItems nrOfProducts={flowers.length} />
//         <ItemCard images={flowers} type="speciale" flowerType={flowerType} />
//       </div>
//     </div>
//   );
// }
import Image from "next/image";
import i from "./1.jpeg";
import Title from "@/components/util/title";
import { TitleByPath } from "@/components/util/getPathTitle";
import { getProductsByType } from "@/app/api/store/products";
import { redirect } from "next/navigation";
import SortableFlowerList from "../../../../components/sort";
import { getTitleOfPath } from "@/components/path";
import Loading from "@/lib/loading";

const validFlowerTypes = ["plante", "flori-criogenate", "coroane-funerare"];
const titles = ["PLANTE IN GHIVECI", "FLORI CRIOGENATE", "COROANE FUNERARE"];

export default async function OtherFlowersPage({ params }) {
  const flowerType = params.otherFlowers || "";

  if (!validFlowerTypes.includes(flowerType)) {
    redirect("/");
    return null;
  }
  const { title } = getTitleOfPath(`/speciale/${flowerType}`);
  console.log("hhh", title);

  const flowers = await getProductsByType({
    type: flowerType,
  });

  const paths = [{ href: `/${flowerType}`, title, style: "text-black-300/75" }];

  return (
    <div>
      <div className="relative w-full h-[335px]">
        <Image src={i} alt="Main Image" fill className="object-cover" />
        <div className="absolute inset-0 flex items-center justify-center text-white text-center bg-black bg-opacity-50">
          {flowerType === "plante" ? (
            <Title>{titles[0]}</Title>
          ) : flowerType === "flori-criogenate" ? (
            <Title>{titles[1]}</Title>
          ) : (
            <Title>{titles[2]}</Title>
          )}
        </div>
      </div>

      <TitleByPath paths={paths} />
      {!flowers ? (
        <Loading />
      ) : (
        <SortableFlowerList
          flowers={flowers}
          flowerType={flowerType}
          type="speciale"
        />
      )}
    </div>
  );
}
