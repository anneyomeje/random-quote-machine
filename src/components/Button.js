import React from "react";
import { faTwitter, faTumblr } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "@emotion/styled";

export default function Button(props) {
  const Buttons = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
  `;

  const Button = styled.button`
    margin-top: 2rem;
    background-color: ${props.colorChange};
    color: white;
    border: none;
    height: 2.5rem;
    border-radius: 4px;
    padding: 0 1rem;
    font-size: 1rem;
    &:nth-of-type(1) {
      margin-right: 0.5rem;
    }
    &:hover {
      background-color: ${props.colorChange};
      opacity: 0.9;
    }
  `;

  return (
    <Buttons>
      <div className="left">
        <Button>
          <a
            href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22Everything%20has%20beauty%2C%20but%20not%20everyone%20can%20see.%22%20Confucius"
            id="tweet-quote"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </Button>
        <Button>
          <a
            href="https://www.tumblr.com/login?redirect_to=https%3A%2F%2Fwww.tumblr.com%2Fwidgets%2Fshare%2Ftool%3Fposttype%3Dquote%26tags%3Dquotes%252Cfreecodecamp%26caption%3DConfucius%26content%3DEverything%2Bhas%2Bbeauty%252C%2Bbut%2Bnot%2Beveryone%2Bcan%2Bsee.%26canonicalUrl%3Dhttps%253A%252F%252Fwww.tumblr.com%252Fbuttons%26shareSource%3Dtumblr_share_button"
            id="tumblr-quote"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faTumblr} />
          </a>
        </Button>
      </div>
      <Button id="new-quote" onClick={props.handleChange}>
        New quote
      </Button>
    </Buttons>
  );
}
