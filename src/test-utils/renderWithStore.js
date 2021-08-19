import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import defaultStore from '../redux/store';

function render(
  ui,
  { preloadedState, store = defaultStore, ...renderOptions } = {}
) {
  // eslint-disable-next-line react/prop-types
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  const rendered = rtlRender(ui, { wrapper: Wrapper, ...renderOptions });

  return {
    ...rendered,
    rerender: (_ui, options) =>
      render(_ui, { container: rendered.container, ...options }),
  };
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
