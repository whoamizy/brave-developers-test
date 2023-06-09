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
  StyledPaymentForm,
  StyledPaymentMessage,
  StyledPaymentTip,
  StyledPaymentTop,
} from "./styles";

type TProps = {
  id: string;
};

const Page: NextPage<{ params: TProps }> = ({ params }) => {
  const id = params.id;
  const router = useRouter();
  const { operatorsList } = useGlobalContext();
  const [number, setNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [paymentResponse, setPaymentResponse] = useState<IResponse>({
    isFetched: false,
    isSuccess: false,
    message: ResponseMessage.Failure,
  });
  const [isLoading, setIsLoading] = useState(false);

  const operator = operatorsList.find((op) => op.id === id);

  function goHome() {
    router.push("/");
  }

  function goBack() {
    router.back();
  }

  const pay = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      await fetchPaymentResponse().then((data) => setPaymentResponse(data));
      setIsLoading(false);
      setNumber("");
      setAmount("");
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (
      number.replace(/[^\d]/g, "").length !== 11 ||
      +amount <= 0 ||
      +amount > 1000
    ) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [number, amount]);

  useEffect(() => {
    if (paymentResponse.isSuccess) {
      setTimeout(() => {
        goHome();
      }, 3000);
    }
  }, [paymentResponse.isSuccess]);

  return (
    <StyledPayment>
      <Container>
        <StyledPaymentTop>
          <Button onClick={goBack}>Back</Button>
          {paymentResponse.isFetched && (
            <StyledPaymentMessage>
              {paymentResponse.message}
            </StyledPaymentMessage>
          )}
        </StyledPaymentTop>
        <StyledPaymentForm onSubmit={pay}>
          <OperatorsItem operator={operator!} />
          <Input
            type="tel"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="+7(___)___-__-__"
          />
          <Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter the payment amount"
            min="1"
            max="1000"
          />
          <StyledPaymentTip>min 1, max 1000</StyledPaymentTip>
          <Button disabled={isDisabled || isLoading}>
            {isLoading ? "Loading" : "Pay"}
          </Button>
        </StyledPaymentForm>
      </Container>
    </StyledPayment>
  );
};

export default Page;
