'use client';

import { Toaster } from 'react-hot-toast';
import Header from './Header';
import ThemeSwitch from './Theme';
import Footer from './Footer';
import { usePathname } from 'next/navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <div
        className={`${
          pathname !== '/' ? 'block' : 'lg:flex'
        } relative min-h-screen w-full lg:max-w-screen-2xl mx-auto lg:px-4 xl:px-32 flex-col sm:flex-row lg:justify-between lg:gap-4 2xl:gap-8`}
      >
        <Header />
        <main className={`${pathname !== '/' ? 'w-full p-0' : 'lg:w-1/2 pt-10 xl:py-24'}`}>
          {children}
        </main>
        <ThemeSwitch />
        <Toaster />
      </div>
      <Footer />
    </>
  );
}
