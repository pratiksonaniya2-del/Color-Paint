import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { StoreProvider } from '@/context/StoreContext';
import GlobalModals from '@/components/common/GlobalModals';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'आशीर्वाद हार्डवेयर एंड पेंट हाउस | Aashirwad Hardware & Paint House',
  description:
    'आशीर्वाद हार्डवेयर एंड पेंट हाउस - आपके घर की सजावट का विश्वसनीय साथी। Premium paints from Asian Paints, Berger, Dulux, Nerolac, JSW & Indigo. Contact: 9669348842, raisatyam78@gmail.com.',
  icons: {
    icon: '/aashirwad-logo.jpg',
    apple: '/aashirwad-logo.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900 font-sans">
        <StoreProvider>
          {children}
          <GlobalModals />
        </StoreProvider>
      </body>
    </html>
  );
}
