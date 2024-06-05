import { useState } from "react";
import styled from "styled-components";

const RoleDice = () => {
    const [currentDice, setCurrentDice] = useState();

    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
      }

  return (
    <DiceContainer>
      <div className="dice" onClick={() => generateRandomNumber(1,6)}>
        <img src="/images/dice_1.png" alt="" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;

  p{
    font-family: Poppins;
font-size: 24px;
font-weight: 500;
line-height: 36px;
text-align: left;

  }

  .dice{
    cursor: pointer;
  }
`;
