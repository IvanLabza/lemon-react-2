import React, { useState } from "react";
import HeaderList from "./HeaderList/HeaderList";
import logo from "../../assets/logo.svg";
import open from "../../assets/main-menu.png";
import close from "../../assets/multiply.png";

function Header() {
  const [isClassAdded, setIsClassAdded] = useState(false);

  const toggleClass = () => {
    setIsClassAdded(!isClassAdded);
  };

  return (
    <header className="header">
      <div className="container">
        <nav>
          <a href="#" className="header__logo">
            <img width="34" height="34" src={logo} alt="" />
            Zone.
          </a>
          <button onClick={toggleClass} className="header__open ">
            Menu <img src={open} alt="" />
          </button>
          <div className={isClassAdded ? "wrap is-open" : "wrap"}>
            <button onClick={toggleClass} className="header__open close">
              Menu <img src={close} alt="" />
            </button>
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
