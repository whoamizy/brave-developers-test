"use client";
import { styled } from "styled-components";
import TheContainer from "./components/UI/TheContainer";
import TheTitle from "./components/UI/TheTitle";
import TheButton from "./components/UI/TheButton";
import OperatorsList from "./components/OperatorsList";
import { useGlobalContext } from "./context/store";
import TheModal from "./components/UI/TheModal";
import { useState } from "react";
import AddOperator from "./components/AddOperator";

export default function Home() {
  const { operatorsList } = useGlobalContext();
  const [isShow, setIsShow] = useState<boolean>(false);

  const showModal = () => {
    setIsShow(true);
  };

  const hideModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsShow(false);
  };

  return (
    <main>
      <StyledHome>
        <TheContainer>
          <div className="home__inner">
            <StyledHomeTop>
              <TheTitle>Mobile Operators</TheTitle>
              <TheButton onClick={showModal}>Add New Operator</TheButton>
            </StyledHomeTop>
            <OperatorsList operators={operatorsList} />
          </div>
        </TheContainer>
      </StyledHome>
      <TheModal show={isShow} modalHide={hideModal}>
        <AddOperator />
      </TheModal>
    </main>
  );
}

const StyledHome = styled.div`
  padding: 40px 0;

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;

const StyledHomeTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;
