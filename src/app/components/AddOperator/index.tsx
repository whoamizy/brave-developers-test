import React, { useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { useGlobalContext } from "@/app/context/store";
import { StyledAddForm, StyledAddError, StyledAddTitle } from "./styles";

export default function AddOperator() {
  const { addNewOperator, operatorsList } = useGlobalContext();
  const [name, setName] = useState("");
  const [error, setError] = useState({
    isIncorrect: false,
    message: "",
  });

  const add = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.length) {
      setError({
        isIncorrect: true,
        message: "Required field",
      });
      return;
    }
    if (operatorsList.find((op) => op.name === name)) {
      setError({
        isIncorrect: true,
        message: "An operator with this name has already been added",
      });
      return;
    }
    addNewOperator(name);
    setError({
      isIncorrect: false,
      message: "",
    });
    setName("");
  };

  return (
    <>
      <StyledAddTitle>Add an operator</StyledAddTitle>
      {error.isIncorrect && <StyledAddError>{error.message}</StyledAddError>}
      <StyledAddForm onSubmit={add}>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter the operator name"
        />
        <Button>Add</Button>
      </StyledAddForm>
    </>
  );
}
