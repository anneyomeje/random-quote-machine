import React from "react";
import styled from "@emotion/styled";

import Quote from "./Quote";
import Button from "./Button";

export default function Wrapper(props) {
  const Wrapper = styled.div`
    max-width: 550px;
    min-width: 300px;
    min-height: 180px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    overflow-y: hidden;
    font-size: 2rem;
    padding: 3rem;
  `;

  return (
    <Wrapper id="quote-box">
      <Quote
        changeState={props.changeState}
        possibleQuote={props.possibleQuote}
      />
      <Button
        colorChange={props.colorChange}
        handleChange={props.handleChange}
      />
    </Wrapper>
  );
}
