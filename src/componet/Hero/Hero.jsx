import React from "react";


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
          <a href="" className="hero-link">
            Join Us
          </a>
          <a href="" className="hero-video">
            <img src="" alt="" />
            Watch video
          </a>
              </div>
              <img src="@/assets/hero.png" alt="" className="hero__img" />
      </div>
    </section>
  );
};

export default Hero;
