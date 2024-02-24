import type { NextComponentType, NextPageContext } from 'next';
import Link from 'next/link';

interface Props {}

const Footer: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  return (
    <footer id='footer' className='relative bottom-0 h-full w-screen flex flex-col sm:flex-row bg-plume text-white font-normal items-center py-4'>
      <div className='w-full pl-6 xl:pl-24 justify-start text-lg flex'>
        <h3>Twinverse Technologies © 2023</h3>
      </div>
      <div className='w-full flex gap-x-4 justify-evenly items-center uppercase text-sm font-medium px-4'>
        <div className='h-32 flex flex-col gap-y-2 justify-center'>
          <Link
            className='hover:underline underline-offset-4 decoration-neon'
            href=''
          >
            instagram
          </Link>
          <Link
            className='hover:underline underline-offset-4 decoration-neon'
            href=''
          >
            discord
          </Link>
        </div>
        <div className='h-32 flex flex-col gap-y-2 justify-center'>
          <Link
            className='hover:underline underline-offset-4 decoration-neon'
            href=''
          >
            work
          </Link>
          <Link
            className='hover:underline underline-offset-4 decoration-neon'
            href=''
          >
            team
          </Link>
        </div>
        <div className='h-32 flex flex-col gap-y-2 justify-center'>
          <Link
            className='hover:underline underline-offset-4 decoration-neon'
            href=''
          >
            blog
          </Link>
          <Link
            className='hover:underline underline-offset-4 decoration-neon'
            href=''
          >
            contact
          </Link>
        </div>
        <div className='h-32 flex flex-col gap-y-2 justify-center'>
          <Link
            className='hover:underline underline-offset-4 decoration-neon'
            href=''
          >
            privacy policy
          </Link>
          <Link
            className='hover:underline underline-offset-4 decoration-neon'
            href=''
          >
            t & c
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
