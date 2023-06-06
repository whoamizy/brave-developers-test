import React from "react";
import { StyledButton } from "./styles";

interface IProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export default function TheButton({ children, onClick, disabled }: IProps) {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
}
