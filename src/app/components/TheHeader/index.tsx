import React from "react";
import TheContainer from "../UI/TheContainer";
import { StyledHeader, StyledHeaderInner } from "./styles";
import TheLogo from "../TheLogo";

export default function TheHeader() {
  return (
    <StyledHeader>
      <TheContainer>
        <StyledHeaderInner>
          <TheLogo />
          <div>Made by Whoamizy</div>
        </StyledHeaderInner>
      </TheContainer>
    </StyledHeader>
  );
}
