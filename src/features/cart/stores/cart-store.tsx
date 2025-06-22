"use client";

import { createContext, useContext, useReducer, useEffect, ReactNode } from "react";

export interface CartItem {
  id: number;
  slug: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "UPDATE_QUANTITY"; payload: { id: number; quantity: number } }
  | { type: "REMOVE_ITEM"; payload: { id: number } }
  | { type: "CLEAR_CART" }
  | { type: "LOAD_CART"; payload: CartItem[] };

interface CartContextType {
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

const CartContext = createContext<CartContextType | undefined>(undefined);

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.items.find(i => i.id === action.payload.id);
      
      if (existingItem) {
        return {
          items: state.items.map(i =>
            i.id === action.payload.id
              ? { ...i, quantity: i.quantity + action.payload.quantity }
              : i
          )
        };
      }
      
      return { items: [...state.items, action.payload] };
    }
    
    case "UPDATE_QUANTITY": {
      return {
        items: action.payload.quantity <= 0
          ? state.items.filter(i => i.id !== action.payload.id)
          : state.items.map(i =>
              i.id === action.payload.id ? { ...i, quantity: action.payload.quantity } : i
            )
      };
    }
    
    case "REMOVE_ITEM": {
      return {
        items: state.items.filter(i => i.id !== action.payload.id)
      };
    }
    
    case "CLEAR_CART": {
      return { items: [] };
    }
    
    case "LOAD_CART": {
      return { items: action.payload };
    }
    
    default:
      return state;
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("audiophile-cart");
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        dispatch({ type: "LOAD_CART", payload: parsedCart });
      } catch (error) {
        console.error("Failed to load cart from localStorage:", error);
      }
    }
  }, []);

  // Save cart to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem("audiophile-cart", JSON.stringify(state.items));
  }, [state.items]);

  const addItem = (item: CartItem) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  const updateQuantity = (id: number, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  const removeItem = (id: number) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const getTotalPrice = () => {
    const subtotal = state.items.reduce((total, item) => 
      total + (item.price * item.quantity), 0
    );
    const shipping = 50; // Fixed shipping cost
    const vat = subtotal * 0.2; // 20% VAT on subtotal only
    return subtotal + shipping + vat;
  };

  const getSubtotal = () => {
    return state.items.reduce((total, item) => 
      total + (item.price * item.quantity), 0
    );
  };

  const getShipping = () => {
    return 50; // Fixed shipping cost
  };

  const getVAT = () => {
    const subtotal = getSubtotal();
    return subtotal * 0.2; // 20% VAT on subtotal only
  };

  const getTotalItems = () => {
    return state.items.reduce((total, item) => 
      total + item.quantity, 0
    );
  };

  const value: CartContextType = {
    items: state.items,
    addItem,
    updateQuantity,
    removeItem,
    clearCart,
    getTotalPrice,
    getSubtotal,
    getShipping,
    getVAT,
    getTotalItems,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}