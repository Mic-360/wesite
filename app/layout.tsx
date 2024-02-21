import Footer from '@/components/elements/Footer';
import { constructMetadata } from '@/lib/utils';
import { Archivo } from 'next/font/google';
import { Suspense } from 'react';
import Loading from './loading';
import Header from '@/components/elements/Header';
import './globals.css';
import Error from './error';
import type { Viewport } from 'next';

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
      <Suspense fallback={<Loading />}>
          <body className={archivo.className}>
            {/* <Header /> */}
            {children}
            {/* <Footer /> */}
          </body>
      </Suspense>
    </html>
  );
}
