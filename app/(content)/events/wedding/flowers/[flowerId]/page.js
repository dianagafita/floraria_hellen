import React from "react";
import Title from "@/components/util/title";
import { FeaturedImageGallery } from "@/components/pages/photoGallery";
import img from "../../flowers/1.jpeg";
import img2 from "../../flowers/2.jpeg";
import { TitleByPath } from "@/components/util/getPathTitle";
import Link from "next/link";

const data = [img, img2];

export default function FlowerPage({ params }) {
  const title = decodeURIComponent(params.flowerId);
  const paths = [
    { href: "/events", title: "EVENIMENTE", style: "text-black-300/75" },
    { href: "/events/wedding", title: "NUNTA", style: "text-black" },
    {
      href: "/events/wedding/flowers",
      title: "ARANJAMENTE FLORALE",
      style: "text-black",
    },
    {
      href: `/events/wedding/flowers/${params.flowerId}`,
      title: title,
      style: "text-black",
    },
  ];
  return (
    <div className="flex flex-col  ">
      <TitleByPath paths={paths} />
      <div className="md:flex py-4 px-10 w-full mt-10 ">
        <div className="md:w-1/2  mb-10">
          <FeaturedImageGallery images={data} />{" "}
        </div>
        <div className="flex flex-col md:ml-10 md:w-1/2  h-[460px]  justify-between ">
          <Title>{title}</Title>
          <div className="flex flex-col">
            <span className=" text-md my-2 ">
              {" "}
              <span className="mr-1">
                Aranjamentul contine flori proaspete:
              </span>
              <span className="text-sm font-[100]">
                antirrhinum, trandafiri, anthurium, lisianthus si decoratiuni
                diverse de inalta calitate.
              </span>
            </span>
            <span className="my-2 flex flex-col ">
              Detalii suplimentare:
              <span className="my-1 text-sm font-[100]">
                La produsele cu flori naturale pot exista usoare variatii de
                culoare fata de imaginea prezentata.
              </span>
              <span className="text-sm font-[100] mb-10">
                Anumite flori din aranjamente pot fi disponibile doar in anumite
                perioade din an.
              </span>
            </span>
          </div>
          <div className="flex flex-col">
            <span>ID #35688</span>
            <span className="text-[13px] my-2 text-[#505050] font-[100]">
              Pentru a putea cere o oferta veti avea nevoie de ID ul produsului.
            </span>
            <Link
              href="/request-offer"
              className="text-[13px] font-[100] text-[#606060] hover:text-[#404040] underline underline-offset-2"
            >
              CERE OFERTA
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
