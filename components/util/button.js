import React from "react";

export default function Button({ children, moreStyle, ...props }) {
  return (
    <button
      className={`${moreStyle} border border-black bg-white rounded-sm text-black hover:bg-black hover:text-white  active:bg-black active:text-white s p-2 transition-all duration-200 ease-in-out transform`}
      {...props}
    >
      {children}
    </button>
  );
}
