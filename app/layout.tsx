import './globals.css';
import type { Metadata } from 'next';
import { JetBrains_Mono, Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from '@/components/analytics';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Jairo Cogollo — Backend, seguridad y sistemas',
  description: 'Portafolio de Jairo Cogollo, desarrollador backend colombiano enfocado en APIs, seguridad y sistemas que aguantan la realidad.',
  keywords: 'Jairo Cogollo, backend, Python, PHP, seguridad informática, APIs',
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    title: 'Jairo Cogollo — Backend, seguridad y sistemas',
    description: 'Desarrollador backend colombiano enfocado en APIs, seguridad y sistemas que aguantan la realidad.',
    images: [
      {
        url: '/IMG_6996.jpg',
        width: 1200,
        height: 630,
        alt: 'Jairo Cogollo - Python Backend Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jairo Cogollo | Python Backend Developer',
    description: 'Expert Python backend developer specializing in scalable architectures and distributed systems.',
    images: ['/IMG_6996.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head />
      <body suppressHydrationWarning className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className={`${mono.variable} ${mono.className}`}>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
