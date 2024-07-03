import React from "react";
import Button from "../util/button";

export default function OrderItem() {
  return (
    <div className="border rounded flex w-full p-5 ">
      <div className="flex flex-col w-full">
        <span className="text-xl">Comanda nr.456789</span>
        <span className=" text-sm text-gray-500 font-[100] mb-5">
          Plasata pe 12 Iun 2024 la 21:30
        </span>
        <span className="">Comanda Livrata</span>
      </div>
      <div className="flex w-full h-full justify-end self-center">
        <span className="mr-5 self-center">200 lei</span>
        <Button moreStyle="px-3 py-1">Detalii</Button>
      </div>
    </div>
  );
}
