import clsx from 'clsx';
import { Link as RouterLink } from 'react-router-dom';

const Link = ({ children, disabled, className, ...props }) => {
  return (
    <RouterLink
      {...props}
      className={clsx(
        'text-neutral-600 font-medium px-0.5 rounded',
        'hover:text-neutral-900 focus:text-neutral-900 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-600/[.12]',
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
