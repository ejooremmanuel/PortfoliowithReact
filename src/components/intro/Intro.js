import React from "react";
import "./Intro.css";
import Me from "../../img/new.png";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro__left">
        <div className="intro__left__wrapper">
          <h2 className="intro__greeting">Hello, my name is..</h2>
          <h1 className="intro__name">Ejoor Emmanuel!</h1>
          <div className="intro-title">
            <div className="intro-title__wrapper">
              <div className="intro-title__item">Web Developer</div>
              <div className="intro-title__item">React Developer</div>
              <div className="intro-title__item">Front End Developer</div>
            </div>
          </div>
          <p className="intro-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="intro__right">
        <img src={Me} alt="" className="intro__img" />
      </div>
    </div>
  );
};

export default Intro;
