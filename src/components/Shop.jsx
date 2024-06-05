import GetData from './GetData';
import Nav from './Nav';
import ProductList from './ProductList';
import styles from './Shop.module.css';
import { useState } from 'react';

export default function Shop() {
  const [results, setResults] = useState([]);
  return (
    <>
      <Nav />
      <div className={styles.products}>
        <h1>Products</h1>
        <div className={styles.container}>
          <GetData setResults={setResults} />
          <ProductList results={results} />
        </div>
      </div>
    </>
  );
}
