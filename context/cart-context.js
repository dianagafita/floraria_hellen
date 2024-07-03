"use client";

import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  function toogleOpenCart() {
    setIsCartOpen((prev) => !prev);
  }

  return (
    <CartContext.Provider value={{ toogleOpenCart, isCartOpen }}>
      {children}
    </CartContext.Provider>
  );
}
