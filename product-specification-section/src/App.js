import clsx from 'clsx';
import ProductSpecificationSection from 'src/components/ProductSpecificationSection';

function App() {
  return (
    <main className="min-h-screen p-4 max-w-[1440px] mx-auto">
      <div
        className={clsx(
          'rounded-md bg-white min-h-[calc(100vh_-_32px)]',
          'shadow-sm md:shadow-md lg:shadow-lg'
        )}>
        <ProductSpecificationSection />
      </div>
    </main>
  );
}

export default App;
