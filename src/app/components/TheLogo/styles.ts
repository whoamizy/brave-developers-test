"use client";
import styled from "styled-components";
import Link from "next/link";

export const StyledLogo = styled(Link)`
  cursor: pointer;
  font-weight: 500;
  font-size: 24px;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;
