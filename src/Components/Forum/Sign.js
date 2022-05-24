import React from "react";
import { Link } from "react-router-dom";
import imaging from "../../assets/images/Frame.svg";
import "./Forum.scss";
function Sign() {
  return (
    <div className="forum d-flex align-items-center">
      <div className="forum__imgbox">
        <img src={imaging} alt={imaging} />
      </div>
      <div className="forum__info">
        <div className="forum__signup">
          <h2 className="forum__title">Sign in</h2>
          <span className="forum__text">
            Do not you have an account?
            <Link to={'/forum'} className="forum__next">
              Sign Up
            </Link>
          </span>
        </div>
        <form className="forum__reg">
          <input
            className="forum__input"
            type="email"
            placeholder="Email"
            required
          />
          <input
            className="forum__input"
            type="password"
            placeholder="Password"
            required
          />
          <button className="forum__btn">Next step</button>
        </form>
      </div>
    </div>
  );
}

export default Sign;
