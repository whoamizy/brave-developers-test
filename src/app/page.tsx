"use client";
import Container from "./components/UI/Container";
import Button from "./components/UI/Button";
import OperatorsList from "./components/OperatorsList";
import { useGlobalContext } from "./context/store";
import Modal from "./components/UI/Modal";
import AddOperator from "./components/AddOperator";
import styled, { css } from "styled-components";
import { NextPage } from "next";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const { operatorsList, isShow, setIsShow } = useGlobalContext();
  const [isPageLoad, setIsPageLoad] = useState(false);

  useEffect(() => {
    setIsPageLoad(true);
  }, []);

  const showModal = () => {
    setIsShow(true);
  };

  const hideModal = () => {
    setIsShow(false);
  };

  return (
    <StyledHome $transition={isPageLoad}>
      <Container>
        <StyledHomeTop>
          <StyledHomeTitle>Mobile Operators</StyledHomeTitle>
          <Button onClick={showModal}>Add New Operator</Button>
        </StyledHomeTop>
        <OperatorsList operators={operatorsList} />
      </Container>
      <Modal show={isShow} modalHide={hideModal}>
        <AddOperator />
      </Modal>
    </StyledHome>
  );
};

export default Home;

const StyledHome = styled.div<{ $transition?: boolean }>`
  padding: 40px 0;
  opacity: 0;
  transition: 0.5s;

  ${(props) =>
    props.$transition &&
    css`
      opacity: 1;
    `};

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
