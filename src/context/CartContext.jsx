import { createContext, useState } from 'react';

// create a new context
export const CartContext = createContext();

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // function untuk menambah item ke dalam cart
  // input: items yang di add oleh user dari button Add to Cart
  // output: listItems yang ada di cart
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  // function untuk meremove item di cart
  // input: item yang diclick oleh user dari button Remove from cart
  // output: item terhapus. menampilkan item yang belum dihapus
  const removeFromCart = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
