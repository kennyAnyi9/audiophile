/**
 * Checkout-related type definitions
 */

// Using inline cart types since cart types are defined in cart-store
interface CartItem {
  id: number;
  slug: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartSummary {
  subtotal: number;
  shipping: number;
  vat: number;
  total: number;
  itemCount: number;
}

export interface BillingDetails {
  name: string;
  email: string;
  phone: string;
}

export interface ShippingDetails {
  address: string;
  city: string;
  zipCode: string;
  country: string;
}

export type PaymentMethod = 'e-money' | 'cash' | 'stripe';

export interface PaymentDetails {
  method: PaymentMethod;
  eMoneyNumber?: string;
  eMoneyPin?: string;
  stripePaymentIntentId?: string;
}

export interface CheckoutFormData {
  billing: BillingDetails;
  shipping: ShippingDetails;
  payment: PaymentDetails;
  useBillingForShipping?: boolean;
  saveDetails?: boolean;
}

export interface CheckoutState {
  currentStep: number;
  formData: Partial<CheckoutFormData>;
  isProcessing: boolean;
  error: string | null;
  orderId?: string;
}

export interface CheckoutStepProps {
  step: number;
  isActive: boolean;
  isCompleted: boolean;
  title: string;
  description?: string;
}

export interface CheckoutFormProps {
  initialData?: Partial<CheckoutFormData>;
  onSubmit: (data: CheckoutFormData) => Promise<void>;
  onStepChange?: (step: number) => void;
  isProcessing?: boolean;
  error?: string | null;
}

export interface OrderSummaryProps {
  items: CartItem[];
  summary: CartSummary;
  showEditLink?: boolean;
  variant?: 'default' | 'compact' | 'detailed';
}

export interface PaymentMethodsProps {
  selectedMethod: PaymentMethod;
  onMethodChange: (method: PaymentMethod) => void;
  disabled?: boolean;
}

export interface BillingFormProps {
  data: Partial<BillingDetails>;
  onChange: (data: Partial<BillingDetails>) => void;
  errors?: Record<string, string>;
}

export interface ShippingFormProps {
  data: Partial<ShippingDetails>;
  onChange: (data: Partial<ShippingDetails>) => void;
  errors?: Record<string, string>;
  useBillingAddress?: boolean;
  onUseBillingChange?: (use: boolean) => void;
}

export interface CheckoutProgressProps {
  steps: CheckoutStepProps[];
  currentStep: number;
  onStepClick?: (step: number) => void;
}

export interface OrderConfirmation {
  orderId: string;
  items: CartItem[];
  summary: CartSummary;
  shipping: ShippingDetails;
  billing: BillingDetails;
  payment: PaymentDetails;
  estimatedDelivery?: Date;
}

export interface OrderConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  order: OrderConfirmation;
}