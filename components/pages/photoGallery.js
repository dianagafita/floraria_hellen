"use client";
import { useState } from "react";
import img from "./img/IMG_6947.jpeg";
import img1 from "./img/IMG_6957.jpeg";
import img2 from "./img/IMG_6991.jpeg";
import img3 from "./img/IMG_6944.jpeg";
import Image from "next/image";

export function FeaturedImageGallery({ images }) {
  const data = [img, img1, img2, img3];

  const [active, setActive] = useState(images[0]);

  return (
    <div className="grid grid-cols-3 md:grid-cols-1 gap-4 w-full">
      <div className="col-span-2 md:col-span-1">
        <Image
          className="w-full  h-full md:h-[460px] rounded-sm object-cover object-center"
          src={active}
          width={200}
          height={200}
          alt="Main image"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {images.map((imgelink, index) => (
          <div key={index} className="w-full h-full  md:h-24">
            <Image
              onClick={() => setActive(imgelink)}
              src={imgelink}
              width={200}
              height={200}
              className="cursor-pointer rounded-sm object-cover object-center w-full h-full"
              alt="Gallery image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
