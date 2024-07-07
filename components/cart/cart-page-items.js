"use client";
import React from "react";
import CartExtra from "./cart-extra";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import QuantitySelector from "./quantity-selector";

export default function CartPageItems({ img }) {
  return (
    <div className="flex w-full">
      <div className="w-[170px]  mr-8 ">
        <Image
          src={img}
          alt="Product"
          layout="responsive"
          objectFit="contain"
        />
      </div>
      <div className="flex md:flex-row flex-col w-full ">
        <div className="w-full ">
          <div className="font-[300] mb-1">Buchet de primavara </div>
          <div>
            <CartExtra />
          </div>
        </div>
        <div className="flex mt-5 w-full">
          <div className="flex flex-col w-full">
            <div className="flex items-center justify-between mt-1">
              <QuantitySelector size={20} />
              <span className="text-m font-[100]">
                100<sup>.00</sup>
                <sup> Lei</sup>
              </span>
            </div>
            <button className=" font-[100] text-[10px] mt-2 mb-4 text-start">
              STERGE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
