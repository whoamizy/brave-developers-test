"use client";
import { styled } from "styled-components";
import Container from "./components/UI/Container";
import Button from "./components/UI/Button";
import OperatorsList from "./components/OperatorsList";
import { useGlobalContext } from "./context/store";
import Modal from "./components/UI/Modal";
import { useEffect, useState } from "react";
import AddOperator from "./components/AddOperator";

export default function Home() {
  const { operatorsList, isShow, setIsShow } = useGlobalContext();
  const [transitionStage, setTransitionStage] = useState("fadeOut");

  useEffect(() => setTransitionStage("fadeIn"), []);

  const showModal = () => {
    setIsShow(true);
  };

  const hideModal = () => {
    setIsShow(false);
  };

  return (
    <>
      <StyledHome className={`page ${transitionStage}`}>
        <Container>
          <div className="home__inner">
            <StyledHomeTop>
              <StyledHomeTitle>Mobile Operators</StyledHomeTitle>
              <Button onClick={showModal}>Add New Operator</Button>
            </StyledHomeTop>
            <OperatorsList operators={operatorsList} />
          </div>
        </Container>
      </StyledHome>
      <Modal show={isShow} modalHide={hideModal}>
        <AddOperator />
      </Modal>
    </>
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

const StyledHomeTitle = styled.h1`
  font-weight: 700;
  font-size: 36px;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;
