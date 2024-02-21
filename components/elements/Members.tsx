'use client';

import { TeamMembers } from '@/lib/constants';
import type { NextComponentType, NextPageContext } from 'next';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface Props {}

const Members: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  const [shuffledMembers, setShuffledMembers] = useState(TeamMembers);

  useEffect(() => {
    const shuffleMembers = () => {
      const shuffled = [...TeamMembers].sort(() => Math.random() - 0.5);
      setShuffledMembers(shuffled);
    };

    shuffleMembers();
  }, []);
  return (
    <div
      className='grid grid-cols-3 gap-8'
      dir='rtl'
    >
      {shuffledMembers.map((member) => (
        <div
          key={member.id}
          className='flex flex-col items-center'
        >
          <div className='h-full flex justify-center items-center'>
            <Image
              src={member.image}
              alt='members'
              height={300}
              width={300}
              className='object-cover h-full rounded-xl'
            />
          </div>
          <h2 className='text-sm md:text-lg md:mt-4'>{member.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Members;
