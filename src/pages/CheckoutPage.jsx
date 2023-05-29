import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CheckoutPage = () => {
  const { cartItems } = useContext(CartContext);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <h2>Checkout Page</h2>
      <p>Total Price: Rp {totalPrice}</p>
    </div>
  );
};

export default CheckoutPage;
