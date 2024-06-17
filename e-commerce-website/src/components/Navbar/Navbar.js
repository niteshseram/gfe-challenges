import clsx from 'clsx';

import Link from 'src/components/ui/Link';
import CartButton from 'src/components/CartButton';
import MobileNavMenu from 'src/components/Navbar/MobileNavMenu';

const links = [
  {
    name: 'Shop all',
    href: '/products',
  },
  {
    name: 'Latest arrivals',
    href: '/latest',
  },
];

const Navbar = ({ className }) => {
  return (
    <div
      className={clsx(
        'z-sticky sticky top-0',
        'max-w-[1216px] mx-auto',
        'h-[68px] lg:h-14',
        'py-3 px-4 md:px-8 xl:px-0',
        'flex justify-between gap-4 lg:gap-[103px] items-center',
        className
      )}>
      <Link variant="unstyled" to="/">
        <img src="/stylenest.svg" alt="Stylenest's Logo" />
      </Link>
      <nav className={clsx('hidden flex-1 gap-8', 'lg:flex')}>
        {links.map(link => (
          <Link key={link.href} to={link.href} variant="gray" type="nav" end>
            {link.name}
          </Link>
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
