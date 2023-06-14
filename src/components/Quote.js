import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export default function Quote(props) {
  const fadeIn = keyframes({ from: { opacity: 0 }, to: { opacity: 1 } });

  const Text = styled.div`
    text-align: center;
    font-size: 1.8rem;
    animation: ${fadeIn} 2s;
  `;

  const Author = styled.div`
    width: 100%;
    text-align: right;
    font-size: initial;
    margin-top: 1rem;
    animation: ${fadeIn} 2s;
  `;

  const { quote, author } = props.possibleQuote[
    props.changeState.randomIndexQuote
  ];
  return (
    <>
      <Text id="text">"{quote}"</Text>
      <Author id="author">- {author}</Author>
    </>
  );
}
