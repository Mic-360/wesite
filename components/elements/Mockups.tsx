import type { NextComponentType, NextPageContext } from 'next';
import Image from 'next/image';
import { forwardRef } from 'react';

interface Props {}

const Mockups: NextComponentType<NextPageContext, {}, Props> = forwardRef<
  HTMLVideoElement,
  Props
>((props, ref) => {
  return (
    <div className='blur-sm'>
      <div className='relative mx-auto border-black dark:border-black bg-black border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl'>
        <div className='w-[98px] h-[30px] bg-black top-[0.5rem] rounded-[1rem] left-1/2 -translate-x-1/2 absolute'>
          <div className='w-full h-full flex items-center justify-end pr-1'>
            <Image
              src='/lens.svg'
              alt='lens'
              width={20}
              height={20}
              className='blur-[0.05rem]'
            />
          </div>
        </div>
        <div className='w-[88px] h-[3px] bg-gray-900 bottom-[0.5rem] rounded-[1rem] left-1/2 -translate-x-1/2 absolute'></div>
        <div className='h-[26px] w-[3px] bg-black absolute -left-[17px] top-[74px] rounded-l-lg'></div>
        <div className='h-[46px] w-[3px] bg-black absolute -left-[17px] top-[124px] rounded-l-lg'></div>
        <div className='h-[46px] w-[3px] bg-black absolute -left-[17px] top-[178px] rounded-l-lg'></div>
        <div className='h-[64px] w-[3px] bg-black absolute -right-[17px] top-[142px] rounded-r-lg'></div>
        <div className='rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-black'>
          <video
            ref={ref}
            className='object-cover w-full h-full'
            preload='auto'
            poster='/soon.png'
            loop
            autoPlay
            muted
          >
            <source
              src='/playerVideo.mp4'
              type='video/mp4'
            />
          </video>
        </div>
      </div>
    </div>
  );
});

Mockups.displayName = 'iphone14';

export default Mockups;

interface Props {
  source: string;
}

export const TinyMockup: NextComponentType<NextPageContext, {}, Props> =
  forwardRef<HTMLVideoElement, Props>((props, ref) => {
    return (
      <>
        <div className='relative mx-auto border-gray-300 dark:border-black bg-gray-300 dark:bg-black border-[7px] rounded-[1.5rem] h-[300px] w-[150px]'>
          <div className='w-[38px] h-[14px] bg-black top-[0.25rem] rounded-[1rem] left-1/2 -translate-x-1/2 absolute'>
            <div className='w-full h-full flex items-center justify-end pr-1'>
              <Image
                src='/lens.svg'
                alt='lens'
                width={10}
                height={10}
              />
            </div>
          </div>
          <div className='w-[38px] h-[2px] bg-gray-400 bottom-[0.25rem] rounded-[1rem] left-1/2 -translate-x-1/2 absolute'></div>

          <div className='h-[13px] w-[1.5px] bg-gray-300 dark:bg-black absolute -left-[8.5px] top-[32px] rounded-l-lg'></div>
          <div className='h-[23px] w-[1.5px] bg-gray-300 dark:bg-black absolute -left-[8.5px] top-[62px] rounded-l-lg'></div>
          <div className='h-[23px] w-[1.5px] bg-gray-300 dark:bg-black absolute -left-[8.5px] top-[89px] rounded-l-lg'></div>
          <div className='h-[32px] w-[1.5px] bg-gray-300 dark:bg-black absolute -right-[8.5px] top-[71px] rounded-r-lg'></div>
          <div className='rounded-2xl overflow-hidden w-[136px] h-[286px] bg-white dark:bg-black'>
            <video
              ref={ref}
              className='object-cover w-full h-full'
              preload='metadata'
              poster={props.source}
            >
              <source
                src='/playerVideo.mp4'
                type='video/mp4'
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </>
    );
  });

TinyMockup.displayName = 'tiny';
