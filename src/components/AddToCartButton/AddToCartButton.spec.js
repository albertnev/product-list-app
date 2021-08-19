import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '../../test-utils';
import { AddToCartButton } from '..';

describe('Component: AddToCartButton', () => {
  const onClickFn = jest.fn();

  describe('product has been already added to the product cart', () => {
    beforeEach(() => {
      render(<AddToCartButton alreadyAdded onClick={onClickFn} />);
    });

    test('renders the check symbol if product has been already added', () => {
      expect(screen.getByText('✓')).toBeInTheDocument();
    });

    test('does not call the onClick method if product has been already added', () => {
      const checkSymbol = screen.getByText('✓');
      userEvent.click(checkSymbol);
      expect(onClickFn).not.toHaveBeenCalled();
    });
  });

  describe('product has not been added to the product cart yet', () => {
    let rerender;

    beforeEach(() => {
      ({ rerender } = render(<AddToCartButton onClick={onClickFn} />));
    });

    test('renders the button if product has not been added yet', () => {
      expect(screen.getByTestId('add-to-cart-button')).toBeInTheDocument();
    });

    test('calls the onClick method if button is clicked', () => {
      const addButton = screen.getByTestId('add-to-cart-button');
      userEvent.click(addButton);
      expect(onClickFn).toHaveBeenCalled();
    });

    test('does not call the onClick method if it is disabled', () => {
      rerender(<AddToCartButton onClick={onClickFn} disabled />);
      const addButton = screen.getByTestId('add-to-cart-button');
      userEvent.click(addButton);
      expect(onClickFn).not.toHaveBeenCalled();
    });
  });
});
