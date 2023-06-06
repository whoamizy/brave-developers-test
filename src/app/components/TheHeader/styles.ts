"use client";
import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 20px 0;
  background: #242630;

  @media (max-width: 768px) {
    padding: 15px 0;
  }
`;

export const StyledHeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
