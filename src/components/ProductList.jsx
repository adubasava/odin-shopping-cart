import ProductCard from './ProductCard';

export default function ProductList({
  results,
  amount,
  setAmount,
  total,
  setTotal,
}) {
  return (
    <>
      {' '}
      {results.map((item) => (
        <ProductCard
          key={item.id}
          item={item}
          amount={amount}
          setAmount={setAmount}
          total={total}
          setTotal={setTotal}
        />
      ))}
    </>
  );
}
