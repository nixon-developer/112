import React from "react";
import { NavLink } from "react-router-dom";
import flickr from "./../assets/icons/fc-webicon-flickr.svg";
import googleplus from "./../assets/icons/webicon-googleplus.svg";
import twitter from "./../assets/icons/webicon-twitter.svg";
import pinterest from "./../assets/icons/webicon-pinterest.svg";
import dribbble from "./../assets/icons/webicon-dribbble.svg";
import behance from "./../assets/icons/webicon-behance.svg";
import facebook from "./../assets/icons/webicon-facebook.svg";

function Header() {
  return (
    <div className="--menu">
      <h2>kappe</h2>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "link-active" : "link")}
          >
            home
          </NavLink>
        </li>
        <li>
          <NavLink to="">work</NavLink>
        </li>
        <li>
          <NavLink to="">about</NavLink>
        </li>
        <li>
          <NavLink to="">blog</NavLink>
        </li>
        <li>
          <NavLink to="">services</NavLink>
        </li>
        <li>
          <NavLink to="">contact</NavLink>
        </li>

        <li className="--icons w-100">
          <div>
            <img style={{ width: "25px" }} src={flickr} alt="" />
            <img style={{ width: "25px" }} src={googleplus} alt="" />
            <img style={{ width: "25px" }} src={twitter} alt="" />
            <img style={{ width: "25px" }} src={pinterest} alt="" />
            <img style={{ width: "25px" }} src={dribbble} alt="" />
            <img style={{ width: "25px" }} src={behance} alt="" />
            <img style={{ width: "25px" }} src={facebook} alt="" />
          </div>
          <div className="--menu-footer">
            <p>© 2019 Kappe, All Rights Reserved</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Header;
