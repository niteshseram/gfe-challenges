import { useState } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';
import { RiCloseLine, RiMenuLine } from 'react-icons/ri';

import Link from '../Link';

const MobileNavMenu = ({ links }) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpenMenu(!openMenu)}
        aria-label="Open mobile menu"
        aria-expanded={openMenu ? 'true' : 'false'}
        aria-controls="slideout-menu"
        type="button"
        className={clsx(
          'text-neutral-600 rounded block lg:hidden',
          'focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-600/[.12]'
        )}>
        <RiMenuLine className="size-5" aria-hidden="true" />
      </button>

      {/* Mobile nav menu */}
      {openMenu &&
        createPortal(
          <nav
            id="slideout-menu"
            className={clsx(
              'fixed inset-0 px-4 py-6 z-fixed bg-white max-w-[400px] lg:hidden',
              'flex flex-col gap-6',
              'animate-navbar-menu'
            )}>
            <div className="flex items-center justify-between">
              <img src="./img/stylenest.svg" alt="Logo" />
              <button
                onClick={() => setOpenMenu(false)}
                aria-label="Close mobile menu"
                type="button"
                className={clsx(
                  'text-neutral-600 rounded',
                  'focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-600/[.12]'
                )}>
                <RiCloseLine className="size-5" />
              </button>
            </div>
            <div className="flex flex-col gap-2">
              {links.map(link => (
                <Link to={link.href} className="py-2 px-3 text-sm">
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>,
          document.body
        )}
    </>
  );
};

export default MobileNavMenu;
