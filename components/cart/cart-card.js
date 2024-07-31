"use client";
import Image from "next/image";
import { useCart } from "@/context/cart-context";
import { Minus, Plus } from "lucide-react";

export default function CartCard({ item }) {
  const { removeFromCart, updateCartItemQuantity } = useCart();

  const handleQuantityChange = (qty) => {
    const quantity = Number(qty);
    if (quantity >= 1) {
      updateCartItemQuantity(item.product.id, quantity);
    }
  };

  const handleRemoveClick = () => {
    removeFromCart(item.product.id);
  };

  return (
    <div className="flex border-b items-start p-3 m-1 h-[140px]">
      <div className="h-[5rem] w-[100px] content-center">
        <Image
          src={item.product.images_url[0]}
          width={100}
          height={100}
          alt={item.product.title}
          layout="responsive"
          objectFit="contain"
        />
      </div>
      <div className="flex w-full flex-col ml-4">
        <span className="text-sm font-[300] mb-1">{item.product.name}</span>
        <button className="xxsFont mb-4 text-start" onClick={handleRemoveClick}>
          STERGE
        </button>
        <div className="flex items-end mt-8"></div>
        <div className="flex w-full justify-between items-center">
          <div className="flex items-center space-x-2 border border-gray-300 rounded-sm font-[100] px-1 text-sm">
            <button
              onClick={() => {
                handleQuantityChange(item.quantity - 1);
              }}
              className="p-1 "
              aria-label="Decrease quantity"
            >
              <Minus size={20} strokeWidth={1} />
            </button>
            <span className="text-m">{item.quantity}</span>
            <button
              onClick={() => {
                handleQuantityChange(item.quantity + 1);
              }}
              className="p-1 "
              aria-label="Increase quantity"
            >
              <Plus size={20} strokeWidth={1} />
            </button>
          </div>
          <span className="text-m font-[300] ml-5">
            {item.product.price * item.quantity}
            <sup>.00</sup>
            <sup> LEI</sup>
          </span>
        </div>
      </div>
    </div>
  );
}
