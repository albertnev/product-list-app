import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { QuantityInput } from '..';

describe('Component: QuantityInput', () => {
  const defaultValue = 5;
  const onChange = jest.fn();

  beforeEach(() => {
    render(<QuantityInput defaultValue={defaultValue} onChange={onChange} />);
  });

  test('renders an input with the default value', () => {
    const input = screen.getByTestId('quantity-input-value-control');
    expect(input).toHaveValue(`${defaultValue}`);
  });

  test('onChange method is called when typing in the input control', () => {
    const input = screen.getByTestId('quantity-input-value-control');
    userEvent.type(input, '15');
    expect(onChange).toHaveBeenCalledTimes(2);
  });

  test('onChange method is called when pressing the subtract button', () => {
    const button = screen.getByTestId('quantity-input-subtract-button');
    userEvent.click(button);
    expect(onChange).toHaveBeenCalledWith(defaultValue - 1);
  });

  test('onChange method is called when pressing the add button', () => {
    const button = screen.getByTestId('quantity-input-add-button');
    userEvent.click(button);
    expect(onChange).toHaveBeenCalledWith(defaultValue + 1);
  });
});
