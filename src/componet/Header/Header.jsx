import React from "react";
import HeaderList from "./HeaderList/HeaderList";


function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav>
          <a href="#" className="header__logo">
            <svg width="34.251" height="34.251px">
              <use href=".../assets/icon.svg#Standard-Collection-13"></use>
            </svg>
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
