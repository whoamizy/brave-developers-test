import React from "react";
import { StyledTitle } from "./styles";

interface IProps {
  children: React.ReactNode;
}

export default function TheTitle({ children }: IProps) {
  return <StyledTitle>{children}</StyledTitle>;
}
