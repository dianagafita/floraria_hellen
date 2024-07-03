import CartPageItems from "@/components/cart/cart-page-items";
import img from "@/components/cart/a.jpeg";
import img2 from "@/components/cart/IMG_3509.jpeg";
import Title from "@/components/util/title";
import Link from "next/link";
export default function CartPage() {
  return (
    <div className=" m-[1.5rem] md:m-[4rem] flex flex-col ">
      <Title> COS DE CUMPARATURI</Title>
      <div className="my-5">
        <CartPageItems img={img} />
      </div>
      <div className="my-5">
        <CartPageItems img={img2} />
      </div>
      <div className="flex flex-col font-[300] w-[40vw] self-end mt-10">
        <div className="flex justify-between text-lg mb-1">
          <span className="font-[500]">Subtotal</span>
          <span>200.00 lei</span>
        </div>
        <span className="text-xs mb-8">
          Taxele de transport sunt calculate la pasul urmator
        </span>
        <button className="bg-black rounded text-white hover:bg-white hover:text-black hover:border  active:bg-white active:text-black active:border p-2">
          <Link href="/checkout">Finalizare Comanda</Link>
        </button>
      </div>
    </div>
  );
}
