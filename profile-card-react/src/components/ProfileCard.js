import clsx from 'clsx';
import React from 'react';
import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiInstagramFill,
  RiTwitterXFill,
} from '@remixicon/react';

const socials = [
  {
    icon: RiGithubFill,
    url: 'https://github.com',
    name: 'Link to Github profile',
  },
  {
    icon: RiLinkedinBoxFill,
    url: 'https://linkedin.com',
    name: 'Link to Linkedin profile',
  },
  {
    icon: RiInstagramFill,
    url: 'https://instagram.com',
    name: 'Link to Instagram profile',
  },
  {
    icon: RiTwitterXFill,
    url: 'https://twitter.com',
    name: 'Link to Twitter profile',
  },
];

const ProfileCard = () => {
  return (
    <div
      className={clsx(
        'bg-white w-[340px] px-[15px] py-[23px]',
        'flex flex-col items-center gap-10',
        'border border-neutral-200 rounded-lg shadow'
      )}>
      <div className="flex flex-col items-center gap-6">
        <img src="./profile.png" alt="Sarah Dole's profile" className="w-16" />
        <div
          className={clsx('flex flex-col items-center gap-[3px]', 'mt-[1px]')}>
          <div className="font-medium text-xl text-neutral-900">Sarah Dole</div>
          <div className="text-sm text-neutral-600 text-center">
            Front End Engineer @ Microsoft
          </div>
        </div>
        <p class="text-center text-neutral-600">
          I turn coffee into bugs which are fixed by someone else. Certified
          Stack Overflow and ChatGPT developer.
        </p>
      </div>
      <div className="flex flex-col gap-6 w-full items-center">
        <button
          className={clsx(
            'rounded shadow bg-indigo-700',
            'text-white font-medium cursor-pointer',
            'h-11 px-3.5 w-full',
            'hover:bg-indigo-800 focus:bg-indigo-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-600/[.12]',
            'disabled:pointer-events-none disabled:shadow-none disabled:bg-neutral-100 disabled:text-neutral-400'
          )}>
          Contact me
        </button>

        <div className="flex space-x-4">
          {socials.map(({ icon: Icon, url, name }) => (
            <a
              key={url}
              href={url}
              aria-label={name}
              target="_blank"
              rel="noreferrer"
              tabIndex={0}
              className={clsx(
                'cursor-pointer p-2 rounded',
                'hover:bg-neutral-50 focus:bg-neutral-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-600/[.12]'
              )}>
              <Icon className="fill-indigo-700" size={20} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
