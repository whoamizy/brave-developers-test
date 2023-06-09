"use client";

import { fadeIn } from "@/app/styles/animations";
import styled from "styled-components";

export const StyledPayment = styled.div`
  padding: 40px 0;
  animation: ${fadeIn} 0.5s linear;

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;

export const StyledPaymentTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const StyledPaymentMessage = styled.div`
  font-weight: 500;
  font-size: 32px;
  transition: 0.3s;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const StyledPaymentForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 500px;
  margin: 0 auto;
`;

export const StyledPaymentTip = styled.div`
  font-size: 14px;
  margin-top: -10px;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
