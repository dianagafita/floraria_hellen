// import React from "react";

// export default function CartExtra() {
//   return (
//     <div className="flex flex-col text-sm font-[100] text-[rgba(0,0,0,0.8)]">
//       <span>
//         Locatie:<span> Gura Humorului</span>
//       </span>
//       <span>
//         Data livrarii:<span> 14 iunie 2024 </span>
//       </span>
//       <span>
//         Interval livrare:<span> 17:00 - 22:00</span>
//       </span>
//     </div>
//   );
// }
const CartExtra = ({ extraInfo }) => {
  return (
    <div className="text-sm font-[100]">
      <div>Orasul livrarii: {extraInfo.deliveryCity}</div>
      <div>Data livrarii: {extraInfo.deliveryDate}</div>
      <div>Intervalul livrarii: {extraInfo.deliveryInterval}</div>
      <div>Livrare anonima: {extraInfo.deliveryType ? "Da" : "Nu"}</div>
    </div>
  );
};

export default CartExtra;
