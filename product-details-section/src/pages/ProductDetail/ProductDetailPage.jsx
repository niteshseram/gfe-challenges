import clsx from 'clsx';

import ProductDetailsContextProvider from './components/ProductDetailsContext';
import ProductDetail from './components/ProductDetail';

const ProductDetailPage = () => {
  return (
    <main className="min-h-screen p-4">
      <div
        className={clsx(
          'rounded-md bg-white min-h-[calc(100vh_-_32px)]',
          'shadow-sm md:shadow-md lg:shadow-lg'
        )}>
        <div
          className={clsx(
            'w-full',
            'px-4 py-12 md:py-16 lg:p-24',
            'flex flex-col lg:flex-row gap-12 lg:gap-8'
          )}>
          <ProductDetailsContextProvider>
            <ProductDetail />
          </ProductDetailsContextProvider>
        </div>
      </div>
    </main>
  );
};

export default ProductDetailPage;
