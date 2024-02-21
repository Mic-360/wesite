'use client';

import type { NextComponentType, NextPageContext } from 'next';
import Image from 'next/image';

interface Props {
  children: React.ReactNode;
}

const Error: NextComponentType<NextPageContext, {}, Props> = (props: Props) => {
  return (
    <div>
      <div className='h-screen w-screen bg-plume flex flex-col justify-center items-center gap-y-8'>
        <Image
          src='/logo-no-bg.png'
          alt='logo'
          width={200}
          height={200}
          className='rotate-12'
        />
        <h2 className='font-archivo uppercase font-bold text-xl md:text-2xl lg:text-4xl'>
          OOPS!🤔 Something Went Wrong ...
        </h2>
        {props.children}
      </div>
    </div>
  );
};

export default Error;
