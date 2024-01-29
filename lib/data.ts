import blog from '@/public/images/blog.png';
import crypto from '@/public/images/blog.png';
import wordle from '@/public/images/wordle.png';
import css from '@/public/icons/css.svg';
import git from '@/public/icons/git.svg';
import html from '@/public/icons/html.svg';
import javascript from '@/public/icons/javascript.svg';
import next from '@/public/icons/next.svg';
import prisma from '@/public/icons/prisma.svg';
import python from '@/public/icons/python.svg';
import react from '@/public/icons/react.svg';
import sql from '@/public/icons/sql.svg';
import tailwind from '@/public/icons/tailwind.svg';
import typescript from '@/public/icons/typescript.svg';

export const links = [
  { name: 'About', hash: '#about' },
  { name: 'Projects', hash: '#projects' },
  { name: 'Skills', hash: '#skills' },
  { name: 'Contact', hash: '#contact' },
] as const;

export const projects = [
  {
    title: 'Press To Interact',
    description:
      'Full stack blog website built in Next.js 12 (pages router) for a friend. Includes server side rendered post pages, SEO, role based authentication (user/admin), admin protected routes (post editor and dashboard), user profile activity and account settings, Planetscale hosted database built in Prisma, comment and like features.',
    imageUrl: blog,
    codeUrl: 'https://github.com/PapaZrix/blog',
    liveUrl: 'https://presstointeract.com/',
  },
  {
    title: 'Crypto Tracker',
    description:
      'My first Next.js 13/14 app (app router) in Typescript. Cryptocurrency website for checking a coins current market value, market movement and historic price movement, including graph visualization. Includes light/dark mode feature. **NOTE uses Coingecko API which has a per minute request restriction, might lead to errors.',
    imageUrl: crypto,
    codeUrl: 'https://github.com/PapaZrix/crypto-tracker',
    liveUrl: 'https://crypto-tracker-sepia-chi.vercel.app/',
  },
  {
    title: 'Wordle Clone',
    description:
      'One of my first React.js projects. Simplified Wordle clone with keyboard and mouse usage support as well as light/dark mode toggle.',
    imageUrl: wordle,
    codeUrl: 'https://github.com/PapaZrix/wordle-clone',
    liveUrl: 'https://papazrix.github.io/wordle-clone/',
  },
] as const;

export const skills = [
  { name: 'HTML', icon: html },
  { name: 'CSS', icon: css },
  { name: 'Javascript', icon: javascript },
  { name: 'React.js', icon: react },
  { name: 'Next.js', icon: next },
  { name: 'Tailwind', icon: tailwind },
  { name: 'Typescript', icon: typescript },
  { name: 'Prisma', icon: prisma },
  { name: 'SQL', icon: sql },
  { name: 'Python', icon: python },
  { name: 'Git', icon: git },
] as const;
