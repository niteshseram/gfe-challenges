import clsx from 'clsx';

import Filter from './components/Filter';
import ProductListingContextProvider from './components/ProductListingContext';
import ProductListingSection from './components/ProductListingSection';
import SortByFilter from './components/SortByFilter';

const ProductListingPage = () => {
  return (
    <main className="min-h-screen p-4 max-w-[1440px] mx-auto">
      <div
        className={clsx(
          'rounded-md bg-white min-h-[calc(100vh_-_32px)]',
          'shadow-sm md:shadow-md lg:shadow-lg'
        )}>
        <ProductListingContextProvider>
          <div
            className={clsx(
              'w-full',
              'px-4 py-12 md:py-16 lg:p-24',
              'grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-8'
            )}>
            <div
              className={clsx(
                'col-span-4 md:col-span-6 lg:col-span-3 lg:pt-4 lg:pr-12',
                'flex justify-between'
              )}>
              <Filter />
              <div className="block lg:hidden">
                <SortByFilter />
              </div>
            </div>

            <div
              className={clsx(
                'col-span-4 md:col-span-6  lg:col-span-9',
                'flex flex-col items-end gap-8'
              )}>
              <div className="hidden lg:block">
                <SortByFilter />
              </div>

              <div
                className={clsx(
                  'w-full h-full',
                  'grid grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-8'
                )}>
                <ProductListingSection />
              </div>
            </div>
          </div>
        </ProductListingContextProvider>
      </div>
    </main>
  );
};

export default ProductListingPage;
