// import ShortcutItemCard from "@/components/items/shortcut-item-card";
// import img1 from "@/components/items/images/1.jpg";
// import img2 from "@/components/items/images/2.jpg";
// import img3 from "@/components/items/images/3.jpg";
// import img4 from "@/components/items/images/4.jpg";
// import img5 from "@/components/items/images/5.jpg";
// import img6 from "@/components/items/images/6.jpg";
// import ItemCard from "@/components/items/item-card";
// import Image from "next/image";

// import PageInfo from "@/components/main-page/page-info";

// const images = [
//   { t: img1, t2: img6 },
//   { t: img2, t2: img5 },
//   { t: img3, t2: img4 },
//   { t: img4, t2: img3 },
//   { t: img5, t2: img2 },
//   { t: img6, t2: img1 },
// ];
// import imgs from "./3.jpeg";
// import SortItems from "@/components/util/sort-items";

// export default function FlowerPageLayout({ data }) {
//   return (
//     <div>
//       {/* <div className="relative w-full "> */}
//       {/* <Image src={img} alt="" layout="fill" objectFit="cover" /> */}
//       <div className=" relative">
//         <div className={`relative h-[335px] w-[100vw]  ${"order-last"}`}>
//           <span className="absoute top-0 right-9 bg-white bg-opacity-50">
//             a{" "}
//           </span>{" "}
//           <Image src={imgs} alt="" layout="fill" className="object-over" />
//         </div>
//       </div>
//       {/* <div className="absolute inset-0 justify-end pr-6 flex items-center text-white  custom-gradient">
//           <Title>BUCHETE DE FLORI</Title>
//         </div> */}
//       {/* </div> */}
//       <PageInfo />
//       <div className=" flex flex-col my-10 ">
//         <ShortcutItemCard />
//         <SortItems />
//         <ItemCard images={images} />
//       </div>{" "}
//       {/* <CurrentRoute /> */}
//     </div>
//   );
// }
import ShortcutItemCard from "@/components/items/shortcut-item-card";
import ItemCard from "@/components/items/item-card";
import Image from "next/image";
import PageInfo from "@/components/main-page/page-info";
import SortItems from "@/components/util/sort-items";

// Importing your images
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
        <Image src={img1} alt="" layout="fill" objectFit="cover" />
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

        {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="grid ">
            <div>
              <Image
                className="rounded-lg"
                src={imga}
                alt="Image 1"
                objectFit="cover"
                width={600}
                height={200}
              />
            </div>
            <div>
              <Image
                className="rounded-lg"
                src={imgb}
                alt="Image 2"
                layout="responsive"
                objectFit="contain"
                width={400}
                height={400}
              />
            </div>
            <div>
              <Image
                className="rounded-lg"
                src={img7}
                alt="Image 7"
                layout="responsive"
                objectFit="cover"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="">
            <div>
              <Image
                className="rounded"
                src={img9}
                alt="Image 9"
                objectFit="contain"
                width={800}
              />
            </div>
            <div>
              <Image
                className="rounded-lg"
                src={img}
                alt="External Image 1"
                width={700}
                height={500}
              />
            </div>
            <div>
              <Image
                className="rounded-lg"
                src={imga}
                alt="External Image 2"
                layout="responsive"
                objectFit="cover"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className=" ">
            <div>
              <Image
                className="rounded-lg"
                src={img9}
                alt="External Image 3"
                layout="responsive"
                objectFit="cover"
                width={400}
                height={400}
              />
            </div>
            <div>
              <Image
                className="rounded-lg"
                src={img7}
                alt="External Image 4"
                layout="responsive"
                objectFit="cover"
                width={500}
                height={500}
              />
            </div>
            <div>
              <Image
                className="rounded-lg"
                src={img9}
                alt="External Image 5"
                layout="responsive"
                objectFit="cover"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div> */}

        <SortItems />
        <ItemCard images={images} />
      </div>
    </div>
  );
}
