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

interface ContextProps {
  operatorsList: IOperator[];
  setOperatorsList: Dispatch<SetStateAction<IOperator[]>>;
  addNewOperator: (name: string) => void;
}

const GlobalContext = createContext<ContextProps>({
  operatorsList: operators,
  setOperatorsList: (): IOperator[] => [],
  addNewOperator: (): string => "",
});

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [operatorsList, setOperatorsList] = useState<IOperator[]>(operators);

  const addNewOperator = (name: string) => {
    const newOperator: IOperator = {
      id: name.trim(),
      name: name.trim(),
      imageUrl: NotFound,
    };

    if (
      !newOperator.name ||
      operatorsList.find((op) => op.name === newOperator.name)
    ) {
      return;
    }

    setOperatorsList([...operatorsList, newOperator]);
    console.log("Added");
  };

  return (
    <GlobalContext.Provider
      value={{
        operatorsList,
        setOperatorsList,
        addNewOperator,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);