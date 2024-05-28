import { useMemo } from 'react';

import ColorSwatches from '../../../components/ColorSwatches/ColorSwatches';
import { useProductDetailsContext } from './ProductDetailsContext';

const AvailableColors = () => {
  const { selectedColor, setSelectedColor, product, getUnavailableColors } =
    useProductDetailsContext();
  const { colors } = product;
  const unavailableColors = useMemo(
    () => getUnavailableColors(product),
    [product, getUnavailableColors]
  );

  return (
    <fieldset aria-label="Choose a color">
      <legend className="text-sm text-neutral-500">Available Colors</legend>
      <div className="flex gap-4 flex-wrap mt-4">
        {colors.map(color => (
          <ColorSwatches
            key={color}
            color={color}
            outOfStock={unavailableColors.includes(color)}
            selectedColor={selectedColor}
            onClick={setSelectedColor}
          />
        ))}
      </div>
    </fieldset>
  );
};

export default AvailableColors;
