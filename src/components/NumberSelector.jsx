import styled from "styled-components";
import { useState } from "react";

const NumberSelector = () => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  // Initialize with undefined or a default value (like arrNumber[0])
  const [selectedNumber, setSelectedNumber] = useState(undefined);

  return (
    <NumberSelectorContainer>
      <div className="flex">
        {arrNumber.map((value, i) => (
          <Box
            isSelected={value === selectedNumber} // Compare with selectedNumber
            key={i}
            onClick={() => setSelectedNumber(value)} // Set selectedNumber on click
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 30px;

  .flex {
    display: flex;
    width: 552px;
    height: 72px;
    gap: 24px;
  }

  p {
    font-family: Poppins;
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
    text-align: left;
  }
`;

const Box = styled.div`
  width: 72px;
  height: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;

  background-color: ${({ isSelected }) => (isSelected ? "black" : "white")};
  color: ${({ isSelected }) => (isSelected ? "white" : "black")};

  font-family: Poppins;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  text-align: left;

  cursor: pointer;
`;
