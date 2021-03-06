import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '../../test-utils';
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

  beforeAll(() => {
    jest.spyOn(window, 'fetch');
  });

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

    test('renders the add button as enabled if the product has stock', () => {
      expect(screen.getByTestId('add-to-cart-button')).not.toHaveAttribute(
        'disabled'
      );
    });

    test('renders the add button as disabled if the product has no stock', () => {
      const nostockProduct = { ...defaultProduct, stock: 0 };
      rerender(<ProductInList product={nostockProduct} />);
      expect(screen.getByTestId('add-to-cart-button')).toHaveAttribute(
        'disabled'
      );
    });

    test.skip('makes a fetch call and updates product favorite when favorite icon is clicked', async () => {
      const favButton = screen.getByTestId('product-in-list-fav-icon');
      userEvent.click(favButton);
      window.fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ id: defaultProduct.id, favorite: 1 }),
      });

      await waitFor(() => expect(favButton).toHaveStyle('color: red'));
      expect(window.fetch).toHaveBeenCalledWith(
        `http://localhost:3000/grocery/${defaultProduct.id}`,
        expect.objectContaining({
          body: JSON.stringify({ favorite: 1 }),
          method: 'PATCH',
        })
      );
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
