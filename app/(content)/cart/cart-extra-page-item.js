"use client";
import React from "react";
import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import { useCart } from "@/context/cart-context";
import Link from "next/link";

export default function CartExtraPageItem({ extraItems }) {
  const { removeFromCart, updateCartItemQuantity } = useCart();

  const handleQuantityChange = (qty) => {
    const quantity = Number(qty);
    if (quantity >= 1) {
      updateCartItemQuantity(extraItems.product.id, quantity);
    }
  };

  const handleRemoveClick = () => {
    removeFromCart(extraItems.product.id);
  };
  console.log(extraItems);
  return (
    <div className="flex w-full mb-10 lg:mb-20">
      {/* <Link href={`/products/${extraItems.product.id}`}>
        <div className="min-w-[105px] max-w-[120px] mr-8">
          <Image
            src={extraItems.product.images_url[0]}
            width={100}
            height={100}
            alt={extraItems.name}
            layout="responsive"
            className="object-contain"
          />
        </div>
      </Link>
      <div className="flex flex-col w-full">
        <div className="flex flex-col justify-between w-full h-full">
          <div className="flex flex-col justify-between w-full">
            <div className="flex extraItems-center justify-between mb-2 w-full">
              <div className="flex w-full justify-between extraItems-center">
                <div className="flex extraItems-center space-x-2 border border-gray-300 rounded-sm font-[100] px-1 text-sm">
                  <button
                    onClick={() => {
                      handleQuantityChange(extraItems.quantity - 1);
                    }}
                    className="p-1"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={20} strokeWidth={1} />
                  </button>
                  <span className="text-m">{extraItems.quantity}</span>
                  <button
                    onClick={() => {
                      handleQuantityChange(extraItems.quantity + 1);
                    }}
                    className="p-1"
                    aria-label="Increase quantity"
                  >
                    <Plus size={20} strokeWidth={1} />
                  </button>
                </div>
              </div>

              <span className="text-m font-[100] whitespace-nowrap md:w-full">
                {(extraItems.product.price * extraItems.quantity).toFixed(2)}{" "}
                Lei
              </span>
            </div>
            <button
              className="font-[100] text-[10px] text-start"
              onClick={handleRemoveClick}
            >
              STERGE
            </button> */}
      {/* </div>
            </div>
        </div> */}
      a
    </div>
  );
}
