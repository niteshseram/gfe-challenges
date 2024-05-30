import clsx from 'clsx';
import { useMediaQuery } from 'usehooks-ts';
import { useMemo } from 'react';

import Badge from 'src/components/Badge';
import Button from 'src/components/Button';
import StarRating from 'src/components/StartRating';
import AvailableColors from './AvailableColors';
import AvailableSizes from './AvailableSizes';
import ProductQuantity from './ProductQuantity';
import InfoSection from './InfoSection';

import { useProductDetailsContext } from './ProductDetailsContext';

const ProductMetadata = () => {
  const isMobileAndBelow = useMediaQuery('(max-width: 767px)');
  const { product, getInventoryData, itemQuantity } =
    useProductDetailsContext();

  const { name, description, reviews, rating } = product;
  const inventoryData = useMemo(() => getInventoryData(), [getInventoryData]);
  const { discount_percentage, list_price, sale_price, stock } = inventoryData;
  const isRatingFloat = Number(rating) === rating && rating % 1 !== 0;
  const roundedRating = isRatingFloat ? parseFloat(rating.toFixed(1)) : rating;

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
                ${sale_price}
              </span>
              {!!list_price && (
                <span className="text-lg font-medium text-neutral-400 line-through">
                  ${list_price}
                </span>
              )}
            </div>
          </div>
          {!!discount_percentage && (
            <div className="mt-2">
              <Badge
                label={`${discount_percentage}% OFF`}
                size="lg"
                variant="warning"
              />
            </div>
          )}
          <div className={clsx('flex items-center gap-2 flex-wrap', 'mt-3')}>
            <div className="text-xl text-neutral-900">{roundedRating ?? 0}</div>
            <StarRating value={roundedRating ?? 0} />
            {reviews > 0 ? (
              <Button
                label={`See all ${reviews} reviews`}
                href="#"
                variant="primary"
                className="text-sm"
              />
            ) : (
              <div className="flex gap-[2px]">
                <span className="text-sm text-neutral-900">
                  No reviews yet.
                </span>
                <Button
                  label="Be the first."
                  href="#"
                  variant="primary"
                  className="text-sm"
                />
              </div>
            )}
          </div>
        </div>
        <p className="text-neutral-600">{description}</p>
      </section>
      <section aria-labelledby="product-options" className="mt-8">
        <form className="flex flex-col gap-8">
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
