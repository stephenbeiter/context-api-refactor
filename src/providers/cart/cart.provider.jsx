import React, { createContext, useState, useEffect } from 'react';

import { addItemToCart, removeItemFromCart } from './cart.utils';

export const CartContext = createContext({
  hidden: true,
  cartItems: [],
  cartItemsCount: 0,
  toggleHidden: () => { },
  addItem: () => { },
  removeItem: () => { },
  clearItemFromCart: () => { }
});

const CartProvider = ({ children }) => {
  const [hidden, setHidden] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  const toggleHidden = () => setHidden(!hidden);
  const addItem = item => setCartItems(addItemToCart(cartItems, item));
  const removeItem = item => setCartItems(removeItemFromCart(cartItems, item));

  return (
    <CartContext.Provider
      value={{
        hidden,
        cartItems,
        cartItemsCount,
        toggleHidden,
        addItem,
        removeItem
      }}
    >
      {children}
    </CartContext.Provider>
  )
};

export default CartProvider;