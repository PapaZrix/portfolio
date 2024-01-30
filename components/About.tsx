'use client';

import Link from 'next/link';
import SectionHeading from './SectionHeading';
import { useSectionInView } from '@/hooks/useSectionView';
import { motion } from 'framer-motion';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id='about'
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'tween', duration: 0.3 }}
      className='p-4 lg:p-0 text-slate-800 dark:text-slate-300 mb-10 sm:mb-36 scroll-mt-24'
    >
      <SectionHeading>About Me</SectionHeading>
      <p className='mb-4'>
        Although I am a soon to be graduate at the{' '}
        <span className='font-semibold dark:text-slate-200'>
          Faculty of Economics and Business Zagreb
        </span>
        , a little less than 2 years ago I decided to begin learning about programming, more
        specifically <span className='font-semibold dark:text-slate-200'>Web development</span>.
        Ever since then I&apos;ve slowly manoeuvred through the large and ever expanding landspace
        that is the web, and thanks to{' '}
        <Link
          href='https://www.theodinproject.com/'
          target='_blank'
          className='font-semibold dark:text-slate-200 underline underline-offset-4 hover:text-slate-600 hover:decoration-slate-600 hover:dark:text-slate-400 hover:dark:decoration-slate-400'
        >
          The Odin Project
        </Link>
        , took my first steps towards building fullstack web apps.
      </p>
      <p className='mb-4'>
        To compensate for my lack of formal education in the field of computer science, I enrolled
        in Harvard&apos;s{' '}
        <Link
          className='font-semibold dark:text-slate-200 underline underline-offset-4 hover:text-slate-600 hover:decoration-slate-600 hover:dark:text-slate-400 hover:dark:decoration-slate-400'
          href='https://pll.harvard.edu/course/cs50-introduction-computer-science'
          target='_blank'
        >
          CS50 Introduction to Computer Science
        </Link>{' '}
        course, which went over important principles of programming and used{' '}
        <span className='italic'>C, Python (Flask) and SQL</span>.
      </p>
      <p className='mb-4'>
        Later on in my journey I started using{' '}
        <span className='font-semibold dark:text-slate-200'>React.js</span>, more specifically{' '}
        <span className='font-semibold dark:text-slate-200'>Next.js</span> along with{' '}
        <span className='font-semibold dark:text-slate-200'>Typescript</span> and
        <span className='font-semibold dark:text-slate-200'> Prisma</span> to be able to make full
        stack apps, such as the ones you&apos;ll see on my{' '}
        <Link
          className='font-semibold dark:text-slate-200 underline underline-offset-4 hover:text-slate-600 hover:decoration-slate-600 hover:dark:text-slate-400 hover:dark:decoration-slate-400'
          href='/#projects'
        >
          projects tab
        </Link>{' '}
        and it has become my main learning focus and the field I see myself working in for the{' '}
        <span className='italic'>foreseeable</span> future.
      </p>
      <p>
        In my free time, <span className='italic'>believe it or not</span>, I like to also stay on
        my computer by doing things such as{' '}
        <span className='font-semibold dark:text-slate-200'>music production / mixing</span>,
        playing simulation games such as{' '}
        <span className='font-semibold dark:text-slate-200'>Football Manager</span> and when I
        finally get off the computer I spend that time with my significant other and friends.
      </p>
    </motion.section>
  );
}
