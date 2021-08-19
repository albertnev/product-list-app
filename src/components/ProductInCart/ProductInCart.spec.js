import React from 'react';
import { render, screen } from '../../test-utils';
import { ProductInCart } from '..';
import productList from '../../test-utils/mocks/productList.json';

describe('Component: ProductInCart', () => {
  const defaultProduct = productList[0];

  beforeEach(() => {
    render(<ProductInCart product={defaultProduct} />);
  });

  test('renders the product image', () => {
    const imageContainer = screen.getByTestId('product-in-list-image');
    expect(imageContainer).toHaveStyle(
      `background-image: url("${defaultProduct.image_url}")`
    );
  });

  test('renders the product basic information', () => {
    expect(screen.getByText(defaultProduct.productName)).toBeInTheDocument();
    expect(screen.getByText(`€${defaultProduct.price}`)).toBeInTheDocument();
  });

  test('renders the quantity counter', () => {
    expect(
      screen.getByTestId('quantity-input-subtract-button')
    ).toBeInTheDocument();
  });
});
