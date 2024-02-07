import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ThemeContextProvider from '@/context/theme-context';
import ActiveSectionContextProvider from '@/context/section-context';
import Layout from '@/components/Body';

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
    <html lang='en' className='!scroll-smooth'>
      <body className={`${inter.className} bg-light dark:bg-main`}>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Layout>{children}</Layout>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
