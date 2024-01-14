import React from 'react'
import team_1 from "./../../../assets/team_1.png";
import team_2 from "./../../../assets/team_2.png";
import team_3 from "./../../../assets/team_3.png";
import team_4 from "./../../../assets/team_4.png";
import tw from "./../../../assets/twitter.png";
import id from "./../../../assets/linkedin.png";
import fb from "./../../../assets/Frame.png";
import sc from "./../../../assets/skype.png";

const TeamList = () => {
    const teamArr = [
      {
        img: team_1,
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
        img: team_2,
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
        img: team_3,
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
        img: team_4,
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
              <img src={sc} alt="" />
            </li>
            <li>
              <img src={id} alt="" />
            </li>
            <li>
              <img src={tw} alt="" />
            </li>
            <li>
              <img src={fb} alt="" />
            </li>
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default TeamList