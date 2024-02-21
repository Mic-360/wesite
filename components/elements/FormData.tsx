'use client';

import axios from 'axios';
import type { NextComponentType, NextPageContext } from 'next';
import { SubmitHandler, useForm } from 'react-hook-form';

interface IFormInput {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface Props {}

const FormData: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const response = await axios.post(
        `https://formspree.io/f/mbjbyywa`,
        data
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col gap-y-4 justify-between px-2 items-end pt-24 md:flex-row pr-6'
    >
      <div className='grid grid-cols-2 gap-8 md:px-10'>
        <input
          className='placeholder:text-plumelight uppercase border-b-[1px] border-black bg-transparent max-w-screen-xl w-full font-mono placeholder:pl-4 outline-none h-10'
          placeholder='Name'
          {...register('name', { required: true, maxLength: 20 })}
        />
        <input
          className='placeholder:text-plumelight uppercase border-b-[1px] border-black bg-transparent max-w-96 font-mono placeholder:pl-4 outline-none h-10'
          placeholder='Enter your email id'
          {...register('email', {
            required: true,
            pattern:
              /^[a-zA-Z0-9.!#$%&â*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          })}
        />
        <input
          className='placeholder:text-plumelight uppercase border-b-[1px] border-black bg-transparent max-w-96 font-mono placeholder:pl-4 outline-none h-10'
          placeholder='company/industry'
          {...register('company', { required: true })}
        />
        <input
          className='placeholder:text-plumelight uppercase border-b-[1px] border-black bg-transparent max-w-96 font-mono placeholder:pl-4 outline-none h-10'
          placeholder='write us a message'
          type='text'
          {...register('message', { minLength: 10, maxLength: 100 })}
        />
      </div>
      <input
        type='submit'
        className='uppercase border-[0.25rem] p-2 px-8 hover:bg-plumelight hover:text-white transition duration-500 ease-in-out hover:border-2'
      />
    </form>
  );
};

export default FormData;
