import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import ThemeProvider from '@/components/ThemeProvider';

const montserrat = localFont({
  src: './fonts/Montserrat.woff2',
  variable: '--font-montserrat',
  weight: '100 1100',
});

const hubotSans = localFont({
  src: './fonts/HubotSans.woff2',
  variable: '--font-hubotSans',
  weight: '100 1100',
});

export const metadata: Metadata = {
  title: 'The Pivot Perspective',
  description: 'created by Team Sarasniyam',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${montserrat.variable} ${hubotSans.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
