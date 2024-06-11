import clsx from 'clsx';

import ProductDetail from './components/ProductDetail';
import ProductDetailsContextProvider from './components/ProductDetailsContext';

const ProductDetailPage = () => {
  return (
    <main className="min-h-screen p-4 max-w-[1440px] mx-auto">
      <div
        className={clsx(
          'rounded-md bg-white min-h-[calc(100vh_-_32px)]',
          'shadow-sm md:shadow-md lg:shadow-lg'
        )}>
        <ProductDetailsContextProvider>
          <div
            className={clsx(
              'w-full',
              'px-4 py-12 md:py-16 lg:p-24',
              'grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-x-4 md:gap-x-8 gap-y-12'
            )}>
            <ProductDetail />
          </div>
        </ProductDetailsContextProvider>
      </div>
    </main>
  );
};

export default ProductDetailPage;
