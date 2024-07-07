import Image from "next/image";
import QuantitySelector from "./quantity-selector";
import { useState } from "react";

export default function CartCard({ imgage }) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
    // Update the cart with the new quantity
  };

  return (
    <div className=" flex border-b items-start p-3 m-1">
      <div className="h-[5rem] w-[5rem] content-center">
        <Image src={imgage} alt="" />
      </div>
      <div className="flex w-full flex-col ml-4 ">
        <span className="text-sm font-[300] mb-1 ">BUCHET TRANDAFIRI</span>
        {/* <Trash2 strokeWidth={1} size={18} /> */}
        <button className="xxsFont mb-4 text-start">STERGE</button>
        <div className="flex items-end "></div>{" "}
        <div className="flex w-full justify-between items-center ">
          <QuantitySelector
            size={16}
            initialQuantity={quantity}
            onQuantityChange={handleQuantityChange}
          />
          <span className=" text-m font-[300] ml-5">
            100<sup>.00</sup>
            <sup> LEI</sup>
          </span>
        </div>
      </div>
    </div>
  );
}
