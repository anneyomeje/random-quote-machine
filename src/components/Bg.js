import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

import Wrapper from "./Wrapper";

export default function Bg(props) {
  const fadeIn = keyframes({ from: { opacity: 0.7 }, to: { opacity: 1 } });

  const Bg = styled.div`
    background-color: ${props.colorChange};
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation: ${fadeIn} 5s;
  `;
  return (
    <Bg>
      <Wrapper
        colorChange={props.colorChange}
        changeState={props.changeState}
        handleChange={props.handleChange}
        possibleQuote={props.possibleQuote}
      />
      <p className="main-author">by Annie</p>
    </Bg>
  );
};
