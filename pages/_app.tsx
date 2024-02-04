import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';
import React, { PropsWithChildren } from 'react';
import Footer from 'components/Footer';
import { GlobalStyle } from 'components/GlobalStyles';
import Navbar from 'components/Navbar';
import NavigationDrawer from 'components/NavigationDrawer';
import { NewsletterModalContextProvider } from 'contexts/newsletter-modal.context';
import { NavItems } from 'types';
import { useRouter } from 'next/router';

const navItemsNotLogin: NavItems = [
  { title: 'Lacak Pengiriman', href: '/tracking' },
  { title: 'Profile Perusahaan', href: '/profile-perusahaan' },
  { title: 'Produk & Layanan', href: '/produk-dan-layanan' },
  { title: 'Berita', href: '/berita' },
  { title: 'Hubungi Kami', href: '/contact' },
];

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="icon" type="image/png" href="/rraf-logo.png" />
      </Head>
        <GlobalStyle />
        <MyAppContents Component={Component} pageProps={pageProps} />
    </>
  );
}

function MyAppContents({Component, pageProps}:{Component: React.ComponentType; pageProps: any;}) {
const isAdmin = useRouter().pathname.startsWith('/adm');

  return(
    <Providers>
        {isAdmin ? (
          <>
          <Component {...pageProps}/>
        </>
        ) : (
          <>
          <Navbar items={navItemsNotLogin}/>
          <Component {...pageProps}/>
          <Footer />
        </>
        )}
    </Providers>
  )
}

function Providers<T>({ children }: PropsWithChildren<T>) {
  return (
    <NewsletterModalContextProvider>
      <NavigationDrawer items={navItemsNotLogin}>{children}</NavigationDrawer>
    </NewsletterModalContextProvider>
  );
}


export default MyApp;
