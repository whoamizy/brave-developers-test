"use client";
import { IOperator } from "@/app/types/OperatorType";
import React from "react";
import { StyledOperatorsList } from "./styles";
import OperatorsItem from "../OperatorsItem";
import { useRouter } from "next/navigation";

interface IProps {
  operators: IOperator[];
}

export default function OperatorsList({ operators }: IProps) {
  const router = useRouter();

  const goToOperator = (id: string | number) => {
    router.push(`/payment/${id}`);
  };

  return (
    <StyledOperatorsList>
      {operators.map((op) => (
        <li key={op.id} onClick={() => goToOperator(op.id)}>
          <OperatorsItem operator={op} />
        </li>
      ))}
    </StyledOperatorsList>
  );
}
