'use client';

import type { NextComponentType, NextPageContext } from 'next';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface Props {}

const Gallery: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  const [current, setCurrent] = useState(0);
  // const length = TileTitles.length;
  // const { title, description } = TileTitles[current];

  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 1000);
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <div className='flex items-end justify-end'>
      <div className='w-full flex flex-col justify-center'>
        <div className='rounded-xl overflow-hidden border-2 h-auto max-h-screen-md w-auto'>
          <Image
            src={`/Gallery/image${current + 1}.jpg`}
            alt='gallery'
            width={5000}
            height={2000}
            className={`object-cover ${isAnimating ? 'image-transition' : ''}`}
          />
        </div>
        {/* <div className='flex flex-col sm:flex-row py-4 items-center justify-around text-xl'>
          <h2 className='font-semibold uppercase tracking-normal drop-shadow-xl'>
            {title}
          </h2>
          <h2 className='uppercase font-normal tracking-widest drop-shadow-xl'>
            {description}
          </h2>
        </div> */}
      </div>
      <div className='flex justify-end flex-col pb-4'>
        <Image
          onClick={() => {
            if (current >= 38) {
              setCurrent(0);
            } else {
              setCurrent(current + 1);
            }
          }}
          src='/arrow.svg'
          alt='arrow'
          width={50}
          height={50}
          className='cursor-pointer'
        />
      </div>
    </div>
  );
};

export default Gallery;
