import Members from '@/components/elements/Members';
import type { NextPage } from 'next';
import Link from 'next/link';

const Page: NextPage = () => {
  return (
    <main className='min-h-screen min-w-screen bg-white text-black'>
      <div className='h-auto w-full flex pt-32 md:pt-56 pb-10 items-center justify-center px-4'>
        <article className='text-justify md:text-center max-w-screen-md text-sm md:text-lg font-medium'>
          Every person you see on this post were strangers brought together
          under one roof by{' '}
          <Link
            href='#'
            className='underline-offset-2 underline font-semibold tracking-widest'
          >
            @makerkarkhana
          </Link>
          . As first year college dreamers, we met in{' '}
          <Link
            href='#'
            className='underline-offset-2 underline font-semibold tracking-widest'
          >
            Karkhana&apos;s
          </Link>{' '}
          Fab Lab program and quickly found each other. And this is actually
          where our story begins. We won competitions and spread the word about
          a new world coming.
        </article>
      </div>
      <div className='h-full w-full px-20 md:pb-10 flex justify-center'>
        <Members />
      </div>
    </main>
  );
};

export default Page;
