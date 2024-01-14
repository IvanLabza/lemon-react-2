import React from "react";
import servise__1 from "./../../../assets/servise__1.png";
import servise__2 from "./../../../assets/servise__2.png";
import servise__3 from "./../../../assets/servise__3.png";
import servise__4 from "./../../../assets/servise__4.png";
import servise__5 from "./../../../assets/servise__5.png";
import servise__6 from "./../../../assets/servise__6.png";
import arrow from "./../../../assets/arrow.png";


const ServiseList = () => {
  const serviseItem = [
    {
      img: servise__1,
      title: "Order Management",
      text: "Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.",
      linkText: "Learn more",
      linkImg: arrow,
    },
    {
      img: servise__2,
      title: "Social Assistant",
      text: "Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.",
      linkText: "Learn more",
      linkImg: arrow,
    },
    {
      img: servise__3,
      title: "Crypto Platform",
      text: "Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.",
      linkText: "Learn more",
      linkImg: arrow,
    },
    {
      img: servise__4,
      title: "Smart Trading Modules",
      text: "Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.",
      linkText: "Learn more",
      linkImg: arrow,
    },
    {
      img: servise__5,
      title: "Analyzer of the News",
      text: "Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.",
      linkText: "Learn more",
      linkImg: arrow,
    },
    {
      img: servise__6,
      title: "Module of Price Notification",
      text: "Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.",
      linkText: "Learn more",
      linkImg: arrow,
    },
  ];
  return (
    <ul className="servise__list">
      {serviseItem.map((item, index) => (
        <li key={index}  className="servise__list-item">
          <img src={item.img}  alt="" />
          <h2>{item.title}</h2>
          <p>{item.text}</p>
          <a href={item.linkImg}>
            <span>{item.linkText}</span>
            <img src={item.linkImg} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ServiseList;
