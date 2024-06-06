﻿import { Link } from 'react-router-dom';
import styles from './ErrorPage.module.css';

const ErrorPage = () => {
  return (
    <div className={styles.container}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>emoticon-confused-outline</title>
        <path d="M20 12A8 8 0 1 0 12 20A8 8 0 0 0 20 12M22 12A10 10 0 1 1 12 2A10 10 0 0 1 22 12M15.5 8A1.5 1.5 0 1 1 14 9.5A1.54 1.54 0 0 1 15.5 8M10 9.5A1.5 1.5 0 1 1 8.5 8A1.54 1.54 0 0 1 10 9.5M17 15H13A4 4 0 0 0 9.53 17L7.8 16A6 6 0 0 1 13 13H17Z" />
      </svg>
      <h1>Oops! This page does not exist!</h1>
      <div className="">
        <Link to="/" className={styles.links}>
          <button>Home</button>
        </Link>
        <Link to="/shop" className={styles.links}>
          <button>Shop</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
