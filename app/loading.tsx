'use client';

import type { NextComponentType, NextPageContext } from 'next';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Progress } from '@/components/ui/progress';

interface Props {}

const Loading: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (progress <= 100) {
      setProgress((prev) => prev + 0.5);
    } else {
      setIsLoaded(true);
    }
  }, [progress]);

  return (
    <div
      className={`h-screen w-screen bg-plume flex flex-col justify-center items-center gap-y-2`}
    >
      <Image
        src='/logo-no-bg.png'
        alt='logo'
        width={50}
        height={50}
      />
      <h2 className='tracking-widest font-archivo'>Build Beyond Reality</h2>
      <div className='w-1/4'>
        <Progress value={progress} />
      </div>
    </div>
  );
};

export default Loading;
