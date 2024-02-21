'use client';

import type { NextComponentType, NextPageContext } from 'next';
import Image from 'next/image';
import { createRef } from 'react';
import Mockups from './Mockups';

interface Props {}

const Player: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  const ref = createRef<HTMLVideoElement>();

  return (
    <>
      {/* @ts-ignore */}
      <Mockups ref={ref} />
      <div className='flex gap-x-2 w-full items-center justify-center'>
        <button
          onClick={() => ref.current?.play()}
          className='flex gap-x-2 uppercase text-sm hover:bg-gray-500 hover:border-1 transition-all duration-500 ease-linear rounded-md p-2'
        >
          play
          <Image
            src='/play.svg'
            width={20}
            height={20}
            alt='play'
          />
        </button>
        <button
          onClick={() => ref.current?.pause()}
          className='flex gap-x-2 uppercase text-sm hover:bg-gray-500 hover:border-1 transition-all duration-500 ease-linear rounded-md p-2'
        >
          <Image
            src='/pause.svg'
            width={20}
            height={20}
            alt='pause'
          />
          pause
        </button>
      </div>
    </>
  );
};

export default Player;
