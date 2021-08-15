import React from 'react';
import { ProductList, Cart, Menu } from '..';

import styles from './AppStyles';

function App() {
  return (
    <div className={styles.appWrapper}>
      <Menu />
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;
