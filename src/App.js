import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { ReactTypeformEmbed } from "react-typeform-embed";

export default class App extends React.Component {
  render() {
    return (
      <ReactTypeformEmbed url="https://robbiekruszynski.typeform.com/to/NlEfNp" />
    );
  }
}
