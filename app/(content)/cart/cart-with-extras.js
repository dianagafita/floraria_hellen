import CartPageItems from "@/components/cart/cart-page-items";
import React from "react";
import CartExtraPageItem from "./cart-extra-page-item";

export default function CartWithExtras() {
  return (
    <>
      {" "}
      <CartPageItems />
      <CartExtraPageItem />
    </>
  );
}
