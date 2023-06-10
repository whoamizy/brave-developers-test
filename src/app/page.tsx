"use client";
import Container from "./components/UI/Container";
import Button from "./components/UI/Button";
import OperatorsList from "./components/OperatorsList";
import { useGlobalContext } from "./context/store";
import Modal from "./components/UI/Modal";
import AddOperator from "./components/AddOperator";
import styled from "styled-components";
import { NextPage } from "next";
import { fadeIn } from "./styles/animations";

const Home: NextPage = () => {
  const { operatorsList, isShow, setIsShow } = useGlobalContext();

  const showModal = () => {
    setIsShow(true);
  };

  const hideModal = () => {
    setIsShow(false);
  };

  return (
    <StyledHome>
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

const StyledHome = styled.div`
  padding: 40px 0;
  animation: ${fadeIn} 0.5s linear;

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
