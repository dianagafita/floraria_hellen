import React from "react";

export default function Title({ children }) {
  return (
    <span className=" text-xl md:text-3xl mb-5 md:mb-10 my-0 mx-auto font-[300]">
      {children}
    </span>
  );
}
