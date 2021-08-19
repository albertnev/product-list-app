import React from 'react';
import { render, screen } from '../../test-utils';
import { ProductInList } from '..';
import productList from '../../test-utils/mocks/productList.json';

describe('Component: ProductInList', () => {
  let rerender;
  const defaultProduct = productList[0];
  const renderComponent = ({
    product = defaultProduct,
    simplifiedView = false,
  } = {}) =>
    render(<ProductInList product={product} simplifiedView={simplifiedView} />);

  describe('Normal view', () => {
    beforeEach(() => {
      ({ rerender } = renderComponent());
    });

    test('renders the product image', () => {
      const imageContainer = screen.getByTestId('product-in-list-image');
      expect(imageContainer).toHaveStyle(
        `background-image: url("${defaultProduct.image_url}")`
      );
    });

    test('renders the fav icon highlighted when the product is marked as favorite', () => {
      const favProduct = { ...defaultProduct, favorite: 1 };
      rerender(<ProductInList product={favProduct} />);
      expect(screen.getByTestId('product-in-list-fav-icon')).toHaveStyle(
        'color: red'
      );
    });

    test('renders the product basic information', () => {
      expect(screen.getByText(defaultProduct.productName)).toBeInTheDocument();
      expect(screen.getByText(`€${defaultProduct.price}`)).toBeInTheDocument();
    });

    test('renders a short product description if it is larger than 120 characters', () => {
      expect(
        screen.getByText(
          `${defaultProduct.productDescription.substr(0, 120)}...`
        )
      ).toBeInTheDocument();
    });

    test('renders the stock', () => {
      expect(
        screen.getByTestId('product-in-list-stock-left')
      ).toBeInTheDocument();
    });
  });

  describe('Simplified view', () => {
    beforeEach(() => {
      renderComponent({
        simplifiedView: true,
      });
    });

    test('renders the product basic information except for the description', () => {
      expect(screen.getByText(defaultProduct.productName)).toBeInTheDocument();
      expect(screen.getByText(`€${defaultProduct.price}`)).toBeInTheDocument();
      expect(
        screen.queryByText(defaultProduct.productDescription)
      ).not.toBeInTheDocument();
    });

    test('does not render the stock but renders the add button', () => {
      expect(
        screen.queryByTestId('product-in-list-stock-left')
      ).not.toBeInTheDocument();
      expect(screen.queryByTestId('add-to-cart-button')).toBeInTheDocument();
    });
  });
});
