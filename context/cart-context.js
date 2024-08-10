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

  // const addToCart = (product, formData) => {
  //   const existingCartItemIndex = cartItems.findIndex(
  //     (item) => item.product.id === product.id
  //   );
  //   if (existingCartItemIndex !== -1) {
  //     const existingCartItem = cartItems[existingCartItemIndex];
  //     const updatedCartItem = {
  //       ...existingCartItem,
  //       quantity: existingCartItem.quantity + 1,
  //     };
  //     const updatedCartItems = [...cartItems];
  //     updatedCartItems[existingCartItemIndex] = updatedCartItem;
  //     setCartItems(updatedCartItems);
  //   } else {
  //     setCartItems([...cartItems, { product, quantity: 1, ...formData }]);
  //   }
  // };
  const addToCart = (product, formData = {}) => {
    const existingCartItemIndex = cartItems.findIndex(
      (item) => item.product.id === product.id
    );

    if (existingCartItemIndex !== -1) {
      const existingCartItem = cartItems[existingCartItemIndex];

      if (formData.extraId) {
        const existingExtraIndex = existingCartItem.product.extras.findIndex(
          (extra) => extra.id === formData.extraId
        );

        if (existingExtraIndex !== -1) {
          // Update the quantity of the existing extra item
          const updatedExtras = existingCartItem.product.extras.map(
            (extra, index) => {
              if (index === existingExtraIndex) {
                return { ...extra, quantity: extra.quantity + 1 };
              }
              return extra;
            }
          );

          const updatedCartItem = {
            ...existingCartItem,
            product: {
              ...existingCartItem.product,
              extras: updatedExtras,
            },
          };

          const updatedCartItems = [...cartItems];
          updatedCartItems[existingCartItemIndex] = updatedCartItem;
          setCartItems(updatedCartItems);
        } else {
          // If the extra doesn't exist, add it to the product's extras
          const updatedCartItem = {
            ...existingCartItem,
            product: {
              ...existingCartItem.product,
              extras: [
                ...existingCartItem.product.extras,
                { ...formData, quantity: 1 },
              ],
            },
          };

          const updatedCartItems = [...cartItems];
          updatedCartItems[existingCartItemIndex] = updatedCartItem;
          setCartItems(updatedCartItems);
        }
      } else {
        // If no extra, just update the product quantity
        const updatedCartItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };

        const updatedCartItems = [...cartItems];
        updatedCartItems[existingCartItemIndex] = updatedCartItem;
        setCartItems(updatedCartItems);
      }
    } else {
      // If product is not in cart, add it with extras if any
      const newProduct = {
        product,
        quantity: 1,
        ...(formData.extraId ? { extras: [{ ...formData, quantity: 1 }] } : {}),
      };

      setCartItems([...cartItems, newProduct]);
    }
  };

  const removeFromCart = (productId, isExtra = false, extraId = null) => {
    if (isExtra && extraId) {
      const updatedCartItems = cartItems.map((item) => {
        if (item.product.id === productId) {
          const updatedExtras = item.product.extras.filter(
            (extra) => extra.id !== extraId
          );

          return {
            ...item,
            product: {
              ...item.product,
              extras: updatedExtras,
            },
          };
        }

        return item;
      });
      setCartItems(updatedCartItems);
    } else {
      const updatedCartItems = cartItems.filter(
        (item) => item.product.id !== productId
      );
      setCartItems(updatedCartItems);
    }
  };

  const updateCartItemQuantity = (
    productId,
    quantity,
    isExtra = false,
    extraId = null
  ) => {
    const existingCartItemIndex = cartItems.findIndex(
      (item) => item.product.id === productId
    );

    if (existingCartItemIndex !== -1) {
      const existingCartItem = cartItems[existingCartItemIndex];
      let updatedCartItem;

      if (isExtra && extraId) {
        if (Array.isArray(existingCartItem.product.extras)) {
          const updatedExtras = existingCartItem.product.extras.map((extra) => {
            if (extra.id === extraId) {
              return { ...extra, quantity };
            }
            return extra;
          });

          updatedCartItem = {
            ...existingCartItem,
            product: {
              ...existingCartItem.product,
              extras: updatedExtras,
            },
          };
        } else {
        }
      } else {
        updatedCartItem = {
          ...existingCartItem,
          quantity,
        };
      }

      const updatedCartItems = [...cartItems];
      updatedCartItems[existingCartItemIndex] = updatedCartItem;
      setCartItems(updatedCartItems);
    }
  };

  const cartTotal = cartItems.reduce((total, item) => {
    let itemTotal = item.product.price * item.quantity;
    if (item.product.extras && item.product.extras.length > 0) {
      item.product.extras.forEach((extra) => {
        itemTotal += extra.price * extra.quantity;
      });
    }
    return total + itemTotal;
  }, 0);

  const cartCount = cartItems.reduce((count, item) => {
    let totalItemCount = item.quantity;
    if (item.product.extras && item.product.extras.length > 0) {
      item.product.extras.forEach((extra) => {
        totalItemCount += extra.quantity;
      });
    }
    return count + totalItemCount;
  }, 0);

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
