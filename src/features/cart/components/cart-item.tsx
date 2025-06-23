'use client'

import Image from 'next/image'
import { useCart, CartItem as CartItemType } from '@/features/cart/stores/cart-store'
import { toast } from 'sonner'

interface CartItemProps {
  item: CartItemType
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity } = useCart()
  
  const cleanImagePath = (path: string) => path.replace('./', '/')

  function handleIncrement() {
    updateQuantity(item.id, item.quantity + 1)
  }

  function handleDecrement() {
    const newQuantity = item.quantity - 1;
    updateQuantity(item.id, newQuantity);
    
    if (newQuantity === 0) {
      toast.success('Item removed', {
        description: `${item.name} removed from cart`,
        duration: 2000,
      });
    }
  }

  return (
    <div className="flex items-center gap-4">
      {/* Product Image */}
      <div className="relative w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
        <Image
          src={cleanImagePath(item.image)}
          alt={item.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-[15px] text-black leading-[25px] truncate">
          {item.name}
        </h3>
        <p className="text-[14px] font-bold text-black/50">
          $ {item.price.toLocaleString()}
        </p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center bg-gray-100 rounded h-8">
        <button
          onClick={handleDecrement}
          className="px-3 h-full text-black/25 hover:text-primary transition-colors font-bold text-[13px]"
        >
          -
        </button>
        <span className="px-3 font-bold text-[13px] text-black min-w-[2rem] text-center">
          {item.quantity}
        </span>
        <button
          onClick={handleIncrement}
          className="px-3 h-full text-black/25 hover:text-primary transition-colors font-bold text-[13px]"
        >
          +
        </button>
      </div>
    </div>
  )
}