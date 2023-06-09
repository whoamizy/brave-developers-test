"use client";
import { fetchPaymentResponse } from "@/app/api";
import OperatorsItem from "@/app/components/OperatorsItem";
import Button from "@/app/components/UI/Button";
import Container from "@/app/components/UI/Container";
import Input from "@/app/components/UI/Input";
import { useGlobalContext } from "@/app/context/store";
import { IResponse, ResponseMessage } from "@/app/types/ResponseType";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  StyledPayment,
  StyledPaymentError,
  StyledPaymentForm,
  StyledPaymentStatus,
  StyledPaymentSuccess,
  StyledPaymentTip,
  StyledPaymentTop,
} from "./styles";

type TProps = {
  id: string | number;
};

const Page: NextPage<{ params: TProps }> = ({ params }) => {
  const id = params.id;
  const router = useRouter();
  const { operatorsList } = useGlobalContext();
  const [number, setNumber] = useState("");
  const [numberError, setNumberError] = useState(false);
  const [amount, setAmount] = useState("");
  const [amountError, setAmountError] = useState(false);
  const [paymentResponse, setPaymentResponse] = useState<IResponse>({
    fetched: false,
    isSuccess: false,
    message: ResponseMessage.Failure,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    setIsLoad(true);
  }, []);

  const operator = operatorsList.find((op) => op.id === id);

  function goHome() {
    router.push("/");
  }

  function goBack() {
    router.back();
  }

  const pay = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (number.replace(/[^\d]/g, "").length !== 11) {
      setNumberError(true);
      return;
    } else {
      setNumberError(false);
    }
    if (!amount.length) {
      setAmountError(true);
      return;
    } else {
      setAmountError(false);
    }

    try {
      setIsLoading(true);
      await fetchPaymentResponse().then((data) => setPaymentResponse(data));
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (paymentResponse.isSuccess) {
      setTimeout(() => {
        goHome();
      }, 3000);
    }
  }, [paymentResponse.isSuccess]);

  return (
    <StyledPayment $transitionStage={isLoad}>
      <Container>
        <StyledPaymentTop>
          <Button onClick={goBack}>Back</Button>
          {paymentResponse.fetched && (
            <StyledPaymentStatus>{paymentResponse.message}</StyledPaymentStatus>
          )}
        </StyledPaymentTop>
        {paymentResponse.isSuccess && (
          <StyledPaymentSuccess>
            🎉 Successful! 🎉
            <br />
            In a couple of seconds it will take you to the home page
          </StyledPaymentSuccess>
        )}
        <StyledPaymentForm onSubmit={pay}>
          <OperatorsItem operator={operator!} />
          {numberError && (
            <StyledPaymentError>Incorrect number</StyledPaymentError>
          )}
          <Input
            type="tel"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="+7(___)___-__-__"
          />
          {amountError && (
            <StyledPaymentError>Required field</StyledPaymentError>
          )}
          <Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter the payment amount"
            min="1"
            max="1000"
          />
          <StyledPaymentTip>min 1, max 1000</StyledPaymentTip>
          <Button disabled={isLoading}>{isLoading ? "Loading" : "Pay"}</Button>
        </StyledPaymentForm>
      </Container>
    </StyledPayment>
  );
};

export default Page;
