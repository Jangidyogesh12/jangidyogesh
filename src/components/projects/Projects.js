import React from "react";
import "./style.css";
import snake from "./Snake.jpg";
import NExt from "./Next.png";

export default function Projects() {
  return (
    <section className="project">
      <div className="project_container">
        <div className="container">
          <img src={snake} alt="" className="container_img" />
          <div className="card_body">
            <h1 className="card_title">Snake.AI</h1>
            <p className="card_info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              neque molestias suscipit iure repellendus laudantium!
            </p>
          </div>
        </div>
        <div className="container">
          <img src={NExt} alt="" className="container_img" />
          <div className="card_body">
            <h1 className="card_title">NExt</h1>
            <p className="card_info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              neque molestias suscipit iure repellendus laudantium!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
