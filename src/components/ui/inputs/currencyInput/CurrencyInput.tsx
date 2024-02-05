"use client";

import { cn } from "@/lib/utils";
import CInput, { CurrencyInputProps } from "react-currency-input-field";

interface Props extends CurrencyInputProps {
  name: string;
  placeholder?: string;
  value: number;
}

function CurrencyInput({ name, placeholder, value, onValueChange, className, prefix, ...props }: Props) {
  return (
    <CInput
      className={cn("w-full px-4 py-2 font-bold text-2xl text-primary outline-none bg-transparent", className)}
      name={name}
      placeholder={placeholder}
      value={value}
      decimalsLimit={2}
      onValueChange={onValueChange}
      allowNegativeValue={false}
      prefix={prefix}
      {...props}
    />
  );
}

export default CurrencyInput;
