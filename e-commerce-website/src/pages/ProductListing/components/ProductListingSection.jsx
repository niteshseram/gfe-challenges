import { RiTShirt2Line } from 'react-icons/ri';
import clsx from 'clsx';

import ProductCard from 'src/components/ProductCard';
import Button from 'src/components/ui/Button';
import IconWrapper from 'src/components/IconWrapper';

import { useProductListingContext } from './ProductListingContext';

const ProductListingSection = () => {
  const { products, isProductsLoading, filterCount, resetFilters } =
    useProductListingContext();

  if (isProductsLoading) {
    return (
      <div
        className={clsx(
          'col-span-4 md:col-span-6 lg:col-span-9',
          'flex justify-center'
        )}>
        Loading...
      </div>
    );
  }

  if (filterCount > 0 && products.length === 0) {
    return (
      <div
        className={clsx(
          'w-full h-full',
          'col-span-4 md:col-span-6 lg:col-span-9',
          'flex items-center justify-center flex-col gap-5'
        )}>
        <IconWrapper icon={RiTShirt2Line} />
        <div
          className={clsx(
            'flex flex-col items-center gap-2',
            'text-neutral-900 text-center'
          )}>
          <span className="font-medium text-xl">Nothing found just yet</span>
          <span>
            Adjust your filters a bit, and let's see what we can find!
          </span>
        </div>
        <Button label="Reset filters" size="lg" onClick={resetFilters} />
      </div>
    );
  }

  return products.map(product => (
    <div key={product.product_id} className={clsx('col-span-4 md:col-span-3')}>
      <ProductCard product={product} />
    </div>
  ));
};

export default ProductListingSection;
