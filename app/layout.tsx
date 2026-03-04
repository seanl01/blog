import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
// import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'
import Head from 'next/head'
import { ThemeProvider } from './components/theme-provider';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Sean Lim',
    template: '%s | Sean Lim',
  },
  description: 'Sean Lim Portfolio',
  openGraph: {
    title: 'Sean Lim',
    description: 'Sean Lim Portfolio',
    url: baseUrl,
    siteName: 'Sean Lim',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cx(
        // 'text-black bg-white dark:text-white dark:bg-black',
        'overflow-y-scroll',
        GeistSans.variable,
        // GeistMono.variable
      )}
    >
      <body className="antialiased max-w-2xl mx-4 mt-8 sm:mx-1 md:mx-auto">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0 ">
            <Navbar />
            {children}
            <Footer />
            <Analytics />
            <SpeedInsights />
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
