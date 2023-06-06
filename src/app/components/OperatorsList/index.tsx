import { IOperator } from "@/app/types/OperatorType";
import Link from "next/link";
import React from "react";
import { StyledOperatorsList } from "./styles";
import OperatorsItem from "../OperatorsItem";

interface IProps {
  operators: IOperator[];
}

export default function OperatorsList({ operators }: IProps) {
  return (
    <StyledOperatorsList>
      {operators.map((op) => (
        <li key={op.id}>
          <Link href={`/payment/${op.id}`}>
            <OperatorsItem operator={op} />
          </Link>
        </li>
      ))}
    </StyledOperatorsList>
  );
}
