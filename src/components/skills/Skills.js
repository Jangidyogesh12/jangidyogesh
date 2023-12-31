import React from "react";
import { useEffect } from "react";
import "./style.css";
import img1 from "./c.png";
import img2 from "./cpp.png";
import img3 from "./java.png";
import img4 from "./java_script.png";
import img5 from "./tensorflow.png";
import img6 from "./python.png";
import img7 from "./pytorch.png";
import img8 from "./html.png";
import img9 from "./css.png";
import img10 from "./git.png";
import img11 from "./react.webp";

export default function Skills() {
  const imgStyle = {
    width: "100px",
    height: "auto",
    position: "absolute",
  };

  return (
    <>
      <div className="skills">
        <div className="image_collage">
          <img
            src={img1}
            alt=""
            style={imgStyle}
            className="img_skill"
            id="img1"
          />
          <img
            src={img2}
            alt=""
            style={imgStyle}
            className="img_skill"
            id="img2"
          />
          <img
            src={img3}
            alt=""
            style={imgStyle}
            className="img_skill"
            id="img3"
          />
          <img
            src={img4}
            alt=""
            style={imgStyle}
            className="img_skill"
            id="img4"
          />
          <img
            src={img5}
            alt=""
            style={imgStyle}
            className="img_skill"
            id="img5"
          />
          <img
            src={img6}
            alt=""
            style={imgStyle}
            className="img_skill"
            id="img6"
          />
          <img
            src={img7}
            alt=""
            style={imgStyle}
            className="img_skill"
            id="img7"
          />
          <img
            src={img8}
            alt=""
            style={imgStyle}
            className="img_skill"
            id="img8"
          />
          <img
            src={img9}
            alt=""
            style={imgStyle}
            className="img_skill"
            id="img9"
          />
          <img
            src={img10}
            alt=""
            style={imgStyle}
            className="img_skill"
            id="img10"
          />
          <img
            src={img11}
            alt=""
            style={imgStyle}
            className="img_skill"
            id="img11"
          />
        </div>
      </div>
    </>
  );
}
