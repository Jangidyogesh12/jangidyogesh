import { Link } from "react-router-dom";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { ReactComponent as TestSvgIcon } from "./cust_logo.svg";
import "./style.css";

export default function Navbar() {
  const data = [
    {
      label: "HOME",
      to: "/",
    },
    {
      label: "ABOUT ME",
      to: "/about-me",
    },
    {
      label: "SKILLS",
      to: "/skills",
    },
    {
      label: "PROJECTS",
      to: "/projects",
    },
  ];

  const [toggleIcon, setToggleIcon] = useState(false);
  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };
  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to="/" className="navbar__container__logo">
            <TestSvgIcon size={30} />
          </Link>
        </div>
        <ul className={`navbar__container__menu ${toggleIcon ? `active` : ""}`}>
          {data.map((item, key) => (
            <li key={key} className="navbar__container__menu__item">
              <Link
                to={item.to}
                className="navbar__container__menu__item__links"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav_Icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
}
