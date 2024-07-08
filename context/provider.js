"use client";

import { CartProvider } from "./cart-context";

export function Providers({ children }) {
  return <CartProvider>{children} </CartProvider>;
}
