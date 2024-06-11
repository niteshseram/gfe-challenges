import clsx from 'clsx';
import ProductCard from 'src/components/ProductCard';

const ProductGridSection = ({ products }) => {
  return (
    <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-8">
      {products.map(product => (
        <div
          key={product.product_id}
          className={clsx('col-span-4 md:col-span-3')}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductGridSection;
