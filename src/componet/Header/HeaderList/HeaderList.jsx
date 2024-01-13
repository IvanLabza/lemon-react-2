import React from "react";

const HeaderList = () => {
  const headerLinks = ["Home", "About Us", "Service", "Pricing", "Blog"];
  return (
    <ul className="header__list">
      {headerLinks.map((link, index) => (
        <li key={index} className="header__list-item">
          <a href={`#${link.toLowerCase()}`}>{link}</a>
        </li>
      ))}
    </ul>
  );
};

export default HeaderList;
