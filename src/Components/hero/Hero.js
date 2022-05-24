import React, { useState } from "react";
import "./Hero.scss";
import hback from "../../assets/images/hero-back.png";

function Hero() {
  const [slideImg, setSlideImg] = useState("first");

  const moveToFirst = () => {
    setSlideImg("first");
  };
  const moveToSecond = () => {
    setSlideImg("second");
  };
  const moveToThird = () => {
    setSlideImg("third");
  };
  const moveToFourth = () => {
    setSlideImg("fourth");
  };
  return (
    <section className="hero">
      <div className="conatiner">
        <div className="hero__main">
          <div className="heros">
            <div className={`${
              slideImg === "first"
              ? "to-firstSlide"
              : slideImg === "second"
              ? "to-secondSlide"
              : slideImg === "third"
              ? "to-thirdSlide"
              : slideImg === "fourth"
              ? "to-fourSlide"
              : slideImg === ""
            } hero__box`}>
              <div className="hero__boxing">
                <img className="hero__img" src={hback} alt="img" />
                <h2 className="hero__title tit">Temuriylar davri adabiyoti</h2>
              </div>

              <div className="hero__boxing">
              <img className="hero__img" src="http://i.imgur.com/ZZq9fQJ.jpg" alt="img" />
                <h2 className="hero__title tit">Abdulla Avloniy Tarixi</h2>
              </div>
              <div className="hero__boxing">
              <img className="hero__img" src="http://i.imgur.com/gn0P3j4.jpg" alt="img" />
                <h2 className="hero__title tit">Abdurauf Fitrat Tarixi</h2>
              </div>

              <div className="hero__boxing">
                <img className="hero__img" src="http://i.imgur.com/LXKj5i2.jpg" alt="img" />
                <h2 className="hero__title tit">Abdulhamid Cho'lpon Tarixi</h2>
              </div>
            </div>
          </div>
          <div className="hero__btns d-flex align-items-center">
            <button
              onClick={moveToFirst}
              className={`hero__btn ${slideImg === "first" ? "active2" : ""}`}
            ></button>
            <button
              onClick={moveToSecond}
              className={`hero__btn ${slideImg === "second" ? "active2" : ""}`}
            ></button>
            <button
              onClick={moveToThird}
              className={`hero__btn ${slideImg === "third" ? "active2" : ""}`}
            ></button>
            <button
              onClick={moveToFourth}
              className={`hero__btn ${slideImg === "fourth" ? "active2" : ""}`}
            ></button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;