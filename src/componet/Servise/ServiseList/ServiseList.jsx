import React from "react";

const ServiseList = () => {
  const serviseItem = [
    {
      img: "#",
      title: "Order Management",
      text: "Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.",
      linkText: "Learn more",
      linkImg: "#",
    },
    {
      img: "#",
      title: "Social Assistant",
      text: "Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.",
      linkText: "Learn more",
      linkImg: "#",
    },
    {
      img: "#",
      title: "Crypto Platform",
      text: "Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.",
      linkText: "Learn more",
      linkImg: "#",
    },
    {
      img: "#",
      title: "Smart Trading Modules",
      text: "Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.",
      linkText: "Learn more",
      linkImg: "#",
    },
    {
      img: "#",
      title: "Analyzer of the News",
      text: "Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.",
      linkText: "Learn more",
      linkImg: "#",
    },
    {
      img: "#",
      title: "Module of Price Notification",
      text: "Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.",
      linkText: "Learn more",
      linkImg: "#",
    },
  ];
  return (
    <ul className="servise__list">
      {serviseItem.map((item, index) => (
        <li key={index} className="servise__list-item">
          <img src={item.img} alt="" />
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
