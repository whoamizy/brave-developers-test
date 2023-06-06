"use client";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 16px;
    line-height: 1;
    background: #1A1B26;
    color: #868AA4;
  }

  .page {
    transition: 0.5s;
    opacity: 0;
  }

  .fadeIn {
    opacity: 1;
  }

  @media (max-width: 768px){
    body {
      font-size: 14px;
    }
  }
`;
