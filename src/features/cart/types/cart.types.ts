/**
 * Cart-related type definitions
 */

export interface CartItem {
  id: number;
  slug: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}

export type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "UPDATE_QUANTITY"; payload: { id: number; quantity: number } }
  | { type: "REMOVE_ITEM"; payload: { id: number } }
  | { type: "CLEAR_CART" }
  | { type: "LOAD_CART"; payload: CartItem[] };

export interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  updateQuantity: (id: number, quantity: number) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getSubtotal: () => number;
  getShipping: () => number;
  getVAT: () => number;
  getTotalItems: () => number;
}

export interface CartItemProps {
  item: CartItem;
}

export interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface CartSummary {
  subtotal: number;
  shipping: number;
  vat: number;
  total: number;
  itemCount: number;
}

export interface QuantitySelectorProps {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
}