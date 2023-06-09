"use client";

import styled from "styled-components";

export const StyledAddForm = styled.form`
  display: flex;
  gap: 10px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const StyledAddTitle = styled.h2`
  text-align: center;
  font-weight: 700;
  font-size: 32px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 10px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const StyledAddError = styled.div`
  color: #f5685a;
  font-size: 14px;
  text-align: center;
  margin-bottom: 10px;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
