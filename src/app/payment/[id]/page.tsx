"use client";
import OperatorsItem from "@/app/components/OperatorsItem";
import Button from "@/app/components/UI/Button";
import Container from "@/app/components/UI/Container";
import Input from "@/app/components/UI/Input";
import { useGlobalContext } from "@/app/context/store";
import { getRandom } from "@/app/utils/getRandom";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

type TProps = {
  id?: string | number;
};

const Page: NextPage<{ params: TProps }> = ({ params }) => {
  const id = params.id;
  const router = useRouter();
  const { operatorsList } = useGlobalContext();
  const [status, setStatus] = useState("");
  const [number, setNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [transitionStage, setTransitionStage] = useState("");

  useEffect(() => setTransitionStage("fadeIn"), []);

  const operator = operatorsList.find((op) => op.id === id);

  const goBack = () => {
    router.back();
  };

  const pay = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (number.replace(/[+()_-\s]/g, "").length < 11 || !amount) {
      return;
    }

    if (!submitting) {
      setSubmitting(true);
      setTimeout(() => {
        setSubmitting(false);
        setStatus("");
      }, 3000);
      if (getRandom()) {
        setStatus("✅ Success");
        setTimeout(() => {
          router.push("/");
        }, 3000);
      } else {
        setStatus("❌ Error");
      }
    }
  };

  return (
    <StyledPayment $transitionStage={transitionStage}>
      <Container>
        <StyledPaymentTop>
          <Button onClick={() => goBack()}>Back</Button>
          {status && <StyledPaymentStatus>{status}</StyledPaymentStatus>}
        </StyledPaymentTop>
        <StyledPaymentForm onSubmit={(e) => pay(e)}>
          <OperatorsItem operator={operator!} />
          <Input
            required
            type="tel"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="+7(___)___-__-__"
          />
          <Input
            required
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter the payment amount"
            min="1"
            max="1000"
          />
          <StyledPaymentTip>min 1, max 1000</StyledPaymentTip>
          <Button disabled={submitting}>Pay</Button>
        </StyledPaymentForm>
      </Container>
    </StyledPayment>
  );
};

export default Page;

const StyledPayment = styled.div<{ $transitionStage?: string }>`
  padding: 40px 0;
  transition: 0.5s;
  opacity: 0;

  ${(props) =>
    props.$transitionStage === "fadeIn" &&
    css`
      opacity: 1;
    `};

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;

const StyledPaymentTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const StyledPaymentStatus = styled.div`
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

const StyledPaymentForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 500px;
  margin: 0 auto;
`;

const StyledPaymentTip = styled.div`
  font-size: 14px;
  margin-top: -10px;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
