import ProductCard from './ProductCard';

export default function ProductList({ results }) {
  return (
    <>
      {' '}
      {results.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </>
  );
}
