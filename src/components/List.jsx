import React, { Component } from "react";
class List extends Component {
  render() {
    const { list } = this.props;

    return (
      <>
        <ul>
          {list.map((e) => {
            return <li>{e}</li>;
          })}
        </ul>
      </>
    );
  }
}

export default List;
