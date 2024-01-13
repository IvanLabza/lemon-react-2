import React from "react";

const Desc = () => {
  const descList = [
    {
      title: "We complete every projects extra care as customer need",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nuncoe scelerisque in. orem ipsum  dolor sit amet, consectetur adipisicing elit. Labore eius molestiae facere, natus reprehenderit eaque eum, autem ipsam. Magfini, error. Tempora odit laborum iure inventore possimus laboriosam qui nam. ",
      link: "Read more",
      img: "#",
    },
    {
      title: "We complete every projects extra care as customer need",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nuncoe scelerisque in. orem ipsum  dolor sit amet, consectetur adipisicing elit. Labore eius molestiae facere, natus reprehenderit eaque eum, autem ipsam. Magfini, error. Tempora odit laborum iure inventore possimus laboriosam qui nam. ",
      link: "Read more",
      img: "#",
    },
  ];

  return (
    <div>
      {descList.map((item, index) => (
        <section
          key={index}
          className={`desc ${index % 2 === 0 ? "text-left" : "text-right"}`}
          data-index={index}
        >
          <div className="container">
            <div className="desc__wrap">
              <h2 className="desc-title">{item.title}</h2>
              <p className="desc-text">{item.text}</p>
              <a href="" className="desc-link">
                {item.link}
              </a>
            </div>
            <img src={item.img} alt="" />
          </div>
        </section>
      ))}
    </div>
  );
};

export default Desc;
