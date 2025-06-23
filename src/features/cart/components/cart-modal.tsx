'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useCart } from '@/features/cart/stores/cart-store'
import { toast } from 'sonner'
import CartItem from './cart-item'

interface CartModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function CartModal({ isOpen, onClose }: CartModalProps) {
  const { items, clearCart, getTotalPrice, getSubtotal, getShipping, getVAT, getTotalItems } = useCart()
  const isEmpty = items.length === 0
  const subtotal = getSubtotal()
  const shipping = getShipping()
  const vat = getVAT()
  const totalPrice = getTotalPrice()
  const totalItems = getTotalItems()

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/40 z-50" 
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed top-24 right-4 sm:right-6 lg:right-[165px] bg-white rounded-lg shadow-xl z-50 w-[calc(100%-2rem)] sm:w-[377px] max-h-[calc(100vh-8rem)] overflow-hidden">
        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-[18px] font-bold text-black tracking-[1.3px] uppercase">
              Cart ({totalItems})
            </h2>
            {!isEmpty && (
              <button
                onClick={() => {
                  clearCart();
                  toast.success('Cart cleared', {
                    description: 'All items removed from cart',
                    duration: 2000,
                  });
                }}
                className="text-[15px] leading-[25px] text-black/50 underline hover:text-black transition-colors"
              >
                Remove all
              </button>
            )}
          </div>

          {/* Cart Items or Empty State */}
          {isEmpty ? (
            <p className="text-center text-black/50 py-8">Your cart is empty</p>
          ) : (
            <div className="space-y-6 mb-8 max-h-[240px] overflow-y-auto">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          )}

          {/* Totals Breakdown */}
          {!isEmpty && (
            <div className="space-y-2 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-[15px] text-black/50 uppercase">Subtotal</span>
                <span className="text-[15px] font-bold text-black">
                  $ {subtotal.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[15px] text-black/50 uppercase">Shipping</span>
                <span className="text-[15px] font-bold text-black">
                  $ {shipping.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[15px] text-black/50 uppercase">VAT (20%)</span>
                <span className="text-[15px] font-bold text-black">
                  $ {vat.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t">
                <span className="text-[15px] text-black/50 uppercase">Total</span>
                <span className="text-[18px] font-bold text-black">
                  $ {totalPrice.toLocaleString()}
                </span>
              </div>
            </div>
          )}

          {/* Checkout Button */}
          {isEmpty ? (
            <Button variant="inactive" className="w-full" disabled>
              Checkout
            </Button>
          ) : (
            <Link href="/checkout" onClick={onClose}>
              <Button className="w-full">Checkout</Button>
            </Link>
          )}
        </div>
      </div>
    </>
  )
}