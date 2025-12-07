import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import './globals.css'

import { ThemeProvider } from '@/components/custom/theme-provider'

const roboto = Roboto({
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
  subsets: ['latin'],
  display: 'swap',
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Rafael.dev',
  description:
    'The personal website of Rafael Aguiar, a software engineer and tech enthusiast.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <body
          className={`${inter.variable} ${roboto.variable} antialiased bg-slate-950 text-slate-200`}
        >
          {children}
        </body>
      </ThemeProvider>
    </html>
  )
}
