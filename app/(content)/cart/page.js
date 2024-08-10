"use client";
import CartPageItems from "@/components/cart/cart-page-items";
import Title from "@/components/util/title";
import Link from "next/link";
import Button from "@/components/util/button";
import { useCart } from "@/context/cart-context";
import CartWithExtras from "./cart-with-extras";

export default function CartPage() {
  const { cartItems, cartTotal } = useCart();
  return (
    <div className="mx-[2rem] my-[2rem] mb-5 ">
      <div className="flex flex-col justify-between h-full">
        <Title>COS DE CUMPARATURI</Title>
        {cartItems.length === 0 ? (
          <div className="flex justify-center items-center h-full text-[20px] font-[100] text-[#C0C0C0]">
            Cosul de cumparaturi este gol!
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row justify-between w-full h-full mt-10">
            <div className="w-full">
              {cartItems.map((item) => (
                // <CartPageItems key={item.product.id} items={item} />

                <CartWithExtras productId={item.product.id} items={item} />
              ))}
            </div>
            <div className="flex flex-col font-[300] w-full self-end lg:self-start  md:w-1/2 mt-10 md:mt-0">
              <div className="flex justify-between text-lg mb-1">
                <span className="font-[500]">Subtotal</span>
                <span>{cartTotal} Lei</span>
              </div>
              <span className="text-xs mb-2">
                Taxele de transport sunt calculate la pasul urmator
              </span>
              <Button moreStyle="my-5 py-2 border-[0.6px]">
                <Link href="/checkout">Finalizare Comanda</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
