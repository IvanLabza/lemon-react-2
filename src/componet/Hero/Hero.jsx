import React from "react";
import hero from "../../assets/hero.png";
import hero__play from "../../assets/hero__play.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__wrap">
          <h1 className="hero-title">Virtual Reality Business Solutions</h1>
          <p className="hero-text">
            We have over 15 year exprience in business consultting arena. We
            have over 15 year exprience in business consultting arena and
            artficial intelligence.
          </p>
          <div>
            <a href="" className="hero-link">
              Join Us
            </a>
            <a href="" className="hero-video">
              <img src={hero__play} alt="" />
              Watch video
            </a>
          </div>
        </div>
        <img width={600} height={600} src={hero} alt="" className="hero__img" />
      </div>
    </section>
  );
};

export default Hero;
