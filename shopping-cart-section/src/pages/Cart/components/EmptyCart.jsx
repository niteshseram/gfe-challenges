import clsx from 'clsx';
import { RiArrowRightLine, RiShoppingCart2Line } from 'react-icons/ri';
import Button from 'src/components/ui/Button';

const EmptyCart = () => {
  return (
    <div
      className={clsx(
        'grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12',
        'gap-x-4 md:gap-x-8 gap-y-8'
      )}>
      <div
        className={clsx(
          'col-span-4 md:col-span-6 lg:col-span-5',
          'h-[372px] md:h-[400px] lg:h-full',
          'flex flex-col justify-center items-center gap-5'
        )}>
        <div
          className={clsx(
            'size-12 bg-white rounded-full shadow-custom',
            'flex items-center justify-center'
          )}>
          <RiShoppingCart2Line className="size-6 text-indigo-700" />
        </div>
        <div
          className={clsx('flex flex-col items-center gap-2', 'text-center')}>
          <span className="font-medium text-xl">Your cart is empty</span>
          <span>Let's go explore some products</span>
        </div>
        <Button
          size="xl"
          label="Explore products"
          endIcon={RiArrowRightLine}
          href="/products"
        />
      </div>
      <img
        src="/img/empty-cart.png"
        alt="Empty cart"
        className={clsx(
          'object-cover w-full',
          'h-[180px] md:h-80 lg:h-full',
          'col-span-4 md:col-span-6 lg:col-span-7'
        )}
      />
    </div>
  );
};

export default EmptyCart;
