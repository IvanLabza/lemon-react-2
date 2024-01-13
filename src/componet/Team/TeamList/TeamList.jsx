import React from 'react'

const TeamList = () => {
    const teamArr = [
      {
        img: "",
        title: "",
        text: "",
        soc: {
          fb: "",
          linkId: "",
          sc: "",
          twit: "",
        },
      },
      {
        img: "",
        title: "",
        text: "",
        soc: {
          fb: "",
          linkId: "",
          sc: "",
          twit: "",
        },
      },
      {
        img: "",
        title: "",
        text: "",
        soc: {
          fb: "",
          linkId: "",
          sc: "",
          twit: "",
        },
      },
      {
        img: "",
        title: "",
        text: "",
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
          <p>{item.text}</p>
        </li>
      ))}
    </ul>
  );
}

export default TeamList