import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import { CartProvider } from '@/features/cart/stores/cart-store'
import './globals.css'

const manrope = Manrope({ 
  subsets: ['latin'],
  variable: '--font-manrope',
})

export const metadata: Metadata = {
  title: 'Audiophile - Premium Audio Equipment',
  description: 'Experience natural, lifelike audio and exceptional build quality',
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
        </CartProvider>
      </body>
    </html>
  )
}
