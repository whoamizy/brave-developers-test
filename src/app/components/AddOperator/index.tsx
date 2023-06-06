import React, { useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { useGlobalContext } from "@/app/context/store";
import { StyledAddForm, StyledAddTitle } from "./styles";

export default function AddOperator() {
  const { addNewOperator } = useGlobalContext();

  const [name, setName] = useState<string>("");

  const add = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNewOperator(name);
    setName("");
  };

  return (
    <>
      <StyledAddTitle>Add an operator</StyledAddTitle>
      <StyledAddForm onSubmit={(e) => add(e)}>
        <Input
          type="text"
          placeholder="Enter the operator name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button>Add</Button>
      </StyledAddForm>
    </>
  );
}
