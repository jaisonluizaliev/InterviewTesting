import React from "react";
import { StyledHeader, StyledLogo } from "./styles";
import { Link } from "react-router-dom";
import Logo from "../../images/marvel-logo.png";


function Header() {
  
  
  return (
    <StyledHeader>
      <Link to="/">
        <StyledLogo src={Logo} alt="logo" />
      </Link>
      <Link className="link-my-heroes" to="/saved-heroes">
        Meus Herois
      </Link>
    </StyledHeader>
  );
}

export default Header;
