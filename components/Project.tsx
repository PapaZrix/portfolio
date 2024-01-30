'use client';

import { useRef } from 'react';
import { projects } from '@/lib/data';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { LuMonitorPlay } from 'react-icons/lu';

type ProjectProps = (typeof projects)[number];

export default function Project({ title, description, imageUrl, codeUrl, liveUrl }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className='group mb-3 sm:mb-8 last:mb-0'
    >
      <section className='bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative lg:h-[24rem] xl:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20'>
        <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-6 sm:max-w-[50%] flex flex-col h-full lg:text-sm lg:group-even:ml-[13.5rem] xl:group-even:ml-[18rem] justify-between'>
          <h3 className='text-2xl font-semibold'>{title}</h3>
          <p className='mt-2 leading-relaxed text-gray-700 dark:text-white/70'>{description}</p>
          <div className='flex gap-2 mt-3'>
            <Link
              href={codeUrl}
              className='flex gap-2 items-center border p-2 bg-slate-300 rounded-md hover:bg-slate-400 hover:scale-105 duration-100 dark:bg-slate-800 hover:dark:bg-slate-900'
            >
              <FaGithub />
              Code
            </Link>
            <Link
              href={liveUrl}
              className='flex gap-2 items-center border px-3 py-2 bg-slate-300 rounded-md hover:bg-slate-400 hover:scale-105 duration-100 dark:bg-slate-800 hover:dark:bg-slate-900'
            >
              <LuMonitorPlay />
              Live
            </Link>
          </div>
        </div>

        <Image
          src={imageUrl}
          alt='Project I worked on'
          quality={95}
          className='absolute hidden sm:block top-8 lg:-right-56 xl:-right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2
        lg:group-even:-left-60
        xl:group-even:right-[initial] group-even:-left-40'
        />
      </section>
    </motion.div>
  );
}
