import React from "react";
import { StyledModalContent, StyledModalOverlay } from "./styles";

interface IProps {
  show: boolean;
  modalHide: (e: React.MouseEvent) => void;
  children: React.ReactNode;
}

export default function Modal({ show, modalHide, children }: IProps) {
  if (!show) return null;

  return (
    <StyledModalOverlay onClick={modalHide}>
      <StyledModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </StyledModalContent>
    </StyledModalOverlay>
  );
}
