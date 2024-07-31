// import React from "react";
// import Button from "../util/button";
// import Link from "next/link";

// export default function OrderItem() {
//   return (
//     <div className="border rounded-sm p-4 flex flex-col ">
//       <div className=" flex flex-col items-start ">
//         <span className="text-xl whitespace-nowrap">Comanda nr.456789</span>
//         <span className="text-sm  text-[rgba(0,0,0,0.5)] font-[100] mb-5">
//           Plasata pe 12 Iun 2024 la 21:30
//         </span>
//       </div>
//       <div className="flex w-full h-full justify-between items-center">
//         <span className="">Comanda Livrata</span>
//         <span className="mr-5 self-center">200 lei</span>
//         <Link href="/profile/orders/a">
//           <Button moreStyle=" font-[100] px-5 py-1">Detalii</Button>
//         </Link>
//       </div>
//     </div>
//   );
// }
import React from "react";
import Button from "../util/button";
import Link from "next/link";

export default function OrderItem({ order }) {
  return (
    <div className="border rounded-sm p-4 flex flex-col mb-5">
      <div className="flex flex-col items-start mb-5">
        <span className="text-xl whitespace-nowrap">Comanda nr.{order.id}</span>
        <span className="text-sm text-[rgba(0,0,0,0.5)] font-[100]">
          Plasata pe {new Date(order.created_at).toLocaleDateString()} la{" "}
          {new Date(order.created_at).toLocaleTimeString()}
        </span>
      </div>
      <div className="flex w-full justify-between items-center">
        <span className="text-transform: uppercase text-sm">
          {order.order_state}
        </span>
        <span className="mr-5">{order.total_price} lei</span>
        <Link href={`/profile/orders/${order.id}`}>
          <Button moreStyle="font-[100] px-5 py-1">Detalii</Button>
        </Link>
      </div>
    </div>
  );
}
