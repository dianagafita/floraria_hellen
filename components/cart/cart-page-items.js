"use client";
import React from "react";
import CartExtra from "./cart-extra";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import QuantitySelector from "./quantity-selector";

export default function CartPageItems({ img }) {
  return (
    <div className="flex w-full ">
      <div className="w-20 h-50 mr-8 ">
        <Image
          src={img}
          alt="Product"
          layout="responsive"
          width={120}
          height={120}
        />
      </div>
      <div className="flex md:flex-row flex-col  w-full">
        <div className="w-full ">
          <div className="font-[300]">Buchet de primavara </div>
          <div>
            <CartExtra />
          </div>
        </div>
        <div className="flex items-center  justify-between mt-5 w-full">
          <div className="flex justify-end items-center ">
            <QuantitySelector size={20} />
            <div className="ml-3">
              <Trash2 strokeWidth={1} size={18} />
            </div>
          </div>
          <span className=" text-m  ">
            100<sup>.00</sup>
            <sup> Lei</sup>
          </span>
        </div>
      </div>
    </div>
  );
}
