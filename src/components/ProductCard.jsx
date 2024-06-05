import styles from './ProductCard.module.css';

export default function ProductCard({ item }) {
  return (
    <div className={styles.card}>
      <img src={item.image} alt="" className={styles.img} />
      <h3>{item.title}</h3>
      <input type="number" />
      <button>Add To Cart</button>
    </div>
  );
}
