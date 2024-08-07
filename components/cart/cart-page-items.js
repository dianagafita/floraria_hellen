"use client";
import React from "react";
import CartExtra from "./cart-extra";
import Image from "next/legacy/image";
import { Minus, Plus } from "lucide-react";
import { useCart } from "@/context/cart-context";
import Link from "next/link";

export default function CartPageItems({ items }) {
  const { removeFromCart, updateCartItemQuantity } = useCart();

  const handleQuantityChange = (qty) => {
    const quantity = Number(qty);
    if (quantity >= 1) {
      updateCartItemQuantity(items.product.id, quantity);
    }
  };

  const handleRemoveClick = () => {
    removeFromCart(items.product.id);
  };

  return (
    <div className="flex w-full mb-10 lg:mb-20">
      <Link href={`/products/${items.product.id}`}>
        <div className="min-w-[105px] max-w-[120px] mr-8">
          <Image
            src={items.product.images_url[0]}
            width={100}
            height={100}
            alt={items.title}
            layout="responsive"
            className="object-contain"
          />
        </div>
      </Link>
      <div className="flex flex-col w-full">
        <div className="flex flex-col justify-between w-full h-full">
          <div>
            <div className="font-[300] mb-1">{items.product.name}</div>
            <div>
              <CartExtra extraInfo={items} />
            </div>
          </div>
          <div className="flex flex-col justify-between w-full">
            <div className="flex items-center justify-between mb-2 w-full">
              <div className="flex w-full justify-between items-center">
                <div className="flex items-center space-x-2 border border-gray-300 rounded-sm font-[100] px-1 text-sm">
                  <button
                    onClick={() => {
                      handleQuantityChange(items.quantity - 1);
                    }}
                    className="p-1"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={20} strokeWidth={1} />
                  </button>
                  <span className="text-m">{items.quantity}</span>
                  <button
                    onClick={() => {
                      handleQuantityChange(items.quantity + 1);
                    }}
                    className="p-1"
                    aria-label="Increase quantity"
                  >
                    <Plus size={20} strokeWidth={1} />
                  </button>
                </div>
              </div>

              <span className="text-m font-[100] whitespace-nowrap md:w-full">
                {(items.product.price * items.quantity).toFixed(2)} Lei
              </span>
            </div>
            <button
              className="font-[100] text-[10px] text-start"
              onClick={handleRemoveClick}
            >
              STERGE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
