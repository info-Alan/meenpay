import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MeenPay — Digital Fish Auctions for Kerala Harbours',
  description: 'A smarter, transparent way to connect boat owners, auctioneers, and buyers across Kerala’s coastal harbours.',
  icons: {
    icon: '/logo-symbol.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body 
        className="min-h-screen bg-white text-slate-900 antialiased" 
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
