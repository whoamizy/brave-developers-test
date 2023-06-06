import React from "react";
import { StyledInput } from "./styles";

interface IProps {
  type: string;
  value: number | string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  // ref?: HTMLInputElement;
}

// +7 (___) ___-__-__
export default function TheInput({
  type,
  value,
  onChange,
  placeholder,
}: IProps) {
  return (
    <StyledInput
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
