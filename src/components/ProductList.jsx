import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductList = () => {
  const { addToCart } = useContext(CartContext);

  const products = [
    {
      id: 1,
      name: 'Kopi ABC',
      price: 5000,
    },
    {
      id: 2,
      name: 'Teh Sariwangi',
      price: 3000,
    },
    {
      id: 3,
      name: 'Abon Sapi',
      price: 70000,
    },
  ];

  return (
    <>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} {''}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductList;
