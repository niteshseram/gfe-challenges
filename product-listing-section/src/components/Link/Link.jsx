import clsx from 'clsx';
import { Link as RouterLink } from 'react-router-dom';

const linkVariantClasses = {
  primary: clsx(
    'text-indigo-700',
    'hover:text-indigo-800 focus:text-indigo-800'
  ),
  gray: clsx(
    'text-neutral-600',
    'hover:text-neutral-900 focus:text-neutral-900'
  ),
  unstyled: '',
};

const Link = ({
  children,
  disabled,
  className,
  variant = 'primary',
  ...props
}) => {
  return (
    <RouterLink
      {...props}
      className={clsx(
        'font-medium rounded',
        variant !== 'unstyled' && 'px-0.5',
        linkVariantClasses[variant],
        {
          'pointer-events-none text-neutral-400': disabled,
        },
        className
      )}>
      {children}
    </RouterLink>
  );
};

export default Link;
