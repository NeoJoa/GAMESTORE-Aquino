import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (currentItem) => {
    if (items.some(({ item }) => item.id === currentItem.item.id)) return;
    setItems([...items, currentItem]);
  };

  const removeItem = (itemId) => {
    const cart = items.filter(({ item }) => item.id !== itemId);
    setItems(cart);
  };

  const clear = () => {
    setItems([]);
  };

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clear }}>
      {children}
    </CartContext.Provider>
  );
};
