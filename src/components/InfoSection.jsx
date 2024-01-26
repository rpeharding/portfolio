import React, { Component } from "react";
import List from "./List";

class InfoSection extends Component {
  render() {
    const { infoSectionClass, title, text, list } = this.props;

    return (
      <div className={infoSectionClass}>
        <h3>{title}</h3>
        <p>{text}</p>
        {list && <List list={list} />}
      </div>
    );
  }
}

export default InfoSection;
