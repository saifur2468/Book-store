import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistCount, setWishlistCount] = useState(0);

  // Add to Cart with Quantity Logic
  const addToCart = (book) => {
    if (!book || !book._id) return; 

    setCartItems((prevItems) => {
      const isExist = prevItems.find((item) => item._id === book._id);
      if (isExist) {
        return prevItems.map((item) =>
          item._id === book._id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...book, quantity: 1 }];
    });
  };

  // Remove from Cart
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item._id !== id));
  };

  // Update Quantity (Plus/Minus)
  const updateQuantity = (id, type) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item._id === id) {
          const newQty = type === "inc" ? item.quantity + 1 : item.quantity - 1;
          return { ...item, quantity: newQty < 1 ? 1 : newQty };
        }
        return item;
      })
    );
  };

  const addToWishlist = () => setWishlistCount(prev => prev + 1);

  return (
    <CartContext.Provider value={{ cartItems, wishlistCount, addToCart, removeFromCart, updateQuantity, addToWishlist }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);