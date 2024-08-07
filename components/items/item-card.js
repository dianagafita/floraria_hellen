import Image from "next/image";
import React from "react";
import Link from "next/link";
import { IoMdHeart } from "react-icons/io";

export default function ItemCard({
  images,
  moreStyle,
  type,
  flowerType,
  subtype,
}) {
  return (
    <ul
      className={`${
        moreStyle === "searchItem"
          ? "flex"
          : "gap-2 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4"
      }   m-5  justify-center `}
    >
      {images.map((img) => (
        <li
          key={img.id}
          className={` flex flex-col  bg-white ${
            moreStyle === "searchItem"
              ? "w-[20vw] h-[30vw] m-5 md:w-[15vw] md:h-[20vw]"
              : "w-[44vw] h-[60vw] md:w-[23vw] md:h-[30vw]"
          }    mb-5`}
        >
          <div className="relative w-full h-full">
            <Link
              href={
                type === "speciale"
                  ? `/speciale/${flowerType}/${img.id}`
                  : type === "search"
                  ? `/products/${img.name}/${img.id}`
                  : subtype
                  ? `/${flowerType}/${subtype}/${img.id}`
                  : `/${flowerType}/${img.name}/${img.id}`
              }
            >
              <div className="absolute top-0 right-0 p-2 text-white  hover:text-blue-100 z-10">
                <IoMdHeart size={25} />
              </div>
              <Image
                className="object-cover  h-full transition-opacity duration-300 opacity-100 hover:opacity-0"
                src={img.images_url[0]}
                alt="Original Image"
                fill
              />
              <Image
                className="object-cover w-full h-full transition-opacity duration-300 opacity-0 hover:opacity-100"
                src={img.images_url[1]}
                alt="Hover Image"
                fill
              />
            </Link>
          </div>
          <div className="p-1 w-full">
            <p className="mb-3 text-xs md:text-[1.2vw] font-light mt-3 whitespace-nowrap text-center">
              {img.name}{" "}
            </p>
            <p className="text-center mb-2 text-sm font-[100]">100,00 lei</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
