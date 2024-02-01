import blog from '@/public/images/blog.png';
import crypto from '@/public/images/crypto.png';
import wordle from '@/public/images/wordle.png';
import css from '@/public/icons/css.svg';
import git from '@/public/icons/git.svg';
import html from '@/public/icons/html.svg';
import javascript from '@/public/icons/javascript.svg';
import next from '@/public/icons/next.svg';
import prisma from '@/public/icons/prisma.svg';
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
      'Full stack blog website built in Next.js 12 (pages router) for a friend. SSR, SEO, admin dashboard and post editor, user profile, database built with Prisma, auth (role based) included.',
    imageUrl: blog,
    codeUrl: 'https://github.com/PapaZrix/blog-public',
    liveUrl: 'https://presstointeract.com/',
  },
  {
    title: 'Crypto Tracker',
    description:
      'Next.js 13/14 (app router) app in Typescript. Check a coins current price and market movement. **NOTE Coingecko API has a per minute request restriction, might lead to errors.',
    imageUrl: crypto,
    codeUrl: 'https://github.com/PapaZrix/crypto-tracker',
    liveUrl: 'https://crypto-tracker-sepia-chi.vercel.app/',
  },
  {
    title: 'Wordle Clone',
    description:
      'One of my first React.js projects. Simplified Wordle clone with keyboard and mouse support as well as light/dark mode toggle.',
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
  { name: 'Git', icon: git },
] as const;
