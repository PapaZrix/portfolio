import { SectionHeading } from '@/lib/types';

export default function SectionHeading({ children }: SectionHeading) {
  return (
    <h2 className='text-2xl sm:text-3xl font-medium capitalize mb-3 sm:mb-6 text-left dark:text-slate-200'>
      {children}
    </h2>
  );
}
