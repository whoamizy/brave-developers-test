"use client";

import styled from "styled-components";

export const StyledModalOverlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledModalContent = styled.div`
  background: #1a1b26;
  padding: 10px;
  border-radius: 5px;
`;
