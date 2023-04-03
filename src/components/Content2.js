import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import Img1 from "./../assets/images/img1.jpg";

function Content2({ aos, aos_offset }) {
  return (
    <div
      data-aos={aos}
      data-aos-offset={aos_offset}
      data-aos-easing="ease-in-out-sine"
      data-aos-duration="1500"
      data-aos-anchor-placement="top-bottom"
      className="card rounded-0"
    >
      <img className="" src={Img1} alt="images" />
      <div className="card-text">
        <h5>Cool App Design</h5>
        <p>development, mobile</p>
        <div className="--line"></div>
        <BsArrowRightCircle className="--icon" />
      </div>
    </div>
  );
}

export default Content2;
