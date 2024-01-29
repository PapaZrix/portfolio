'use client';

import { projects } from '@/lib/data';
import SectionHeading from './SectionHeading';
import Project from './Project';
import React from 'react';

export default function Projects() {
  console.log(projects);
  return (
    <section id='projects' className='p-4 sm:p-0'>
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
