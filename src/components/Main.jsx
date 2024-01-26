import React, { Component } from "react";
import Hero from "./Hero";
import MainInfo from "./MainInfo";

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Hero />
        <MainInfo />
      </div>
    );
  }
}

export default Main;
