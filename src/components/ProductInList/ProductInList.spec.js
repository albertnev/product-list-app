import React from 'react';
import { render } from '@testing-library/react';
import { ProductInList } from '..';
import productList from '../../test-utils/mocks/productList.json';

describe('Component: ProductInList', () => {
  const defaultProduct = productList[0];
  const renderComponent = ({
    product = defaultProduct,
    simplifiedView = false,
  } = {}) =>
    render(<ProductInList product={product} simplifiedView={simplifiedView} />);

  describe('Normal view', () => {
    test('renders the product image', () => {
      const { getByTestId } = renderComponent();
      const imageContainer = getByTestId('product-in-list-image');
      expect(imageContainer).toHaveStyle(
        `background-image: url("${defaultProduct.image_url}")`
      );
    });

    test('renders the fav icon highlighted when the product is marked as favorite', () => {
      const { getByTestId } = renderComponent({
        product: { ...defaultProduct, favorite: 1 },
      });
      expect(getByTestId('product-in-list-fav-icon')).toHaveStyle('color: red');
    });

    test('renders the product basic information', () => {
      const { getByText } = renderComponent();
      expect(getByText(defaultProduct.productName)).toBeInTheDocument();
      expect(getByText(`€${defaultProduct.price}`)).toBeInTheDocument();
      expect(getByText(defaultProduct.productDescription)).toBeInTheDocument();
    });

    test('renders the stock and the add button', () => {
      const { getByTestId } = renderComponent();
      expect(getByTestId('product-in-list-stock-left')).toBeInTheDocument();
      expect(
        getByTestId('product-in-list-add-to-cart-button')
      ).toBeInTheDocument();
    });
  });

  describe('Simplified view', () => {
    test('does not render the stock nor the add button', () => {
      const { queryByTestId } = renderComponent({ simplifiedView: true });
      expect(
        queryByTestId('product-in-list-stock-left')
      ).not.toBeInTheDocument();
      expect(
        queryByTestId('product-in-list-add-to-cart-button')
      ).not.toBeInTheDocument();
    });
  });
});
