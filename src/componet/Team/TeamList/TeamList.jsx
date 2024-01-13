import React from 'react'

const TeamList = () => {
    const teamArr = [
      {
        img: "",
        title: "Sunny Khan",
        text: "Executive officer",
        soc: {
          fb: "",
          linkId: "",
          sc: "",
          twit: "",
        },
      },
      {
        img: "",
        title: "Alina Jesia",
        text: "UX/UI DESIGNER",
        soc: {
          fb: "",
          linkId: "",
          sc: "",
          twit: "",
        },
      },
      {
        img: "",
        title: "Alex Sohag",
        text: "BUSINESS DEVELOPMENT",
        soc: {
          fb: "",
          linkId: "",
          sc: "",
          twit: "",
        },
      },
      {
        img: "",
        title: "Afroza Mou",
        text: "Head of marketing",
        soc: {
          fb: "",
          linkId: "",
          sc: "",
          twit: "",
        },
      },
    ];
  return (
    <ul className="team__list">
      {teamArr.map((item, index) => (
        <li className="team__list-item">
          <img src={item.img} alt="" />
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          <ul>
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
        </li>
      ))}
    </ul>
  );
}

export default TeamList