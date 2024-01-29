import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import ThemeContextProvider from '@/context/theme-context';
import ThemeSwitch from '@/components/Theme';
import ActiveSectionContextProvider from '@/context/section-context';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dominik | Personal Portfolio',
  description: 'Dominik is a self-taught web developer focusing on React.js and Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-light dark:bg-main`}>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <div className='relative min-h-screen w-full lg:max-w-screen-2xl mx-auto lg:px-32 lg:flex flex-col sm:flex-row lg:justify-between lg:gap-8'>
              <Header />
              <main className='pt-10 lg:w-1/2 lg:py-24'>{children}</main>
              <ThemeSwitch />
            </div>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
