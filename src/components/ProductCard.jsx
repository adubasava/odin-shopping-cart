import styles from './ProductCard.module.css';
import { useState } from 'react';

export default function ProductCard({
  item,
  amount,
  setAmount,
  total,
  setTotal,
}) {
  const [number, setNumber] = useState(0);
  const [sum, setSum] = useState(0);
  function handleInput(e) {
    setNumber(e.target.value);
    setSum(sum + Number(item.price) * e.target.value);
  }
  function handleSubmit() {
    if (number > 0) {
      setAmount(Number(amount) + Number(number));
      setTotal(Number(total) + Number(sum));
    } else alert('Select amount greater than 0!');
  }
  return (
    <div className={styles.card}>
      <div className={styles.imagecontainer}>
        <img src={item.image} alt="" className={styles.img} />
      </div>
      <div className={styles.second}>
        <div className={styles.textcontainer}>
          <h3 className={styles.heading}>{item.title}</h3>
          <h3 className={styles.price}>💲{item.price}</h3>
        </div>
        <div>
          <input type="number" min="0" value={number} onChange={handleInput} />
          <button onClick={() => handleSubmit()}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
}
