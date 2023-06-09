import { IOperator } from "@/app/types/OperatorType";
import { formatName } from "@/app/utils/formatName";
import React from "react";
import {
  StyledOperatorImage,
  StyledOperatorItem,
  StyledOperatorName,
} from "./styles";

interface IProps {
  operator: IOperator;
}

export default function OperatorsItem({ operator }: IProps) {
  return (
    <StyledOperatorItem>
      <StyledOperatorImage src={operator.imageUrl} alt="icon" />
      <StyledOperatorName>{formatName(operator.name)}</StyledOperatorName>
    </StyledOperatorItem>
  );
}
