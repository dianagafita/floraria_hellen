// // // // "use client";
// // // // import { createContext, useContext, useEffect, useState } from "react";
// // // // import { getCart, saveCart } from "@/lib/cart";

// // // // const CartContext = createContext();

// // // // export function useCart() {
// // // //   return useContext(CartContext);
// // // // }

// // // // export function CartProvider({ children }) {
// // // //   const [cart, setCart] = useState([]);
// // // //   const [isCartOpen, setIsCartOpen] = useState(false);

// // // //   function toogleOpenCart() {
// // // //     setIsCartOpen((prev) => !prev);
// // // //   }

// // // //   // const [verify, setVerify] = useState({ user: null, loading: true });

// // // //   // useEffect(() => {
// // // //   //   const fetchAuthStatus = async () => {
// // // //   //     const response = await fetch("/api/valid");
// // // //   //     const data = await response.json();
// // // //   //     setVerify({ user: data.user, loading: false });
// // // //   //   };

// // // //   //   fetchAuthStatus();
// // // //   // }, []);

// // // //   const addToCart = (product) => {
// // // //     setCart((prevCart) => {
// // // //       const updatedCart = [...prevCart, product];

// // // //       return updatedCart;
// // // //     });
// // // //   };

// // // //   const removeFromCart = (productId) => {
// // // //     setCart((prevCart) => {
// // // //       const updatedCart = prevCart.filter((item) => item.id !== productId);

// // // //       return updatedCart;
// // // //     });
// // // //   };

// // // //   const clearCart = () => {
// // // //     setCart([]);
// // // //   };

// // // //   return (
// // // //     <CartContext.Provider
// // // //       value={{
// // // //         cart,
// // // //         addToCart,
// // // //         removeFromCart,
// // // //         clearCart,
// // // //         toogleOpenCart,
// // // //         isCartOpen,
// // // //       }}
// // // //     >
// // // //       {children}
// // // //     </CartContext.Provider>
// // // //   );
// // // // }
// // // "use client";
// // // import { createContext, useContext, useReducer } from "react";

// // // const CartContext = createContext();

// // // const cartReducer = (state, action) => {
// // //   switch (action.type) {
// // //     case "ADD_TO_CART":
// // //       // Handle adding to cart
// // //       return [...state, action.payload];
// // //     case "REMOVE_FROM_CART":
// // //       // Handle removing from cart
// // //       return state.filter((item) => item.id !== action.payload.id);
// // //     default:
// // //       return state;
// // //   }
// // // };

// // // export const CartProvider = ({ children }) => {
// // //   const [state, dispatch] = useReducer(cartReducer, []);

// // //   return (
// // //     <CartContext.Provider value={{ cart: state, dispatch }}>
// // //       {children}
// // //     </CartContext.Provider>
// // //   );
// // // };

// // // export const useCart = () => useContext(CartContext);
// // // CartContext.js
// // "use client";
// // import React, { useState, createContext } from "react";

// // // Create a context object
// // export const CartContext = createContext();

// // // Create a provider for components to consume and update the context
// // export const CartProvider = ({ children }) => {
// //   const [cartItems, setCartItems] = useState([]);
// //   console.log(cartItems);
// //   const [isCartOpen, setIsCartOpen] = useState(false);

// //   function toogleOpenCart() {
// //     setIsCartOpen((prev) => !prev);
// //   }

// //   // Function to add items to the cart
// //   const addItemToCart = (item) => {
// //     console.log("AADD");
// //     setCartItems([...cartItems, item]);
// //   };

// //   // Function to remove items from the cart
// //   const removeItemFromCart = (index) => {
// //     const newCartItems = [...cartItems];
// //     newCartItems.splice(index, 1);
// //     setCartItems(newCartItems);
// //   };

// //   // Clear all items from the cart
// //   const clearCart = () => {
// //     setCartItems([]);
// //   };

// //   // Value object to be passed to the provider
// //   const cartState = {
// //     cartItems,
// //     addItemToCart,
// //     removeItemFromCart,
// //     clearCart,
// //     toogleOpenCart,
// //     isCartOpen,
// //   };

// //   return (
// //     <CartContext.Provider value={cartState}>{children}</CartContext.Provider>
// //   );
// // };
// "use client";
// import { createContext, useContext, useState } from "react";

// const CartContext = createContext({
//   cartItems: [],
//   addToCart: () => {},
//   removeFromCart: () => {},
//   updateCartItemQuantity: () => {},
//   cartTotal: 0,
//   cartCount: 0,
// });

// export const useCart = () => {
//   return useContext(CartContext);
// };

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);
//   const [isCartOpen, setIsCartOpen] = useState(false);

//   function toogleOpenCart() {
//     setIsCartOpen((prev) => !prev);
//   }
//   const addToCart = (product) => {
//     const existingCartItemIndex = cartItems.findIndex(
//       (item) => item.product.id === product.id
//     );
//     if (existingCartItemIndex !== -1) {
//       const existingCartItem = cartItems[existingCartItemIndex];
//       const updatedCartItem = {
//         ...existingCartItem,
//         quantity: existingCartItem.quantity + 1,
//       };
//       const updatedCartItems = [...cartItems];
//       updatedCartItems[existingCartItemIndex] = updatedCartItem;
//       setCartItems(updatedCartItems);
//     } else {
//       setCartItems([...cartItems, { product, quantity: 1 }]);
//     }
//   };

//   const removeFromCart = (productId) => {
//     const updatedCartItems = cartItems.filter(
//       (item) => item.product.id !== productId
//     );
//     setCartItems(updatedCartItems);
//   };

//   const updateCartItemQuantity = (productId, quantity) => {
//     const existingCartItemIndex = cartItems.findIndex(
//       (item) => item.product.id === productId
//     );
//     if (existingCartItemIndex !== -1) {
//       const existingCartItem = cartItems[existingCartItemIndex];
//       const updatedCartItem = {
//         ...existingCartItem,
//         quantity,
//       };
//       const updatedCartItems = [...cartItems];
//       updatedCartItems[existingCartItemIndex] = updatedCartItem;
//       setCartItems(updatedCartItems);
//     }
//   };

//   const cartTotal = cartItems.reduce(
//     (total, item) => total + item.product.price * item.quantity,
//     0
//   );

//   const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         addToCart,
//         removeFromCart,
//         updateCartItemQuantity,
//         cartTotal,
//         cartCount,
//         toogleOpenCart,
//         isCartOpen,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };
"use client";
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateCartItemQuantity: () => {},
  cartTotal: 0,
  cartCount: 0,
  toogleOpenCart: () => {},
  isCartOpen: false,
});

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  function toogleOpenCart() {
    setIsCartOpen((prev) => !prev);
  }
  const addToCart = (product) => {
    const existingCartItemIndex = cartItems.findIndex(
      (item) => item.product.id === product.id
    );
    if (existingCartItemIndex !== -1) {
      const existingCartItem = cartItems[existingCartItemIndex];
      const updatedCartItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingCartItemIndex] = updatedCartItem;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter(
      (item) => item.product.id !== productId
    );
    setCartItems(updatedCartItems);
  };

  const updateCartItemQuantity = (productId, quantity) => {
    const existingCartItemIndex = cartItems.findIndex(
      (item) => item.product.id === productId
    );
    if (existingCartItemIndex !== -1) {
      const existingCartItem = cartItems[existingCartItemIndex];
      const updatedCartItem = {
        ...existingCartItem,
        quantity,
      };
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingCartItemIndex] = updatedCartItem;
      setCartItems(updatedCartItems);
    }
  };

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  // Logging to check state updates
  useEffect(() => {
    console.log("Cart items updated:", cartItems);
    console.log("Cart count updated:", cartCount);
  }, [cartItems, cartCount]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItemQuantity,
        cartTotal,
        cartCount,
        toogleOpenCart,
        isCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
