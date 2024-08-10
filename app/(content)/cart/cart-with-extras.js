// import React from "react";
// import CartPageItems from "@/components/cart/cart-page-items";
// import CartExtraPageItem from "./cart-extra-page-item";

// export default function CartWithExtras({ items, productId }) {
//   console.log("CARTEXTRA", items);
//   return (
//     <>
//       <CartPageItems items={items} />

//       {items.product.extras &&
//         items.product.extras.map((extraItem) => (
//           <CartExtraPageItem productId={productId} extraItems={extraItem} />
//         ))}
//     </>
//   );
// }
import React from "react";
import CartPageItems from "@/components/cart/cart-page-items";

export default function CartWithExtras({ items, productId }) {
  return (
    <>
      {/* Main Product */}
      <CartPageItems items={items} type="main" />

      {/* Extra Items */}
      {items.product.extras &&
        items.product.extras.map((extraItem) => (
          <CartPageItems productId={productId} items={extraItem} type="extra" />
        ))}
    </>
  );
}
