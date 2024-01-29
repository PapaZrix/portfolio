'use client';

import { useActiveSectionContext } from '@/context/section-context';
import { links } from '@/lib/data';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  console.log(activeSection);
  return (
    <header className='p-4 sm:p-0 w-full min-h-screen lg:sticky lg:top-0 lg:flex lg:flex-col lg:max-h-screen lg:w-1/2 lg:justify-between lg:py-20'>
      <div>
        <div className='flex items-center gap-3 sm:gap-6'>
          <h1 className='text-4xl sm:text-5xl text-gray-800 dark:text-slate-200 font-bold'>
            Dominik Zrilić
          </h1>
          <Image src='/zrix.jpg' alt='my photo' width={70} height={70} className='rounded-full' />
        </div>
        <h2 className='text-gray-800 dark:text-slate-200 mt-2 mb-4 text-lg tracking-tight sm:text-xl font-semibold'>
          Self-taught web developer
        </h2>
        <p className='text-gray-600 dark:text-slate-400 max-w-xl'>
          Currently fine-tuning my skills, I&apos;m looking for new opportunities and challenges in
          the world of web development, primarily React.js / Next.js.
        </p>
        <ul id='nav' className='hidden sm:block mt-16 text-xl'>
          {links.map((link) => (
            <li key={link.hash}>
              <Link
                href={link.hash}
                className='w-36 flex gap-3 items-center cursor-pointer group'
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                <span
                  className={`h-[1.6px] group-hover:bg-black group-hover:w-16 duration-200 group-hover:dark:bg-white ${
                    activeSection === link.name ? 'w-16 bg-black dark:bg-white' : 'w-7 bg-gray-500'
                  }`}
                ></span>
                <span
                  className={`group-hover:text-black group-hover:dark:text-white ${
                    activeSection === link.name ? 'text-black dark:text-slate-200' : 'text-gray-600'
                  }`}
                >
                  {link.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='mt-6 sm:mt-0 flex justify-between sm:flex-row items-center sm:justify-start gap-2 font-medium'>
        <Link
          href='#contact'
          className='w-1/3 text-sm sm:w-auto sm:text-base group bg-gray-950 text-white px-3 py-2 whitespace-nowrap sm:px-7 sm:py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
        >
          Contact me
          <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
        </Link>

        <a
          className='w-1/3 text-sm sm:w-auto sm:text-base group bg-white px-3 py-2 whitespace-nowrap sm:px-7 sm:py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-slate-200'
          href='/CV.pdf'
          download
        >
          Download CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition' />
        </a>

        <a
          className='bg-white p-3 sm:p-4 text-gray-700 hover:text-gray-950 flex items-center justify-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'
          href='https://www.linkedin.com/in/dominik-zrili%C4%87-3252a5136/'
          target='_blank'
        >
          <BsLinkedin />
        </a>

        <a
          className='bg-white p-3 sm:p-4 text-gray-700 flex justify-center items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'
          href='https://github.com/PapaZrix'
          target='_blank'
        >
          <FaGithubSquare size='1.1rem' />
        </a>
      </div>
    </header>
  );
}
