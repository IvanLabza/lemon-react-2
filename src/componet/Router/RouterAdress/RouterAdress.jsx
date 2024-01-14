import React from "react";

const RouterAdress = () => {
  const routerAddress = {
    address: "Dhaka, Bangladesh",
    tel: "0943833399",
    mail: "support@zone.com",
  };
  return (
    <address className="address">
      <a href="" className="address__logo">
        <img src="" alt="" />
        Zone.
      </a>
      <a href="" className="address__location">
        <img src="" alt="" />
        {routerAddress.address}
      </a>
      <a href="" className="address__mail">
        <img src="" alt="" />
        {routerAddress.mail}
      </a>
      <a href="" className="address__tel">
        <img src="" alt="" />
        {routerAddress.tel}
      </a>
      <ul className="address__list">
        <li>
          <img src="" alt="" />
        </li>
        <li>
          <img src="" alt="" />
        </li>
        <li>
          <img src="" alt="" />
        </li>
        <li>
          <img src="" alt="" />
        </li>
      </ul>
    </address>
  );
};

export default RouterAdress;
