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
  console.log("EXTRA", extraInfo);
  const extraData = extraInfo.product.formData;
  return (
    <div className="text-sm font-[100]">
      <div>Orasul livrarii: {extraData.deliveryCity}</div>
      <div>Data livrarii: {extraData.deliveryDate}</div>
      <div>Intervalul livrarii: {extraData.deliveryInterval}</div>
      <div>Mesaj felicitare: {extraData.deliveryMessage}</div>
      <div>Livrare anonima: {extraData.deliveryType ? "Da" : "Nu"}</div>
    </div>
  );
};

export default CartExtra;
