import clsx from 'clsx';

import Link from '../Link';
import CartButton from '../CartButton';
import MobileNavMenu from './MobileNavMenu';

const links = [
  {
    name: 'Shop all',
    href: '#',
  },
  {
    name: 'Latest Arrivals',
    href: '#',
  },
];

const Navbar = () => {
  return (
    <div
      className={clsx(
        'z-sticky sticky top-0 max-w-[1216px] mx-auto py-3 px-4 md:px-8 xl:px-0 h-[68px] lg:h-auto',
        'flex justify-between gap-4 lg:gap-20 items-center'
      )}>
      <div className="w-[163px]">
        <img src="./img/stylenest.svg" alt="Logo" />
      </div>
      <nav className={clsx('hidden flex-1 gap-8', 'lg:flex')}>
        {links.map(link => (
          <Link to={link.href}>{link.name}</Link>
        ))}
      </nav>
      <div className="flex items-center gap-4">
        <CartButton />
        <MobileNavMenu links={links} />
      </div>
    </div>
  );
};

export default Navbar;
