"use client";

import styled from "styled-components";

export const StyledButton = styled.button`
  cursor: pointer;
  font-weight: 500;
  font-size: 20px;
  background: #242630;
  color: inherit;
  padding: 16px 12px;
  border-radius: 5px;
  transition: 0.3s;
  &:hover {
    color: #fff;
    background: #45464f;
  }
  &:disabled {
    cursor: not-allowed;
    pointer-events: none;
    opacity: 0.5;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 12px 8px;
  }
`;
