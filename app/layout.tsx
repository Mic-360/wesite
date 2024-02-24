import Footer from '@/components/elements/Footer';
import { constructMetadata } from '@/lib/utils';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Viewport } from 'next';
import { Archivo } from 'next/font/google';
import { Suspense } from 'react';
import './globals.css';
import Header from '@/components/elements/Header';
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
      className='light'
    >
      <body className={archivo.className}>
        <Loading>
          <SpeedInsights />
          <Header />
          {children}
          <Footer />
          <Analytics />
        </Loading>
      </body>
    </html>
  );
}
