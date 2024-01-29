'use client';

import { projects } from '@/lib/data';
import SectionHeading from './SectionHeading';
import Project from './Project';
import React from 'react';
import { useSectionInView } from '@/hooks/useSectionView';

export default function Projects() {
  const { ref } = useSectionInView('Projects', 0.5);

  return (
    <section ref={ref} id='projects' className='scroll-mt-28 mb-28 p-4 sm:p-0'>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projects.map((project) => (
          <React.Fragment key={project.title}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
