import React from "react";
import { StyledContainer } from "./styles";

interface IProps {
  children: React.ReactNode;
}

export default function Container({ children }: IProps) {
  return <StyledContainer>{children}</StyledContainer>;
}
