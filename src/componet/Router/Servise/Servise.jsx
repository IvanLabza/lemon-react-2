import React from "react";

const Servise = () => {
  const servise = [
    {
      Q: "Service",
      W: "Order Management",
      E: "Social Assistant",
      R: "Crypto Platform",
      T: "Analyzer of the News",
    },
    {
      Q: "Company",
      W: "About Us",
      E: "News",
      R: "Our trusted partner",
      T: "New users FAQ",
    },
    {
      Q: "Supports",
      W: "Help center",
      E: "Feedbcak",
      R: "Contact us",
      T: "Terms conditins",
    },
    {
      Q: "Resources",
      W: "Download app",
      E: "Blog",
      R: "What’s new",
      T: "Sitemap",
    },
  ];
  return (
    <div className="servis">
      {servise.map((item, index) => (
        <ul className="servis__list">
          <li data-index={index}>
            <a href="">{item.Q}</a>
          </li>
          <li data-index={index}>
            <a href="">{item.W}</a>
          </li>
          <li data-index={index}>
            <a href="">{item.E}</a>
          </li>
          <li data-index={index}>
            <a href="">{item.R}</a>
          </li>
          <li data-index={index}>
            <a href="">{item.T}</a>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Servise;
