import ProductImages from './ProductImages';
import ProductMetadata from './ProductMetadata';

import { useProductDetailsContext } from './ProductDetailsContext';

const ProductDetail = () => {
  const { isProductLoading, product } = useProductDetailsContext();

  if (isProductLoading || !product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="flex-1">
        <ProductImages />
      </div>
      <div className="flex-1">
        <ProductMetadata />
      </div>
    </>
  );
};

export default ProductDetail;
