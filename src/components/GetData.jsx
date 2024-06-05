import { useEffect } from 'react';

export default function GetData({ setResults }) {
  useEffect(() => {
    async function fetchAll() {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        setResults(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    }

    fetchAll();
  }, []);

  return;
}
