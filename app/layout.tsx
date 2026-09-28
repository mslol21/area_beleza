import type { Metadata } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans, Dancing_Script } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const dancing = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-script',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Raquel Alves Nails | Nail Design & Spa dos Pés',
  description: 'Unhas cuidadas para destacar seu estilo. Manicure, alongamento de unhas, nail design e spa dos pés em Guaianases, São Paulo.',
  keywords: 'manicure guaianases, unhas em gel, alongamento de unhas, spa dos pes, nail design sao paulo',
  openGraph: {
    title: 'Raquel Alves Nails | Nail Design & Spa dos Pés',
    description: 'Unhas cuidadas para destacar seu estilo. Beleza, cuidado e qualidade em cada detalhe.',
    images: ['/images/hero-nails.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${jakarta.variable} ${dancing.variable}`}>
      <body>{children}</body>
    </html>
  );
}
