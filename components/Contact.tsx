'use client';

import React, { useRef } from 'react';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/hooks/useSectionView';
import toast from 'react-hot-toast';
import { sendEmail } from '@/actions/email';
import { useFormStatus } from 'react-dom';

const Button = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type='submit'
      className='w-full mx-auto group flex items-center justify-center gap-2 h-[3rem] sm:w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65'
      disabled={pending}
    >
      {pending ? (
        <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div>
      ) : (
        <>Submit </>
      )}
    </button>
  );
};

export default function Contact() {
  const { ref } = useSectionInView('Contact');
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <motion.section
      id='contact'
      ref={ref}
      className='p-4 lg:p-0 scroll-mt-32 mb-20 sm:mb-28 md:w-full w-[min(100%,38rem)] text-center'
      initial={{
        opacity: 0,
        y: 150,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className='text-start text-gray-700 mt-0 sm:-mt-6 dark:text-white/80'>
        Please contact me directly at{' '}
        <a className='underline underline-offset-[5px]' href='mailto:example@gmail.com'>
          zrilic313@gmail.com
        </a>{' '}
        or through this form.
      </p>

      <form
        ref={formRef}
        className='mt-10 flex flex-col dark:text-black'
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }
          toast.success('Email sent successfully!');
          formRef.current?.reset();
        }}
      >
        <input
          className='h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
          name='senderEmail'
          type='email'
          required
          maxLength={500}
          placeholder='Your email'
        />
        <textarea
          className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
          name='message'
          placeholder='Your message'
          required
          maxLength={5000}
        />
        <Button />
      </form>
    </motion.section>
  );
}
