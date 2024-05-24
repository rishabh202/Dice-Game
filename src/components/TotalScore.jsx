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
 h2{
    font-size: 24px;
 }    

`;