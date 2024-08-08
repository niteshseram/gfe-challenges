import clsx from 'clsx';
import './App.css';

import Modal from 'src/components/ui/Modal';
import Reviews from 'src/components/Reviews';
import ProductReviewsContextProvider from 'src/components/Reviews/ProductReviewsContext';

function App() {
  const isModalOpen = true;

  return (
    <main className="min-h-screen p-4 max-w-[1440px] mx-auto">
      <div
        className={clsx(
          'rounded-md bg-white min-h-[calc(100vh_-_32px)]',
          'shadow-sm md:shadow-md lg:shadow-lg'
        )}>
        <Modal isOpen={isModalOpen} onClose={() => {}}>
          <ProductReviewsContextProvider>
            <Reviews />
          </ProductReviewsContextProvider>
        </Modal>
      </div>
    </main>
  );
}

export default App;
