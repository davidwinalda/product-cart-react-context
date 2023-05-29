import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name}
            {''}
            <button onClick={() => removeFromCart(item)}>
              Remove from cart
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cart;
