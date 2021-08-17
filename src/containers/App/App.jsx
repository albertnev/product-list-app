import React, { useState } from 'react';
import { ProductList, Cart } from '..';
import { useViewportSize } from '../../hooks';
import styles from './AppStyles';

function App() {
  const [currentView, setView] = useState('products');
  const { isMobile } = useViewportSize();

  return (
    <div className={styles.appWrapper}>
      {(!isMobile || currentView === 'products') && (
        <ProductList setView={setView} />
      )}
      {(!isMobile || currentView === 'cart') && <Cart setView={setView} />}
    </div>
  );
}

export default App;
