import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import { CartProvider } from '@/features/cart/stores/cart-store'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

const manrope = Manrope({ 
  subsets: ['latin'],
  variable: '--font-manrope',
})

export const metadata: Metadata = {
  title: 'Audiophile - Premium Audio Equipment',
  description: 'Discover the finest collection of premium headphones, speakers, and earphones. Experience crystal-clear sound, exceptional craftsmanship, and cutting-edge audio technology designed for true audiophiles.',
  keywords: ['premium audio', 'headphones', 'speakers', 'earphones', 'high-end audio', 'audiophile equipment'],
  authors: [{ name: 'Audiophile' }],
  openGraph: {
    title: 'Audiophile - Premium Audio Equipment',
    description: 'Discover the finest collection of premium headphones, speakers, and earphones. Experience crystal-clear sound and exceptional craftsmanship.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Audiophile - Premium Audio Equipment',
    description: 'Discover the finest collection of premium headphones, speakers, and earphones.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} font-sans`}>
        <CartProvider>
          {children}
          <Toaster />
        </CartProvider>
      </body>
    </html>
  )
}
