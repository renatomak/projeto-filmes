import React, { Component } from "react";
import { HeaderContainer } from '../styles';

class Header extends Component {
  render() {
    return (
      <HeaderContainer >
        <div>
          <strong>FILMES</strong>
        </div>
      </HeaderContainer>
    );
  }
}

export default Header;
