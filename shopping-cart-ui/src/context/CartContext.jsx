/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  return <CartContext value={{ cart }}>{children}</CartContext>;
}

export function useCart() {
  return useContext(CartContext);
}
