import clsx from 'clsx';
import {
  RiFacebookBoxLine,
  RiGithubLine,
  RiInstagramLine,
  RiTwitterXLine,
  RiYoutubeLine,
} from 'react-icons/ri';

import Link from '../ui/Link';
import NewsletterForm from './NewsletterForm';
import { CATEGORY_OPTIONS, COLLECTIONS_OPTIONS } from 'src/constants';

const footerSocials = [
  {
    icon: RiYoutubeLine,
    url: 'https://youtube.com',
    name: "Link to Stylenest's youtube profile",
  },
  {
    icon: RiInstagramLine,
    url: 'https://instagram.com',
    name: "Link to Stylenest's instagram profile",
  },
  {
    icon: RiFacebookBoxLine,
    url: 'https://facebook.com',
    name: "Link to Stylenest's facebook profile",
  },
  {
    icon: RiGithubLine,
    url: 'https://github.com',
    name: "Link to Stylenest's github profile",
  },
  {
    icon: RiTwitterXLine,
    url: 'https://twitter.com',
    name: "Link to Stylenest's twitter profile",
  },
];

const Footer = () => {
  return (
    <footer
      className={clsx(
        '',
        'flex flex-col gap-12 md:gap-16',
        'px-4 py-12 md:py-16 lg:p-24'
      )}>
      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-x-4 md:gap-x-8 lg:gap-y-[66px]">
        <div
          className={clsx(
            'flex flex-col gap-2',
            'col-span-4 md:col-span-6 lg:col-span-8'
          )}>
          <div className="text-xl font-semibold text-neutral-900">
            Join our newsletter
          </div>
          <div className="text-neutral-600">
            We’ll send you a nice letter once per week. No spam.
          </div>
        </div>

        <div className="col-span-4 md:col-span-6 lg:col-span-4 mt-8 md:mt-5 lg:mt-0">
          <NewsletterForm />
        </div>

        <div
          className={clsx(
            'flex flex-col gap-6 md:gap-8',
            'col-span-4 md:col-span-3 lg:col-span-4 mt-12 md:mt-16 lg:mt-0'
          )}>
          <div>
            <img
              src="/stylenest.svg"
              alt="Stylenest's Logo"
              className="h-8 w-auto block"
            />
          </div>
          <div className="text-neutral-600">
            Craft stunning style journeys that weave more joy into every thread.
          </div>
        </div>

        <div className="hidden md:block lg:hidden col-span-3" />

        <div
          className={clsx(
            'flex flex-col gap-4',
            'col-span-4 md:col-span-3 lg:col-start-7 mt-8 md:mt-12 lg:mt-0'
          )}>
          <div className="text-sm text-neutral-500">SHOP CATEGORIES</div>
          <div className="flex flex-col gap-3">
            {CATEGORY_OPTIONS.items.map(category => (
              <Link to={category.href} key={category.name} variant="gray">
                {category.name}
              </Link>
            ))}
          </div>
        </div>

        <div
          className={clsx(
            'flex flex-col gap-4',
            'col-span-4 md:col-span-3 mt-8 md:mt-12 lg:mt-0'
          )}>
          <div className="text-sm text-neutral-500">SHOP COLLECTIONS</div>
          <div className="flex flex-col gap-3">
            {COLLECTIONS_OPTIONS.items.map(collection => (
              <Link to={collection.href} key={collection.name} variant="gray">
                {collection.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div
        className={clsx(
          'flex gap-8 md:items-center flex-col md:flex-row lg:justify-between',
          'pt-[31px] border-t border-neutral-200'
        )}>
        <div className="text-neutral-500">
          &copy; {new Date().getFullYear()} StyleNest, Inc. All rights reserved.
        </div>
        <div className="flex gap-6">
          {footerSocials.map(({ icon: Icon, url, name }) => (
            <Link
              key={name}
              to={url}
              target="_blank"
              rel="noopener noreferrer"
              className="!px-0 !text-neutral-400">
              <Icon className="size-6" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
