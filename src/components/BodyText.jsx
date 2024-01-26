import React, { Component } from "react";

class BodyText extends Component {
  render() {
    const { text, bodyTextClass } = this.props;
    return <p className={bodyTextClass}>{text}</p>;
  }
}

export default BodyText;
