import React from "react";

const Form = () => {
  return (
    <div className="wrapper-form">
      <form className="form">
        <div className="container">
          <h2 className="form__title">Subscribe to get the Latest News</h2>
          <p className="form__text">
            We recommended you to subscribe to our newspaper,drop your email
            below to get daily update about us
          </p>
          <label className="form__label">
            <input type="text" placeholder="Enter your email addres" />
            <button type="submit">
              Subscribe
              <img src="" alt="" />
            </button>
          </label>
        </div>
      </form>
    </div>
  );
};

export default Form;
