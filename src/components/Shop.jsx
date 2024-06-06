import GetData from './GetData';
import Nav from './Nav';
import ProductList from './ProductList';
import styles from './Shop.module.css';
import { useState } from 'react';

export default function Shop() {
  const [results, setResults] = useState([]);
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);
  return (
    <>
      <Nav
        status="display"
        amount={amount}
        setAmount={setAmount}
        total={total}
        setTotal={setTotal}
      />
      <div className={styles.products}>
        <h1>Products</h1>
        <div className={styles.container}>
          <GetData setResults={setResults} />
          {results.length > 0 ? (
            <ProductList
              results={results}
              amount={amount}
              setAmount={setAmount}
              total={total}
              setTotal={setTotal}
            />
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      </div>
    </>
  );
}
