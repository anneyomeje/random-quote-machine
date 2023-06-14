import React from "react";
import styled from "@emotion/styled";

import Bg from "./Bg";

export default function Container(props) {
  const colorChange = props.colors[props.changeState.randomIndexColor];

  const Container = styled.div`
    color: ${colorChange};
  `;

  return (
    <Container>
      <Bg
        colorChange={colorChange}
        changeState={props.changeState}
        handleChange={props.handleChange}
        possibleQuote={props.possibleQuote}
      />
    </Container>
  );
}
