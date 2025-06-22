/**
 * Common types used across the application
 */

export interface ResponsiveImage {
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface PaginationParams {
  page: number;
  limit: number;
  total: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  errors?: Record<string, string[]>;
}

export interface ApiError {
  message: string;
  code?: string;
  statusCode?: number;
}

export interface SelectOption {
  label: string;
  value: string;
}

export interface BaseEntity {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Address {
  name: string;
  email: string;
  phone: string;
  address: string;
  zipCode: string;
  city: string;
  country: string;
}

export type SortOrder = 'asc' | 'desc';

export interface SortParams {
  field: string;
  order: SortOrder;
}

export interface FilterParams {
  [key: string]: string | number | boolean | string[] | undefined;
}