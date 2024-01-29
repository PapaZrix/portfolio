type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className='text-3xl font-medium capitalize mb-3 sm:mb-6 text-left dark:text-slate-200'>
      {children}
    </h2>
  );
}
