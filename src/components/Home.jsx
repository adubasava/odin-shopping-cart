import styles from './Home.module.css';
import Nav from './Nav';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className={styles.home}>
      <Nav status="hide" />
      <img src="src/components/store.jpg" alt="" />
      <Link to="/shop">
        <button className={styles.btn}>
          <div className={styles.btntext}>
            <div className={styles.txt}>Shop now </div>
            <div className={styles.image}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="32px"
              >
                <title>chevron-right</title>
                <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
              </svg>
            </div>
          </div>
        </button>
      </Link>
    </div>
  );
}
