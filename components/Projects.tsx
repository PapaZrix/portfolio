'use client';

import { projects } from '@/lib/data';
import SectionHeading from './SectionHeading';
import Project from './Project';
import React from 'react';
import { useSectionInView } from '@/hooks/useSectionView';
import { motion } from 'framer-motion';

export default function Projects() {
  const { ref } = useSectionInView('Projects', 0.5);

  return (
    <motion.section
      initial={{ opacity: 0, x: 125 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
      ref={ref}
      id='projects'
      className='scroll-mt-28 mb-28 p-4 sm:p-0'
    >
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projects.map((project) => (
          <React.Fragment key={project.title}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </motion.section>
  );
}
