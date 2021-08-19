import userEvent from '@testing-library/user-event';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, screen, resizeViewport } from '../../test-utils';
import App from './App';

describe('Container: App', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('renders both product list and cart on desktop view', () => {
    act(() => resizeViewport({ isMobile: false }));
    expect(screen.getByText('Products')).toBeInTheDocument();
    expect(screen.getByText('Cart')).toBeInTheDocument();
  });

  test('renders only product list by default on mobile', () => {
    act(() => resizeViewport({ isMobile: true }));
    expect(screen.getByText('Products')).toBeInTheDocument();
    expect(screen.queryByText('Cart')).not.toBeInTheDocument();
  });

  test('renders only the cart view when button to display only the cart is pressed', () => {
    act(() => resizeViewport({ isMobile: true }));
    const navIcon = screen.getByTestId('header-icon-right');
    userEvent.click(navIcon);

    expect(screen.queryByText('Products')).not.toBeInTheDocument();
    expect(screen.queryByText('Cart')).toBeInTheDocument();
  });

  test('renders back product list when return button is pressed on cart view', () => {
    act(() => resizeViewport({ isMobile: true }));
    userEvent.click(screen.getByTestId('header-icon-right'));
    userEvent.click(screen.getByTestId('header-icon-left'));

    expect(screen.queryByText('Products')).toBeInTheDocument();
    expect(screen.queryByText('Cart')).not.toBeInTheDocument();
  });
});
