import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'URL State Demo',
  description: 'A demo app for URL state management',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white ">{children}</body>
    </html>
  );
}
