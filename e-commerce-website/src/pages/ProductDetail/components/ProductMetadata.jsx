import { useMemo } from 'react';
import clsx from 'clsx';
import { useMediaQuery } from 'usehooks-ts';

import Badge from 'src/components/ui/Badge';
import Button from 'src/components/ui/Button';
import AvailableColors from './AvailableColors';
import AvailableSizes from './AvailableSizes';
import ProductQuantity from './ProductQuantity';
import InfoSection from './InfoSection';

import { useProductDetailsContext } from './ProductDetailsContext';
import { useCartContext } from 'src/context/CartContext';
import { getInventoryData } from '../utils';
import ProductReviews from './ProductReviews';

const ProductMetadata = () => {
  const isMobileAndBelow = useMediaQuery('(max-width: 767px)');
  const { product, selectedColor, selectedSize, itemQuantity } =
    useProductDetailsContext();
  const { addToCart } = useCartContext();

  const { name, description, reviews, rating } = product;

  const inventoryData = useMemo(
    () =>
      getInventoryData({ product, color: selectedColor, size: selectedSize }),
    [selectedColor, selectedSize, product]
  );
  const { discount_percentage, list_price, sale_price, stock } = inventoryData;

  const roundedRating = Math.round(rating * 10) / 10;
  const hasDiscount = !!discount_percentage;

  const onAddToCart = e => {
    e.preventDefault();

    const item = {
      id: product.product_id,
      quantity: itemQuantity,
      color: selectedColor,
      size: selectedSize,
    };
    addToCart(item);
  };

  return (
    <div>
      <section
        className={clsx('flex flex-col gap-8')}
        aria-labelledby="information-heading">
        <div className="flex flex-col items-start">
          <h1 className="text-3xl md:text-5xl font-semibold">{name}</h1>
          <div className="mt-5">
            <div className="inline-flex gap-2 items-end">
              <span className="text-3xl font-medium text-neutral-600">
                ${hasDiscount ? sale_price : list_price}
              </span>
              {hasDiscount && (
                <span className="text-lg font-medium text-neutral-400 line-through">
                  ${list_price}
                </span>
              )}
            </div>
          </div>
          {hasDiscount && (
            <div className="mt-2">
              <Badge
                label={`${discount_percentage}% OFF`}
                size="lg"
                variant="warning"
              />
            </div>
          )}

          <ProductReviews rating={roundedRating} reviews={reviews} />
        </div>

        <p className="text-neutral-600">{description}</p>
      </section>

      <section aria-labelledby="product-options" className="mt-8">
        <form className="flex flex-col gap-8" onSubmit={onAddToCart}>
          <AvailableColors />
          <AvailableSizes />
          <ProductQuantity availableStock={stock} />

          {/* Out of stock message */}
          {stock === 0 && (
            <div className="text-xl font-semibold text-neutral-900">
              Sorry, this item is out of stock
            </div>
          )}

          <Button
            label="Add to Cart"
            size={isMobileAndBelow ? 'xl' : '2xl'}
            isDisabled={itemQuantity === 0 || stock === 0}
          />
        </form>
      </section>

      <InfoSection />
    </div>
  );
};

export default ProductMetadata;
