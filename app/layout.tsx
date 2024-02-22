import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import NavbarEXP from './components/NavbarEXP';
import { Providers } from './components/Providers';
// import ShoppingCartProvider, { Providers } from './components/Providers';
import ShoppingCartModal from './components/ShoppingCartModal';
import { Footer } from './components/Footer';
// import CartProvider from './components/Providers';
import { ThemeProvider } from './components/theme-provider';
import FooterSubscribe from './components/FooterSubscribe';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Carnival Bambini',
  description: 'Transcend to from digital to magical',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {/* <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        > */}
        {/* experiment */}
        <Providers>
          {/* <ShoppingCartProvider> */}
          <NavbarEXP />
          {/* <Navbar /> */}
          <ShoppingCartModal />
          {children}
          <FooterSubscribe />
          <Footer />
          {/* </ShoppingCartProvider> */}
          {/* </ThemeProvider> */}
        </Providers>
      </body>
    </html>
  );
}
