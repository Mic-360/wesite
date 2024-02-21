import type { NextComponentType, NextPageContext } from 'next';

interface Props {}

const Page: NextComponentType<NextPageContext, {}, Props> = (props: Props) => {
  return (
    <div className='h-screen bg-white'>
      <div className='backdrop-blur-xs w-screen h-screen grid place-content-center'>
        <h1 className='text-3xl md:text-6xl lg:text-9xl font-bold text-red-500 uppercase backdrop-blur-md w-screen text-center mt-10 bg-black'>
          Coming Soon
        </h1>
      </div>
    </div>
  );
};

export default Page;
