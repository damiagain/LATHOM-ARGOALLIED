import type { Metadata } from 'next'
import { Outfit, Inter } from 'next/font/google'
import './globals.css'
import { brand } from '@/content/content'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://lathomagroallied.com'),
  title: {
    default: `Lathom Agro Allied | ${brand.tagline}`,
    template: `%s | Lathom Agro Allied`,
  },
  description: brand.tagline,
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
      { url: '/images/lathom-mark.png', type: 'image/png' },
      { url: '/images/lathom-logo.png', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Lathom Agro Allied',
    description: brand.tagline,
    siteName: 'Lathom Agro Allied',
    images: [
      {
        url: '/images/lathom-logo.png',
        width: 1307,
        height: 891,
        alt: 'Lathom Agro Allied logo',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-offwhite font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  )
}
