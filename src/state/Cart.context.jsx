import { createContext, useContext, useEffect, useState, useMemo } from "react";
const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);


export const CartProvider = ({ children }) => {
  return (
    <CartContext.Provider value={value} displayName="CartContext">
      {children}
    </CartContext.Provider>
  );
};