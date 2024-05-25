import React, { Component } from "react";
import styled from "styled-components";

export default class TotalScore extends Component {
  render() {
    return (
      <ScoreContainer>
        <div>
          <h2>0</h2>
          <p>Total Score</p>
        </div>
      </ScoreContainer>
    );
  }
}

const ScoreContainer = styled.div`

text-align: center;
max-width:  190px;

  h2 {
    font-family: Poppins;
font-size: 100px;
font-weight: 500;
line-height: 100px;

  }

  p{
    font-family: Poppins;
font-size: 24px;
font-weight: 500;
line-height: 36px;

  }
`;
