import styles from './ProductCard.module.css';

export default function ProductCard({ item }) {
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
          <input type="number" placeholder="0" />
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
}
