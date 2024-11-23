import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const montserrat = localFont({
  src: './fonts/Montserrat.woff2',
  variable: '--font-montserrat',
  weight: '100 1100',
});

export const metadata: Metadata = {
  title: 'The Pivot Perspective',
  description: 'Designed at KLIC',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true} className="dark">
      <body className={`${montserrat.className} antialiased`}>{children}</body>
    </html>
  );
}
