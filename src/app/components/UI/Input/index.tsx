import React from "react";
import { StyledInputWrapper } from "./styles";
import InputMask from "react-input-mask";

interface IProps {
  type: string;
  value: number | string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  min?: string;
  max?: string;
  required?: boolean;
}

export default function Input({
  type,
  value,
  onChange,
  placeholder,
  min,
  max,
  required,
}: IProps) {
  function pickInput() {
    if (type === "tel") {
      return (
        <InputMask
          required={required}
          type={type}
          value={value}
          onChange={onChange}
          mask="+7(999)999-99-99"
          placeholder={placeholder}
        />
      );
    } else if (type === "number") {
      return (
        <input
          required={required}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          min={min}
          max={max}
        />
      );
    } else {
      return (
        <input
          required={required}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      );
    }
  }
  return <StyledInputWrapper>{pickInput()}</StyledInputWrapper>;
}
