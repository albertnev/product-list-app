import React from 'react';
import { useSelector } from 'react-redux';
import { getCartProductsArray } from '../../redux/selectors';
import { ProductInCart } from '../../components';

const Cart = () => {
  const productsInCart = useSelector(getCartProductsArray);

  return (
    <ul>
      {productsInCart.map((product) => (
        <div>{product.name}</div>
      ))}
    </ul>
  );
};

Cart.propTypes = {};

export default Cart;
