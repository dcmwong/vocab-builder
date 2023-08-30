import './globals.css';

import Navbar from './navbar';
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
        <Navbar />
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
