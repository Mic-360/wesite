import FormData from '@/components/elements/FormData';
import type { NextPage } from 'next';

const Page: NextPage = () => {
  return (
    <main className='min-w-screen bg-white text-black'>
      <div className='max-w-[40rem] h-screen pt-36 flex flex-col gap-y-10 justify-center pl-14'>
        <h1 className='text-6xl sm:text-8xl font-medium'>
          Get in touch with us
        </h1>
        <a
          href='mailto:info@twinverse.in'
          className='hover:underline underline-offset-4 decoration-neon text-4xl sm:text-6xl -mt-4 font-medium cursor-pointer'
        >
          info@twinverse.in
        </a>
      </div>
      <div className='w-screen h-80'>
        <FormData />
      </div>
    </main>
  );
};

export default Page;
