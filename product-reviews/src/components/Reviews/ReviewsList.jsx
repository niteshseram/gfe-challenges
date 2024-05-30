import clsx from 'clsx';

import Avatar from '../Avatar';
import Rating from '../Rating';
import Button from '../Button';

import { useProductReviewsContext } from './ProductReviewsContext';

import { formatDate } from 'src/utils';

const ReviewsList = () => {
  const { reviews, pagination, loadMoreReviews, isFetchingMore } =
    useProductReviewsContext();
  const moreReviewsCount = pagination.total - reviews.length;

  return (
    <div className="flex flex-col gap-12 pb-6">
      <div className="flex flex-col gap-8">
        {reviews.map(review => (
          <div
            key={review.user.user_id + review.created_at}
            className={clsx('flex flex-col gap-4', 'text-neutral-600')}>
            <div className="flex items-center gap-4">
              <Avatar src={review.user.avatar_url} name={review.user.name} />
              <div className="flex flex-col gap-1 grow">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-base text-neutral-900">
                    {review.user.name}
                  </span>
                  <span className="text-xs">
                    {formatDate(new Date(review.created_at))}
                  </span>
                </div>
                <Rating value={review.rating} />
              </div>
            </div>
            <p>{review.content}</p>
          </div>
        ))}
      </div>
      {pagination.hasMore && (
        <Button
          label={`See ${moreReviewsCount} more reviews`}
          variant="secondary"
          size="lg"
          onClick={loadMoreReviews}
          isDisabled={isFetchingMore}
        />
      )}
    </div>
  );
};

export default ReviewsList;
