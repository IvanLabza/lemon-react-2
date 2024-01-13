import React from "react";
import ServiseList from "./ServiseList/ServiseList";

const Servise = () => {
  return (
    <section className="servise">
      <div className="container">
        <h2 className="servise__title">Our Service</h2>
        <p className="servise__text">
          We turn information into actionable insights We work to understand
          your issues and are driven to ask better questions in the pursuit of
          making work.
        </p>
        <ServiseList></ServiseList>
      </div>
    </section>
  );
};

export default Servise;
