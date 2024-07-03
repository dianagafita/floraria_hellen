import { SORT_ITEMS } from "@/constants";
import React from "react";

export default function SortItems() {
  return (
    <div className=" flex justify-between items-center my-10">
      <span className="mx-6 text-[14px] font-[300]">87 produse</span>
      <div className=" rounded-[4px] border border-black border-[0.9px] text-black text-[12px] md:text-[13px] w-fit p-1 px-1 md:px-2 font-[300] ">
        <select className="focus:outline-none">
          {SORT_ITEMS.map((opt) => (
            <option key={opt.title}>{opt.title}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
