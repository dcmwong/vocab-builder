import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import Nav from './nav';
import { Suspense } from 'react';
import { ReduxProvider } from './store/provider';

export const metadata = {
  title: 'Vocab builder',
  description:
    'An app to help you build your vocab for the 11plus exam.'
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body className="h-full">
        <Suspense>
          <Nav />
        </Suspense>
        <ReduxProvider>
          {children}
        </ReduxProvider>
        <Analytics />
      </body>
    </html>
  );
}
