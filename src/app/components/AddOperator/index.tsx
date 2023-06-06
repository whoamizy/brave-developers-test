import React, { useState } from "react";
import TheInput from "../UI/TheInput";
import TheButton from "../UI/TheButton";
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
        <TheInput
          type="text"
          placeholder="Enter the operator name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TheButton>Add</TheButton>
      </StyledAddForm>
    </>
  );
}
