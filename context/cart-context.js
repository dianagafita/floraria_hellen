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

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      console.log("Loaded cart from localStorage:", savedCart);
      if (savedCart) {
        try {
          const parsedCart = JSON.parse(savedCart);
          setCartItems(parsedCart);
          console.log("Parsed cart:", parsedCart);
        } catch (error) {
          console.error("Failed to parse cart JSON:", error);
        }
      }
    }
  }, []);
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    } else {
      localStorage.removeItem("cart");
    }
  }, [cartItems]);

  // const addToCart = (product) => {
  //   const { deliveryCity, deliveryDate, deliveryInterval } = product.formData;
  //   const extras = product.extras || []; // Handle the case where extras might be undefined or null

  //   // Find the index of the cart item that matches the product and formData
  //   const existingCartItemIndex = cartItems.findIndex(
  //     (item) =>
  //       item.product.id === product.id &&
  //       item.product.formData.deliveryCity === deliveryCity &&
  //       item.product.formData.deliveryDate === deliveryDate &&
  //       item.product.formData.deliveryInterval === deliveryInterval
  //   );

  //   if (existingCartItemIndex !== -1) {
  //     const existingCartItem = cartItems[existingCartItemIndex];
  //     let updatedExtras = [...existingCartItem.product.extras];

  //     if (extras.length > 0) {
  //       // Handle extras
  //       extras.forEach((extra) => {
  //         const existingExtraIndex = updatedExtras.findIndex(
  //           (existingExtra) => existingExtra.id === extra.id
  //         );

  //         if (existingExtraIndex !== -1) {
  //           // Update the quantity of the existing extra
  //           updatedExtras[existingExtraIndex] = {
  //             ...updatedExtras[existingExtraIndex],
  //             quantity: updatedExtras[existingExtraIndex].quantity + 1,
  //           };
  //         } else {
  //           // Add new extra to the existing item
  //           updatedExtras.push({ ...extra, quantity: 1 });
  //         }
  //       });

  //       // Update the cart item with the new extras and ensure the product quantity is updated
  //       const updatedCartItem = {
  //         ...existingCartItem,
  //         product: {
  //           ...existingCartItem.product,
  //           extras: updatedExtras,
  //         },
  //         quantity: existingCartItem.quantity + 1, // Ensure quantity of the main product is updated
  //       };

  //       const updatedCartItems = [...cartItems];
  //       updatedCartItems[existingCartItemIndex] = updatedCartItem;
  //       setCartItems(updatedCartItems);
  //     } else {
  //       // Handle regular items
  //       const updatedCartItem = {
  //         ...existingCartItem,
  //         quantity: existingCartItem.quantity + 1,
  //       };

  //       const updatedCartItems = [...cartItems];
  //       updatedCartItems[existingCartItemIndex] = updatedCartItem;
  //       setCartItems(updatedCartItems);
  //     }
  //   } else {
  //     // Item does not exist, add new item to the cart
  //     const newProduct = {
  //       product,
  //       quantity: 1,
  //       ...(extras.length > 0
  //         ? { extras: extras.map((extra) => ({ ...extra, quantity: 1 })) }
  //         : {}),
  //     };

  //     setCartItems([...cartItems, newProduct]);
  //   }
  // };
  // State or variable to store temporary extras
  const addToCart = (product) => {
    const { deliveryCity, deliveryDate, deliveryInterval } = product.formData;
    const extras = product.extras; // Use product's extras

    // Find the index of the cart item that matches the product and formData
    const existingCartItemIndex = cartItems.findIndex(
      (item) =>
        item.product.id === product.id &&
        item.product.formData.deliveryCity === deliveryCity &&
        item.product.formData.deliveryDate === deliveryDate &&
        item.product.formData.deliveryInterval === deliveryInterval
    );

    if (existingCartItemIndex !== -1) {
      const existingCartItem = cartItems[existingCartItemIndex];
      let updatedExtras = [...existingCartItem.product.extras];

      if (extras.length > 0) {
        // Handle new extras
        extras.forEach((extra) => {
          const existingExtraIndex = updatedExtras.findIndex(
            (existingExtra) => existingExtra.id === extra.id
          );

          if (existingExtraIndex !== -1) {
            // Update the quantity of the existing extra
            updatedExtras[existingExtraIndex] = {
              ...updatedExtras[existingExtraIndex],
              quantity: updatedExtras[existingExtraIndex].quantity + 1,
            };
          } else {
            // Add new extra to the existing item
            updatedExtras.push({ ...extra, quantity: 1 });
          }
        });

        // Update the cart item with the new extras and ensure the product quantity is updated
        const updatedCartItem = {
          ...existingCartItem,
          product: {
            ...existingCartItem.product,
            extras: updatedExtras,
          },
          quantity: existingCartItem.quantity + 1, // Ensure quantity of the main product is updated
        };

        const updatedCartItems = [...cartItems];
        updatedCartItems[existingCartItemIndex] = updatedCartItem;
        setCartItems(updatedCartItems);
      } else {
        // Handle regular items (without extras)
        const updatedCartItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
          product: {
            ...existingCartItem.product,
            extras: [], // Clear extras if no extras are provided
          },
        };

        const updatedCartItems = [...cartItems];
        updatedCartItems[existingCartItemIndex] = updatedCartItem;
        setCartItems(updatedCartItems);
      }
    } else {
      // Item does not exist, add new item to the cart
      const newProduct = {
        product,
        quantity: 1,
        ...(extras.length > 0
          ? { extras: extras.map((extra) => ({ ...extra, quantity: 1 })) }
          : {}),
      };

      setCartItems([...cartItems, newProduct]);
    }

    // Clear the temporary extras array after adding the product
  };

  // Function to handle adding extras

  const removeFromCart = (
    productId,
    formData = {},
    isExtra = false,
    extraId = null
  ) => {
    if (isExtra && extraId) {
      // Remove an extra from a cart item
      const updatedCartItems = cartItems.map((item) => {
        // Check if this item matches the product ID and formData
        if (
          item.product.id === productId &&
          (!formData.deliveryCity ||
            item.product.formData?.deliveryCity === formData.deliveryCity) &&
          (!formData.deliveryDate ||
            item.product.formData?.deliveryDate === formData.deliveryDate) &&
          (!formData.deliveryInterval ||
            item.product.formData?.deliveryInterval ===
              formData.deliveryInterval)
        ) {
          // Filter out the specific extra to remove
          const updatedExtras = item.product.extras.filter(
            (extra) => extra.id !== extraId
          );

          // Return the updated item with remaining extras
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

      // Update the cart items state
      setCartItems(updatedCartItems);
    } else {
      // Remove a regular item or item with no extras
      const updatedCartItems = cartItems.filter((item) => {
        // Check if the item matches the criteria
        return !(
          item.product.id === productId &&
          (!formData.deliveryCity ||
            item.product.formData?.deliveryCity === formData.deliveryCity) &&
          (!formData.deliveryDate ||
            item.product.formData?.deliveryDate === formData.deliveryDate) &&
          (!formData.deliveryInterval ||
            item.product.formData?.deliveryInterval ===
              formData.deliveryInterval)
        );
      });

      // Update the cart items state
      setCartItems(updatedCartItems);
    }
  };

  const updateCartItemQuantity = (
    productId,
    quantity,
    isExtra = false,
    extraId = null,
    formData = {}
  ) => {
    console.log("Before Update:", cartItems);

    const updatedCartItems = cartItems.map((item) => {
      const matchesProductAndFormData =
        item.product.id === productId &&
        (!formData.deliveryCity ||
          item.product.formData?.deliveryCity === formData.deliveryCity) &&
        (!formData.deliveryDate ||
          item.product.formData?.deliveryDate === formData.deliveryDate) &&
        (!formData.deliveryInterval ||
          item.product.formData?.deliveryInterval ===
            formData.deliveryInterval);

      if (isExtra && extraId) {
        if (matchesProductAndFormData) {
          const updatedExtras = item.product.extras.map((extra) => {
            if (extra.id === extraId) {
              return { ...extra, quantity };
            }
            return extra;
          });

          return {
            ...item,
            product: {
              ...item.product,
              extras: updatedExtras,
            },
          };
        }
      } else {
        if (matchesProductAndFormData) {
          return {
            ...item,
            quantity,
          };
        }
      }

      return item;
    });

    console.log("After Update:", updatedCartItems);

    setCartItems(updatedCartItems);
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
