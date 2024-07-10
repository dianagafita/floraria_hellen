// "use client";
// import { CartContext } from "@/context/cart-context";
// import React, { useContext } from "react";

// export default function ExampleComponent() {
//   const { cartItems, addItemToCart, removeItemFromCart, clearCart } =
//     useContext(CartContext);

//   return (
//     <div>
//       <h2>Shopping Cart</h2>
//       <ul>
//         {cartItems.map((item, index) => (
//           <li key={index}>
//             {item.name} - ${item.price}
//             <button onClick={() => removeItemFromCart(index)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//       <button onClick={() => addItemToCart({ name: "New Item", price: 10 })}>
//         Add Item
//       </button>
//       <button onClick={() => clearCart()}>Clear Cart</button>
//     </div>
//   );
// }

import { TitleByPath } from "@/components/util/getPathTitle";

import { getProducts } from "@/lib/gggg";
import { ProductList } from "../(content)/flower-bouquets/[flowerSubType]/page";

const paths = [
  {
    href: "/flower-bouquets",
    title: "BUCHETE FLORI",
    style: "text-black-300/75",
  },
];

export default async function FlowerBouquetsPage() {
  // const flowerBouquets = await getProductsByType({
  //   type: "buchet",
  // });
  // console.log(flowerBouquets);
  const products = await getProducts();

  return (
    <div className="flex flex-col">
      <TitleByPath paths={paths} />

      {/* <Categories />
      <SortItems />
      <ItemCard images={flowerBouquets} /> */}
      <ProductList products={products} />
    </div>
  );
}
