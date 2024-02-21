import Footer from '@/components/elements/Footer';
import Header from '@/components/elements/Header';
import { constructMetadata } from '@/lib/utils';
import type { Viewport } from 'next';
import { Archivo } from 'next/font/google';
import { Suspense } from 'react';
import './globals.css';
import Loading from './loading';

const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo',
});

// const archivo_expanded = localFont({
//   src: './font/archivo-expanded-semibold.ttf',
//   display: 'swap',
//   variable: '--font-archivo-expanded',
// });

// const archivo_thin = localFont({
//   src: './font/archivo-expanded-thin.ttf',
//   display: 'swap',
//   variable: '--font-archivo-thin',
// });

// const archivo_reg = localFont({
//   src: './font/archivo-expanded-regular.ttf',
//   display: 'swap',
//   variable: '--font-archivo-reg',
// });

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className='dark'
    >
      <body className={archivo.className}>
        <Loading>
          <Header />
          {children}
          <Footer />
        </Loading>
      </body>
    </html>
  );
}
