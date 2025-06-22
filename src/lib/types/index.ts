/**
 * Central type exports for the entire application
 */

// Common types
export * from './common.types';
export * from './ui.types';

// Database types (re-export from schema)
export type {
  User as DbUser,
  Product as DbProduct,
  Cart as DbCart,
  CartItem as DbCartItem,
  Order as DbOrder,
  OrderItem as DbOrderItem,
  Session as DbSession,
  Account as DbAccount,
  Verification as DbVerification,
} from '../../server/db/schema';