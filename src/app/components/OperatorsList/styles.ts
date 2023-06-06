"use client";

import styled from "styled-components";

export const StyledOperatorsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  & li {
    cursor: pointer;
    flex: 0 1 calc(25% - 15px);
    overflow: hidden;
    transition: 0.3s;
    &:hover {
      background: #242630;
    }
  }

  @media (max-width: 992px) {
    & li {
      flex: 0 1 calc(33.3% - 13.1px);
    }
  }

  @media (max-width: 768px) {
    gap: 10px;
    & li {
      flex: 0 1 calc(50% - 5px);
    }
  }

  @media (max-width: 480px) {
    & li {
      flex: 0 1 100%;
    }
  }
`;
