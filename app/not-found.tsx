'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, y: -200 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: 'tween', duration: 0.3 }}
      className='dark:text-slate-200 h-screen w-full flex justify-center items-center flex-col gap-6'
    >
      <h1 className='text-3xl font-semibold'>Uh-Oh...</h1>
      <p className='text-xl'>
        The page you are looking for does{' '}
        <span className='italic underline underline-offset-2'>not</span> exist
      </p>
      <Image src='/images/not-found.webp' width={300} height={300} alt='404 page not found' />
      <Link
        href='/'
        className='rounded px-4 py-2 font-medium bg-slate-300 hover:bg-slate-400 dark:bg-slate-600 hover:dark:bg-slate-700 dark:text-white'
      >
        Back Home
      </Link>
    </motion.div>
  );
}
