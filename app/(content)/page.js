import EmblaCarousel from "@/components/main-page/carousel";
import PageInfo from "@/components/main-page/page-info";
import img1 from "@/components/items/images/1.jpg";
import img2 from "@/components/items/images/2.jpg";
import img3 from "@/components/items/images/3.jpg";
import img4 from "@/components/items/images/4.jpg";
import img5 from "@/components/items/images/5.jpg";
import img6 from "@/components/items/images/6.jpg";
import Recommended from "@/components/main-page/recommended/recommended";
import ShopByCategory from "@/components/main-page/shopbycat/shop-by-category";
import prisma from "@/lib/prisma";

const images = [
  { t: img1, t2: img6 },
  { t: img2, t2: img5 },
  { t: img3, t2: img4 },
  { t: img4, t2: img3 },
  { t: img5, t2: img2 },
  { t: img6, t2: img1 },
];
const OPTIONS = {};
const SLIDE_COUNT = 3;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default async function Home() {
  return (
    <div>
      <div className="z-1 absolut top-0 ">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
      <PageInfo />
      <div className="relative w-full md:h-[120px] h-[220px] my-10 ">
        <span className=" flex flex-col absolute top-2 mx-4 z-10 text-black  px-2 py-1 ">
          <span className="text-2xl text-center font-[300] mb-3">
            FLORARIE CU LIVRARE LA DOMICILIU
          </span>
          <span className=" text-base text-center font-[100] mb-10">
            Descoperiți universul nostru vibrant al florilor, unde frumusețea
            naturii întâlnește creativitatea și pasiunea pentru aranjamente
            florale desăvârșite. LaFloraria Hellen, transformăm fiecare ocazie
            într-o poveste de neuitat, oferindu-vă buchete și aranjamente
            florale care să inspire și să emoționeze.
          </span>
        </span>{" "}
        {/* <Image
          className="object-cover w-full h-full"
          alt=""
          src={i}
          layout="fill"
        /> */}
      </div>{" "}
      <ShopByCategory />
      {/* <SideToSideInfo position /> */}
      {/* <SideToSideInfo position="left" /> */}
      {/* <MapCard /> */}
      <Recommended />
      {/* <ItemCard images={images} /> */}
    </div>
  );
}
