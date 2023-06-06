import React from "react";
import TheContainer from "../UI/Container";
import { StyledHeader, StyledHeaderInner } from "./styles";
import Logo from "../Logo";

export default function Header() {
  return (
    <StyledHeader>
      <TheContainer>
        <StyledHeaderInner>
          <Logo />
          <div>Made by Whoamizy</div>
        </StyledHeaderInner>
      </TheContainer>
    </StyledHeader>
  );
}
