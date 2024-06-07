import ProductCard from 'src/components/ProductCard';
import { useProductListingContext } from './ProductListingContext';
import clsx from 'clsx';

const ProductListingSection = () => {
  const { products, isProductsLoading } = useProductListingContext();

  if (isProductsLoading) {
    return <div>Loading...</div>;
  }

  return products.map(product => (
    <div key={product.product_id} className={clsx('col-span-4 md:col-span-3')}>
      <ProductCard product={product} />
    </div>
  ));
};

export default ProductListingSection;
