"use client";

import { Minus, Plus } from "lucide-react";
import Button from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface QuantitySelectorProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

export default function QuantitySelector({
  value,
  onChange,
  min = 1,
  max = 99,
  size = "md",
  disabled = false,
}: QuantitySelectorProps) {
  const handleDecrement = () => {
    if (value > min && !disabled) {
      onChange(value - 1);
    }
  };

  const handleIncrement = () => {
    if (value < max && !disabled) {
      onChange(value + 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value) || min;
    if (newValue >= min && newValue <= max && !disabled) {
      onChange(newValue);
    }
  };

  const sizeClasses = {
    sm: "h-8",
    md: "h-10", 
    lg: "h-12",
  };

  return (
    <div className={`flex items-center border border-gray-300 rounded-md bg-gray-100 ${sizeClasses[size]}`}>
      <Button
        variant="ghost"
        size="sm"
        className={`${sizeClasses[size]} w-10 p-0 hover:bg-gray-200 disabled:opacity-50 text-black/50 hover:text-black`}
        onClick={handleDecrement}
        disabled={disabled || value <= min}
      >
        <Minus className="h-4 w-4" />
      </Button>

      <Input
        type="number"
        min={min}
        max={max}
        value={value}
        onChange={handleInputChange}
        disabled={disabled}
        className={`${sizeClasses[size]} w-16 text-center border-0 focus:ring-0 focus:border-0 bg-transparent font-bold text-black`}
      />

      <Button
        variant="ghost"
        size="sm"
        className={`${sizeClasses[size]} w-10 p-0 hover:bg-gray-200 disabled:opacity-50 text-black/50 hover:text-black`}
        onClick={handleIncrement}
        disabled={disabled || value >= max}
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
}