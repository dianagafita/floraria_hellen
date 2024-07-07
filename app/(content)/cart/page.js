import CartPageItems from "@/components/cart/cart-page-items";
import img from "@/components/cart/a.jpeg";
import img2 from "@/components/cart/IMG_3509.jpeg";
import Title from "@/components/util/title";
import Link from "next/link";
import Button from "@/components/util/button";
export default function CartPage() {
  return (
    <div className="justify-between mx-[1rem] md:m-[4rem] flex flex-col  min-h-[70vh] mb-5">
      <div className=" flex flex-col my-8 ">
        <Title moreStyle="mb-10"> COS DE CUMPARATURI</Title>
        <div className="">
          <CartPageItems img={img} />
        </div>
      </div>
      <div className="my-2">{/* <CartPageItems img={img2} /> */}</div>
      <div className="flex flex-col font-[300] w-full self-end mt-20">
        <div className="flex justify-between text-lg mb-1">
          <span className="font-[500]">Subtotal</span>
          <span>200.00 lei</span>
        </div>
        <span className="text-xs mb-2">
          Taxele de transport sunt calculate la pasul urmator
        </span>
        <Button moreStyle="my-5 py-3 border-[0.6px]">
          <Link href="/checkout">Finalizare Comanda</Link>
        </Button>
      </div>
    </div>
  );
}
