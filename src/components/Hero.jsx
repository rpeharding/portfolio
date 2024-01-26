import React, { Component } from "react";
import Button from "./Button";
import BodyText from "./BodyText";

class Hero extends Component {
  state = {};
  render() {
    return (
      <>
        <h1>Hi, I'm Rachel 👋</h1>
        <BodyText
          bodyTextClass="body-reg"
          text={`I'm an experienced and detail-oriented UX designer with a passion for
          problem-solving and logical thinking, seeking a career change to a
          Developer role to leverage skills in front-end development, coding,
          and software engineering.`}
        />
        <Button text={"Contact Me"} btnClass="primary-btn" />
      </>
    );
  }
}

export default Hero;
