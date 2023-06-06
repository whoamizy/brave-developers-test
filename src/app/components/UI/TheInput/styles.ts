"use client";

import styled from "styled-components";

export const StyledInput = styled.input`
  font-weight: 500;
  font-size: 20px;
  background: #242630;
  color: inherit;
  padding: 16px 12px;
  border: 1px solid transparent;
  border-radius: 5px;
  transition: 0.3s;
  &:focus {
    color: #fff;
    background: #45464f;
    border-color: #fff;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 12px 8px;
  }
`;
