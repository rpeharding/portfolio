import React, { Component } from "react";

class InfoSection extends Component {
  render() {
    const { infoSectionClass, title, text, list } = this.props;

    return (
      <div className={infoSectionClass}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    );
  }
}

export default InfoSection;
