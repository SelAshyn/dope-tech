import type { Metadata } from 'next';
import Head from 'next/head';
import './globals.css'
import Navbar from '@/component/Navbar';
import Top from '@/component/top/top';
import Main from '@/component/Main/main'; 
import Into from '@/component/into/into';
import React from 'react';

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
        <link rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css" />
  <link rel="stylesheet"
  href="https://unpkg.com/boxicons@latest/css/boxicons.min.css" />
      </Head>
     
      <body>
        <Top />
         <Navbar />
          <Main />
          <Into />
          {children}
        <footer>
          <center><p>&copy; 2023 Travel. All rights reserved.</p></center>
        </footer>
      </body>
    </html>
  )
}