import type { Metadata } from 'next';
import Head from 'next/head';
import './globals.css'
import Navbar from '@/component/Navbar';

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
         <Navbar />
          {children}
        <footer>
          <p>&copy; 2023 Travel. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}