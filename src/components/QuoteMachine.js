import React, { Component } from "react";
import Container from "./Container";

const colors = [
  "rgb(161, 107, 161)",
  "rgb(46, 71, 100)",
  "rgb(181, 68, 66)",
  "rgb(110, 39, 89)",
  "rgb(102, 122, 110)",
  "rgb(3, 167, 55)",
  "rgb(95, 51, 31)",
  "rgb(98, 89, 95)",
  "rgb(20, 18, 18)",
  "rgb(218, 24, 132)",
  "rgb(193, 154, 107)",
  "rgb(106, 28, 15)"
];

const possibleQuote = [
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela"
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    quote:
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking.",
    author: "Steve Jobs"
  },
  {
    quote:
      "If life were predictable it would cease to be life, and be without flavor.",
    author: "Eleanor Roosevelt"
  },
  {
    quote:
      "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    author: "Oprah Winfrey"
  },
  {
    quote:
      "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    author: "James Cameron"
  },
  {
    quote:
      "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    author: "Mother Teresa"
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    quote: "When you reach the end of your rope, tie a knot in it and hang on",
    author: "Franklin D. Roosevelt"
  },
  {
    quote:
      "Always remember that you are absolutely unique. Just like everyone else.",
    author: "Margaret Mead"
  },
  {
    quote:
      "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.",
    author: "Helen Keller"
  },
  {
    quote:
      "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    author: "Benjamin Franklin"
  },
  {
    quote:
      "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle"
  },
  {
    quote:
      "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author: "Maya Angelou"
  },
  {
    quote:
      "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    author: "Thomas A. Edison"
  },
  {
    quote:
      "Life is never fair, and perhaps it is a good thing for most of us that it is not.",
    author: "Oscar Wilde"
  },
  {
    quote: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins"
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West"
  },
  {
    quote: "Life itself is the most wonderful fairy tale.",
    author: "Hans Christian Andersen"
  },
  { quote: "May you live all the days of your life.", author: "Jonathan Swift" }
];

function getRandomColor() {
  return Math.floor(Math.random() * colors.length);
}

function getRandomQuote() {
  return Math.floor(Math.random() * possibleQuote.length);
}

export default class QuoteMachine extends Component {
  constructor(props) {
    super(props);

    this.state = {
      randomIndexQuote: getRandomQuote(),
      randomIndexColor: getRandomColor()
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    if (this.state.randomIndexQuote) {
      this.setState({
        randomIndexQuote: getRandomQuote(),
        randomIndexColor: getRandomColor()
      });
    }
  }

  render() {
    return (
      <Container
        changeState={this.state}
        handleChange={this.handleChange}
        possibleQuote={possibleQuote}
        colors={colors}
      />
    );
  }
}
