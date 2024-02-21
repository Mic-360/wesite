import type { NextComponentType, NextPageContext } from 'next';
import Image from 'next/image';

interface Props {}

const Page: NextComponentType<NextPageContext, {}, Props> = (props: Props) => {
  return (
    <div className='h-screen'>
      <div className='absolute z-10 backdrop-blur-xs w-screen h-screen grid place-content-center'>
        <h1 className='text-3xl md:text-6xl lg:text-9xl font-bold text-red-500 uppercase backdrop-blur-md w-screen text-center'>
          Coming Soon
        </h1>
      </div>
      <Image
        src='/prodcutImage.jpg'
        width={5000}
        height={5000}
        alt='banner'
        className='blur-md h-full mt-28 md:mt-44 lg:mt-56'
      />
    </div>
  );
};

export default Page;
