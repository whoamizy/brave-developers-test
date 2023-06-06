import { IOperator } from "@/app/types/OperatorType";
import { useSliceName } from "@/app/utils/useSliceName";
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
      <StyledOperatorName>{useSliceName(operator.name)}</StyledOperatorName>
    </StyledOperatorItem>
  );
}
