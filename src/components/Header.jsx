import React, { Component } from "react";
import Nav from "./Nav";
import Logo from "./Logo";

class Header extends Component {
  render() {
    return (
      <>
        <Logo />
        <Nav />
      </>
    );
  }
}

export default Header;
