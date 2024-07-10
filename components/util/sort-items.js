import { SORT_ITEMS } from "@/constants";
import React from "react";

export default function SortItems() {
  return (
    <div className=" flex justify-between items-center my-5 mx-5">
      <span className=" text-[14px] font-[300]">87 produse</span>
      <div className=" rounded-sm border border-black border-[0.9px] text-black text-[12px] md:text-[13px]  p-1 md:px-2 font-[300] ">
        <select className="focus:outline-none">
          {SORT_ITEMS.map((opt) => (
            <option key={opt.title}>{opt.title}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
