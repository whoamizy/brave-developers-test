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

const GlobalContext = createContext<ContextProps>({
  operatorsList: operators,
  setOperatorsList: (): IOperator[] => [],
  isShow: false,
  setIsShow: (): boolean => false,
  addNewOperator: (): string => "",
});

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
    console.log(newOperator);

    if (
      !newOperator.name ||
      operatorsList.find((op) => op.id === newOperator.id)
    ) {
      return;
    }

    setOperatorsList([...operatorsList, newOperator]);
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
