"use client";

import styled, { css } from "styled-components";

export const StyledPayment = styled.div<{ $transitionStage?: boolean }>`
  padding: 40px 0;
  transition: 0.5s;
  opacity: 0;

  ${(props) =>
    props.$transitionStage &&
    css`
      opacity: 1;
    `};

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

export const StyledPaymentStatus = styled.div`
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

export const StyledPaymentSuccess = styled.div`
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  color: #49bc91;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const StyledPaymentError = styled.span`
  color: #f5685a;
  font-size: 14px;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
