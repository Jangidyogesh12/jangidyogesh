import React from "react";
import "./style.css";
import img0 from "./generated.jpeg";

export default function AboutMe() {
  const style = {
    width: "300px",
    height: "300px",
  };
  return (
    <>
      <div className="img">
        <img src={img0} alt="" style={style} />
      </div>
      <div className="about-me">
        <h1>About Me</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni a
          veniam tempore provident fuga harum quis voluptate non deserunt
          consequatur architecto, eum porro unde aliquam, voluptas aspernatur
          vel alias. Neque?
        </p>
      </div>
    </>
  );
}
