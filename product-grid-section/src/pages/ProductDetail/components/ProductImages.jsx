import { useState } from 'react';
import clsx from 'clsx';

import { useProductDetailsContext } from './ProductDetailsContext';

const ProductImages = () => {
  const { product, selectedColor, getSelectedColorImages } =
    useProductDetailsContext();
  const [selectedPreview, setSelectedPreview] = useState(0);

  const images = getSelectedColorImages({ product, color: selectedColor });

  return (
    <div className="flex flex-col gap-6">
      <img
        src={product.images[selectedPreview].image_url}
        alt="Selected preview"
        loading="lazy"
        className="h-[400px] md:h-[800px] w-full object-cover rounded-lg"
      />
      <div className="flex gap-4 overflow-x-auto">
        {images.map((image, index) => (
          <img
            key={image.image_url + index}
            src={image.image_url}
            alt={`Preview ${index + 1}`}
            loading="lazy"
            onClick={() => setSelectedPreview(index)}
            className={clsx(
              'rounded-lg shrink-0 block',
              'w-20 h-[120px] md:h-[190px] md:w-[188px] lg:w-40 object-cover',
              'cursor-pointer',
              index === selectedPreview && 'border-[3px] border-indigo-600'
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
