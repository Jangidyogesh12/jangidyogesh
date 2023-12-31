import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaInstagram } from "react-icons/fa";
import "./style.css";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
export default function Home() {
  return (
    <section id="home" className="home">
      <div className="home_text">
        <h1 className="headder">
          Hello, I am Yogesh Sharma
          <br />
          AI/ML Engineer
        </h1>
      </div>

      <div className="social">
        <ul className="social-icons">
          <li>
            <a href="https://twitter.com/YogeshS47791368">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/yogesh-sharma-45201b231/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a href="https://github.com/Jangidyogesh12">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a href="mailto:jangidyogesh123@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
