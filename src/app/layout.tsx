import type { Metadata } from 'next';
import Head from 'next/head';
import './globals.css'
import Navbar from '@/component/Navbar/Navbar';
import Top from '@/component/top/top';
import Main from '@/component/Main/main'; 
import Into from '@/component/into/into';
import React from 'react';
import Categories from '@/component/CategoryGrid/CategoryGrid';
import Product from '@/component/ProductGrid/ProductGrid';
import { Arima } from 'next/font/google';

const arima = Arima({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Travel',
  description: 'Travel UI/UX App for Camping',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="https://raw.githubusercontent.com/SelAshyn/dope-tech/refs/heads/main/src/app/favicon.ico" type="image/x-icon" />
        <link rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css" />
  <link rel="stylesheet"
  href="https://unpkg.com/boxicons@latest/css/boxicons.min.css" />
      </Head>
     
      <body>
        <div style={{ fontFamily: arima.className }}>
        <Top />
         <Navbar />
          <Main />
          <Into />
          <Categories />
          <Product />
          {children} 
        <footer>
          <center><p></p></center>
        </footer>
        </div>
      </body>
    </html>
  )
}