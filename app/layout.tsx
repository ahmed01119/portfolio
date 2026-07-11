import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Ahmed Mostafa | Flutter Developer',
  description:
    'Flutter Developer specializing in Flutter, Firebase, REST APIs, Bloc/Cubit, and scalable cross-platform mobile applications.',
  keywords: ['Ahmed Mostafa', 'Flutter Developer', 'Mobile Developer', 'Firebase', 'REST APIs', 'Bloc/Cubit', 'Egypt', 'Cairo'],
  authors: [{ name: 'Ahmed Mostafa' }],
  openGraph: {
    title: 'Ahmed Mostafa | Flutter Developer',
    description:
      'Flutter Developer specializing in Flutter, Firebase, REST APIs, Bloc/Cubit, and scalable cross-platform mobile applications.',
    url: 'https://github.com/ahmed01119',
    siteName: 'Ahmed Mostafa Portfolio',
    images: [
      {
        url: '/profile.jpg',
        width: 800,
        height: 600,
        alt: 'Ahmed Mostafa Profile Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahmed Mostafa | Flutter Developer',
    description:
      'Flutter Developer specializing in Flutter, Firebase, REST APIs, Bloc/Cubit, and scalable cross-platform mobile applications.',
    images: ['/profile.jpg'],
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-dark-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0B1523',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-background font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
