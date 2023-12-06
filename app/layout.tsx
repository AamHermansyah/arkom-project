import type { Metadata } from 'next';

import './globals.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FramerMotionContext from '@/components/FramerMotionContext';

export const metadata: Metadata = {
  title: 'Curug Badak',
  description: 'Curug Badak destinasi untuk semua kalangan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">
          <FramerMotionContext>
            {children}
          </FramerMotionContext>
        </main>
        <Footer />
      </body>
    </html>
  )
}
