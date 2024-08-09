import clsx from 'clsx';
import { useState } from 'react';
import {
  RiColorFilterLine,
  RiHandHeartLine,
  RiInfinityFill,
  RiPaintLine,
  RiPlantLine,
  RiPriceTag2Line,
  RiRainbowLine,
  RiRecycleLine,
  RiScales2Line,
  RiShapesLine,
  RiShieldStarLine,
  RiShirtLine,
  RiStackLine,
  RiTShirtLine,
  RiWaterFlashLine,
  RiWindyLine,
} from 'react-icons/ri';

import Tabs from '../ui/Tabs';

const TABS = [
  { label: 'Sustainability', value: 'sustainability' },
  { label: 'Comfort', value: 'comfort' },
  { label: 'Durability', value: 'durability' },
  { label: 'Versatility', value: 'versatility' },
];

const specifications = [
  {
    value: 'sustainability',
    title: 'Eco-Friendly Choice',
    description:
      'With our sustainable approach, we curate clothing that makes a statement of care—care for the planet, and for the art of fashion.',
    img: {
      desktop: 'img/yellow-desktop.jpg',
      tablet: 'img/yellow-tablet.jpg',
      mobile: 'img/yellow-mobile.jpg',
    },
    items: [
      {
        label: 'Recycled Materials',
        icon: RiRecycleLine,
      },
      {
        label: 'Low Impact Dye',
        icon: RiPaintLine,
      },
      {
        label: 'Carbon Neutral',
        icon: RiPlantLine,
      },
      {
        label: 'Water Conservation',
        icon: RiWaterFlashLine,
      },
    ],
  },
  {
    value: 'comfort',
    title: 'Uncompromised Comfort',
    description:
      'Our garments are a sanctuary of softness, tailored to drape gracefully and allow for freedom of movement.',
    img: {
      desktop: 'img/black-desktop.jpg',
      tablet: 'img/black-tablet.jpg',
      mobile: 'img/black-mobile.jpg',
    },
    items: [
      {
        label: 'Ergonomic Fits',
        icon: RiTShirtLine,
      },
      {
        label: 'Soft-to-the-Touch Fabrics',
        icon: RiHandHeartLine,
      },
      {
        label: 'Breathable Weaves',
        icon: RiWindyLine,
      },
      {
        label: 'Thoughtful Design',
        icon: RiColorFilterLine,
      },
    ],
  },
  {
    value: 'durability',
    title: 'Built to Last',
    description:
      'Here’s to apparel that you can trust to look as good as new, wear after wear, year after year.',
    img: {
      desktop: 'img/chair-desktop.jpg',
      tablet: 'img/chair-tablet.jpg',
      mobile: 'img/chair-mobile.jpg',
    },
    items: [
      {
        label: 'Reinforced Construction',
        icon: RiStackLine,
      },
      {
        label: 'Quality Control',
        icon: RiScales2Line,
      },
      {
        label: 'Material Resilience',
        icon: RiShieldStarLine,
      },
      {
        label: 'Warranty and Repair',
        icon: RiPriceTag2Line,
      },
    ],
  },
  {
    value: 'versatility',
    title: 'Versatile by Design',
    description:
      'Our pieces are a celebration of versatility, offering a range of styles that are as perfect for a business meeting as they are for a casual brunch. ',
    img: {
      desktop: 'img/clothes-desktop.jpg',
      tablet: 'img/clothes-tablet.jpg',
      mobile: 'img/clothes-mobile.jpg',
    },
    items: [
      {
        label: 'Adaptive Styles',
        icon: RiRainbowLine,
      },
      {
        label: 'Functional Fashion',
        icon: RiShirtLine,
      },
      {
        label: 'Timeless Aesthetics',
        icon: RiInfinityFill,
      },
      {
        label: 'Mix-and-Match Potential',
        icon: RiShapesLine,
      },
    ],
  },
];

const ProductSpecificationSection = () => {
  const [selectedSpecification, setSelectedSpecification] =
    useState('sustainability');

  const data = specifications.find(
    specification => specification.value === selectedSpecification
  );

  return (
    <div
      className={clsx(
        'px-4 py-12 md:py-16 lg:px-28 lg:py-24',
        'flex flex-col gap-16'
      )}>
      <div className="flex flex-col gap-6">
        <h2 className="font-semibold text-3xl md:text-5xl text-neutral-900">
          Discover timeless elegance
        </h2>
        <p className="text-lg text-neutral-600">
          Step into a world where quality meets quintessential charm with our
          collection. Every thread weaves a promise of unparalleled quality,
          ensuring that each garment is not just a part of your wardrobe, but a
          piece of art. Here's the essence of what makes our apparel the
          hallmark for those with an eye for excellence and a heart for the
          environment.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        <Tabs
          label="Select specification"
          value={selectedSpecification}
          tabs={TABS}
          onSelect={setSelectedSpecification}
        />
        <div className="flex flex-col lg:flex-row gap-8">
          <picture className="shrink-0">
            <source srcSet={data.img.desktop} media="(min-width: 1024px)" />
            <source srcSet={data.img.tablet} media="(min-width: 768px)" />
            <img
              loading="lazy"
              src={data.img.mobile}
              className={clsx(
                'h-[180px] md:h-96 lg:h-64',
                'w-full lg:w-[367px]',
                'rounded-lg object-cover'
              )}
              alt={`${selectedSpecification}'s banner`}
            />
          </picture>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h3 className="font-medium text-2xl text-neutral-900">
                {data.title}
              </h3>
              <p className="text-neutral-600">{data.description}</p>
            </div>
            <div
              className={clsx(
                'flex flex-wrap',
                'gap-4 md:gap-y-8 md:gap-x-12 lg:gap-8',
                'pb-1 md:pb-0'
              )}>
              {data.items.map(({ label, icon: Icon }) => (
                <div
                  className="w-full md:w-80 lg:w-[282px] flex items-center gap-2 md:gap-4"
                  key={label}>
                  <div
                    className={clsx(
                      'size-12 bg-white rounded-full shadow',
                      'flex items-center justify-center',
                      'shrink-0'
                    )}>
                    <Icon className="size-6 text-indigo-700" />
                  </div>
                  <span className="text-neutral-600">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSpecificationSection;
