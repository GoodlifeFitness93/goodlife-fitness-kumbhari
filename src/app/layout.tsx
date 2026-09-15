import type { Metadata, Viewport } from 'next'
import { Anton, Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const anton = Anton({ subsets: ['latin'], variable: '--font-anton', weight: '400', display: 'swap' })

export const metadata: Metadata = {
  title: 'Gym in Kumbhari Solapur | Goodlife Fitness Club & Gym',
  description: 'Goodlife Fitness Club & Gym Kumbhari offers personal coaching by Arvind Sir, a fully equipped training floor, and a 5.0★ Google rating with 306 reviews. Join today.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Goodlife Fitness Club & Gym — Kumbhari',
    description: 'Real Results. Real Coaching. Real Community.',
    type: 'website',
    images: [{ url: '/images/hero-athlete.png', width: 1680, height: 944, alt: 'Athlete training at Goodlife Fitness Club & Gym' }],
  },
  twitter: { card: 'summary_large_image', title: 'Goodlife Fitness Club & Gym — Kumbhari', description: 'Real Results. Real Coaching. Real Community.' },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = { themeColor: '#0A0A0A', colorScheme: 'dark', width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${inter.variable} ${anton.variable}`}><body>{children}</body></html>
}
