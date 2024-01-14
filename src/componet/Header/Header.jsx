import React, { useState } from "react";
import HeaderList from "./HeaderList/HeaderList";
import logo from "../../assets/logo.svg";
import open from "../../assets/symbol-defs.svg#paragraph-left";
import close from "../../assets/symbol-defs.svg#cross";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav>
          <a href="#" className="header__logo">
            <img width="34" height="34" src={logo} alt="" />
            Zone.
          </a>
          <div className="wrap">
            <HeaderList></HeaderList>
            <a href="" className="header__link">
              Contact Us
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}


export default Header;