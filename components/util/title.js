import React from "react";

export default function Title({ children, moreStyle }) {
  return (
    <span
      className={` text-2xl md:text-3xl  md:mb-10 my-0 mx-auto font-[300] ${moreStyle}`}
    >
      {children}
    </span>
  );
}
