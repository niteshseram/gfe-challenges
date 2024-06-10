import { useMemo } from 'react';

import ColorSwatches from 'src/components/ColorSwatches';
import { useProductDetailsContext } from './ProductDetailsContext';
import { COLORS } from 'src/constants';

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
            color={COLORS[color].value}
            outOfStock={unavailableColors.includes(color)}
            selected={selectedColor === color}
            onClick={() => setSelectedColor(color)}
          />
        ))}
      </div>
    </fieldset>
  );
};

export default AvailableColors;
