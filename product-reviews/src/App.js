import { useState } from 'react';
import './App.css';
import clsx from 'clsx';

import Modal from 'src/components/Modal';
import Reviews from 'src/components/Reviews';
import ProductReviewsContextProvider from 'src/components/Reviews/ProductReviewsContext';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="min-h-screen p-4 max-w-[1440px] mx-auto">
      <div
        className={clsx(
          'rounded-md bg-white min-h-[calc(100vh_-_32px)]',
          'shadow-sm md:shadow-md lg:shadow-lg'
        )}>
        <button
          onClick={openModal}
          className="bg-blue-500 text-white p-2 rounded">
          Open Modal
        </button>

        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <ProductReviewsContextProvider>
            <Reviews />
          </ProductReviewsContextProvider>
        </Modal>
      </div>
    </main>
  );
}

export default App;
