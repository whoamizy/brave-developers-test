import React, { useEffect, useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { useGlobalContext } from "@/app/context/store";
import { StyledAddForm, StyledAddError, StyledAddTitle } from "./styles";

export default function AddOperator() {
  const { addNewOperator, operatorsList } = useGlobalContext();
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const add = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      operatorsList.find((op) => op.name.toLowerCase() === name.toLowerCase())
    ) {
      setErrorMessage("Such an operator is already added");
      setIsDisabled(true);
      setName("");
      return;
    }

    setIsDisabled(false);
    addNewOperator(name);
    setName("");
  };

  useEffect(() => {
    if (!name.length) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
      setErrorMessage("");
    }
  }, [name]);

  return (
    <>
      <StyledAddTitle>Add an operator</StyledAddTitle>
      {errorMessage && <StyledAddError>{errorMessage}</StyledAddError>}
      <StyledAddForm onSubmit={add}>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter the operator name"
        />
        <Button disabled={isDisabled}>Add</Button>
      </StyledAddForm>
    </>
  );
}
