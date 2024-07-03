import Image from "next/image";
import React from "react";
import Link from "next/link";
import { IoMdHeart } from "react-icons/io";

export default function ItemCard({ images }) {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4  m-5 gap-2 justify-center ">
      {images.map((img) => (
        <li
          key={img.id}
          className=" flex flex-col  bg-white  w-[44vw] h-[60vw] md:w-[23vw] md:h-[30vw]   mb-5"
        >
          <div className="relative w-full h-full">
            <Link href={`/flower-bouquets/roses/${img.id}`}>
              <div className="absolute top-0 right-0 p-2 text-white  hover:text-blue-100 z-10">
                <IoMdHeart size={25} />
              </div>
              <Image
                className="object-cover  h-full transition-opacity duration-300 opacity-100 hover:opacity-0"
                src={img.images_url[0]}
                alt="Original Image"
                layout="fill"
              />
              <Image
                className="object-cover w-full h-full transition-opacity duration-300 opacity-0 hover:opacity-100"
                src={img.images_url[1]}
                alt="Hover Image"
                layout="fill"
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
