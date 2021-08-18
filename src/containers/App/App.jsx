import React, { useState } from 'react';
import { ProductList, Cart } from '..';
import { useViewportSize } from '../../hooks';

function App() {
  const [currentView, setView] = useState('products');
  const { isMobile } = useViewportSize();

  return (
    <>
      {(!isMobile || currentView === 'products') && (
        <ProductList setView={setView} />
      )}
      {(!isMobile || currentView === 'cart') && <Cart setView={setView} />}
    </>
  );
}

export default App;
