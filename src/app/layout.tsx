import Header from '@/components/Header';
import './globals.css';
import type { Metadata } from 'next';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'URL State Demo',
  description: 'A demo app for URL state management',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="bg-stone-200 h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
