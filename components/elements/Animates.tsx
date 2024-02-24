'use client';

import { motion, useInView } from 'framer-motion';
import type { NextComponentType, NextPageContext } from 'next';
import { ElementType, useRef } from 'react';

export const animations = {
  hidden: {
    opacity: 0,
    y: '90%',
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      ease: 'easeOut',
    },
  },
};

interface Props {
  text: string;
  el?: ElementType;
  className?: string;
  delay?: number;
  adjust?: string;
}

export const AnimatedTitle: NextComponentType<NextPageContext, {}, Props> = ({
  text,
  el: Wrapper = 'h1',
  className,
  adjust,
  delay,
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });

  return (
    <Wrapper className={className}>
      <span className='sr-only'>{text}</span>
      <motion.span
        ref={ref}
        initial='hidden'
        animate={isInView ? 'visible' : 'hidden'}
        transition={{
          staggerChildren: 0.2,
          delayChildren: delay || 1.5,
        }}
        aria-hidden
        className='flex justify-around'
      >
        {text.split('').map((char, i) => (
          <motion.span
            key={i}
            variants={animations}
            className={`${adjust} inline-block drop-shadow-xl`}
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    </Wrapper>
  );
};
