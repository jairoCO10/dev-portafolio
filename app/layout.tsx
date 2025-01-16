import './globals.css';
import type { Metadata } from 'next';
import { JetBrains_Mono, Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from '@/components/analytics';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const mono = JetBrains_Mono({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Jairo Cogollo | Python Backend Developer',
  description: 'Expert Python backend developer specializing in scalable architectures and distributed systems. Over 8 years of experience building high-performance APIs and microservices.',
  keywords: 'Python Developer, Backend Engineer, Distributed Systems, API Development, Database Optimization',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://johndoe.dev',
    title: 'Jairo Cogollo | Python Backend Developer',
    description: 'Expert Python backend developer specializing in scalable architectures and distributed systems.',
    images: [
      {
        url: 'IMG_6996.jpg',
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
    images: ['https://x.com/JairoCO10/photo'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body suppressHydrationWarning className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className={mono.variable}>
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