import React, { Component } from "react";
import TotalScore from "./TotalScore";
import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";

export default class GamePlay extends Component {
  render() {
    return (
      <MainContainer>
        <div className="top_section">
          <TotalScore />
          <NumberSelector />
        </div>
        <RoleDice />
      </MainContainer>
    );
  }
}



const MainContainer = styled.main`
padding-top: 64px;

.top_section{
  display: flex;
  justify-content: space-around;
  align-items: end;
}
`;
