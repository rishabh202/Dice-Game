import React, { Component } from "react";
import styled from "styled-components";

export default class Home extends Component {
  render() {
    return (
      <Container>
        <div>

        <img
          src="https://s3-alpha-sig.figma.com/img/fce5/e0a7/6d3e531201ecd44ca61f9d27ff82e0ae?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eF6ypf60Q~uoHjG8Al2giBm23kUQ7QdIwZl4jhHcDo2FUioLPkrFXseJax5PmXHa8ah8jVCFVD5HF9eWX2U0X7rGwueLUchgFfbYs3pOumgGueXzLTddcH9x~4Tfr1Aexc4J0pD2uFoz8YGVsjoNZfjA~eDLrg67zSYSBujFE6TFbg5573l3FaAz~hxZ5jzt2ZZbUldd7OLoqsUhXsHSHuNBWSHab95~2J6edvLri1DMYWuc4ufv0FUtYsDMY46vg7GPmgCWau1tekjjUq2Pz7-NPR6nrDk4K-2DWb1kBM-hLHC0Zp6n~OAknKzM2Vukmrsyf4NnjfDhFDIdRAdjjw__"
          alt="dice image"
        />
        </div>

        <div className="contents">
          <h1>Dice Game</h1>
          <Button onClick={this.props.toggle}>Play Now</Button>
        </div>
      </Container>
    );
  }
}

const Container = styled.div`
  max-width: 1182px;
  display: flex;
  margin: 0 auto;
  height: 100vh;

  align-items: center;
  

  .contents {
     h1{
      font-size: 96px;
      white-space: nowrap;
     }
  }
`;

const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px 18px;
  min-width: 220px;
  border-radius: 5px;
  font-family: Poppins;
  font-size: 18px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: 0.4s background ease-in;
  border: 1px solid transparent;

  &:hover{
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.3s background ease-in;
  }
`;
