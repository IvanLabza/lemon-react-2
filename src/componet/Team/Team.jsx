import React from "react";
import TeamList from "./TeamList/TeamList";

const Team = () => {
  return (
    <section className="team">
      <div className="container">
        <h2 className="team__title">Met Our Team</h2>
        <p className="team__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          accumsan nisi Ut ut felis congue nisl hendrerit commodo.
              </p>
              <TeamList></TeamList>
      </div>
    </section>
  );
};

export default Team;
