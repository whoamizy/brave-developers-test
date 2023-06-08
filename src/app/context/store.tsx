"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { IOperator } from "../types/OperatorType";
import { operators } from "../constants/operators";
import NotFound from "../assets/images/not-found.svg";
import { nanoid } from "nanoid";

interface ContextProps {
  operatorsList: IOperator[];
  setOperatorsList: Dispatch<SetStateAction<IOperator[]>>;
  isShow: boolean;
  setIsShow: Dispatch<SetStateAction<boolean>>;
  addNewOperator: (name: string) => void;
}

const defaultValues: ContextProps = {
  operatorsList: [],
  setOperatorsList: () => undefined,
  isShow: false,
  setIsShow: () => undefined,
  addNewOperator: () => undefined,
};

const GlobalContext = createContext<ContextProps>(defaultValues);

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [operatorsList, setOperatorsList] = useState<IOperator[]>(operators);
  const [isShow, setIsShow] = useState<boolean>(false);

  const addNewOperator = (name: string) => {
    const newOperator: IOperator = {
      id: nanoid(),
      name: name.trim(),
      imageUrl: NotFound,
    };

    if (
      !newOperator.name ||
      operatorsList.find((op) => op.name === newOperator.name)
    ) {
      return;
    }

    setOperatorsList((operators) => [...operators, newOperator]);
    setIsShow(false);
    console.log("Added");
  };

  return (
    <GlobalContext.Provider
      value={{
        operatorsList,
        setOperatorsList,
        isShow,
        setIsShow,
        addNewOperator,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
