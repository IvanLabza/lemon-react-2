import React from "react";
import img from "./../../../assets/sosmed.png";
import logoF from "./../../../assets/logo.svg";
import loc from "./../../../assets/Location.png";
import telImg from "./../../../assets/Calling.png";
import mailImg from "./../../../assets/Message.svg";

const RouterAdress = () => {
  const routerAddress = {
    address: "Dhaka, Bangladesh",
    tel: "0943833399",
    mail: "support@zone.com",
  };
  return (
    <address className="address">
      <a href="" className="address__logo">
        <img src={logoF} alt="" />
        Zone.
      </a>
      <a href="" className="address__location">
        <img src={loc} alt="" />
        {routerAddress.address}
      </a>
      <a href="" className="address__mail">
        <img src={mailImg} alt="" />
        {routerAddress.mail}
      </a>
      <a href="" className="address__tel">
        <img src={telImg} alt="" />
        {routerAddress.tel}
      </a>
     
    </address>
  );
};

export default RouterAdress;
