import styles from './Cart.module.css';

export default function Cart({ amount, total }) {
  return (
    <>
      <span>{amount}</span>
      <span>$ {total.toFixed(2)}</span>
      <button className={styles.checkoutbtn}>Checkout</button>
    </>
  );
}
