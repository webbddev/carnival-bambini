'use client';

import { ReactNode } from 'react';
import { CartProvider as ShoppingCartProvider } from 'use-shopping-cart';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from './theme-provider';

// export default function CartProvider({ children }: { children: ReactNode }) {
//   return (
//     <ShoppingCartProvider
//       mode='payment'
//       cartMode='client-only'
//       stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
//       successUrl='https://carnival-bambini.vercel.app/stripe/success'
//       cancelUrl='https://carnival-bambini.vercel.app/stripe/error'
//       currency='USD'
//       billingAddressCollection={true}
//       allowedCountries={['GB', 'US', 'CA']}
//       shouldPersist={true}
//       language='en-US'
//     >
//       {children}
//     </ShoppingCartProvider>
//   );
// }

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ShoppingCartProvider
      mode='payment'
      cartMode='client-only'
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
      successUrl='https://carnival-bambini.vercel.app/stripe/success'
      cancelUrl='https://carnival-bambini.vercel.app/stripe/error'
      currency='USD'
      billingAddressCollection={true}
      allowedCountries={['GB', 'US', 'CA']}
      shouldPersist={true}
      language='en-US'
    >
      <ThemeProvider
        attribute='class'
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange
      >
        <Toaster />
        {children}
      </ThemeProvider>
    </ShoppingCartProvider>
  );
}
