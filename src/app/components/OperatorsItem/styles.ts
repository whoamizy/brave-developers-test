"use client";

import Image from "next/image";
import styled from "styled-components";

export const StyledOperatorItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 10px;
  border: 1px solid #8095af;
  border-radius: 5px;

  @media (max-width: 768px) {
    padding: 10px 8px;
  }
`;

export const StyledOperatorImage = styled(Image)`
  display: block;
  width: 44px;
  height: 44px;
  object-fit: cover;

  @media (max-width: 480px) {
    width: 38px;
    height: 38px;
  }
`;

export const StyledOperatorName = styled.div`
  font-weight: 500;
  font-size: 24px;
  color: #868aa4;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;
