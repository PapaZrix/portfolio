'use client';

import { useSectionInView } from '@/hooks/useSectionView';
import SectionHeading from './SectionHeading';
import { skills } from '@/lib/data';
import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView('Skills', 1);

  return (
    <motion.section
      initial={{ opacity: 0, x: 125 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
      id='skills'
      className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className='grid grid-cols-5 justify-items-center gap-2 text-lg text-gray-800'>
        {skills.map((skill, index) => (
          <motion.li
            className='group relative w-full flex items-center justify-center cursor-pointer bg-white rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 h hover:bg-slate-300 hover:dark:bg-slate-600 duration-200'
            key={index}
            ref={ref}
            variants={fadeInAnimationVariants}
            initial='initial'
            whileInView='animate'
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <div>
              <Image src={skill.icon} alt={skill.icon} width={40} height={40} />
              <span className='absolute -top-6 scale-0 rounded bg-slate-200 dark:bg-slate-800 p-2 text-xs group-hover:scale-100'>
                {skill.name}
              </span>
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}
