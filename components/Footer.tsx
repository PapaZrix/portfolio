export default function Footer() {
  return (
    <footer className='text-xs mt-6 mb-10 px-4 text-center'>
      <p className='mb-2'>
        Hosted on{' '}
        <a
          className='underline underline-offset-2 hover:text-gray-500 duration-200'
          target='_blank'
          href='https://vercel.com/'
        >
          Vercel
        </a>
      </p>
      <span>&copy; Dominik Zrilić {new Date().getFullYear()}</span>
      <p className='mt-2'>
        This website is built with Next.js 14 (app router), Typescript, Tailwind CSS, Framer Motion,
        React Email and Resend
      </p>
    </footer>
  );
}
