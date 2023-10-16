import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'URL State Demo',
  description: 'A demo app for URL state management',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="flex h-full items-center justify-center bg-[#f7f7f7]">
        {children}
      </body>
    </html>
  );
}
