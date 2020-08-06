import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

function NavMenu({ menuOpen, animations }) {
  return (
    <nav className={"nav " + (menuOpen ? "nav-shown" : "nav-hidden")}>
      <div className="nav-inner">
        <ul className="nav-menu">
          <li name="home">
            <NavLink
              to="/"
              className="nav-menu-link"
              activeStyle={{ opacity: 0.3 }}
              style={animations.slide}
            >
              <div className="link-wrapper">
                <span className="front">HOME</span>
                <span className="back">HOME</span>
              </div>
            </NavLink>
          </li>
          <li name="about">
            <NavLink
              to="/about"
              className="nav-menu-link"
              activeStyle={{ opacity: 0.2 }}
              style={animations.slide}
            >
              <div className="link-wrapper">
                <span className="front">ABOUT</span>
                <span className="back">ABOUT</span>
              </div>
            </NavLink>
          </li>
          <li name="projects">
            <NavLink
              to="/projects"
              className="nav-menu-link"
              activeStyle={{ opacity: 0.2 }}
              style={animations.slide}
            >
              <div className="link-wrapper">
                <span className="front">PROJECTS</span>
                <span className="back">PROJECTS</span>
              </div>
            </NavLink>
          </li>
          <li name="blogs">
            <NavLink
              to="/blogs"
              className="nav-menu-link"
              activeStyle={{ opacity: 0.2 }}
              style={animations.slide}
            >
              <div className="link-wrapper">
                <span className="front">BLOGS</span>
                <span className="back">BLOGS</span>
              </div>
            </NavLink>
          </li>
          <li name="contact">
            <NavLink
              to="/contact"
              className="nav-menu-link"
              activeStyle={{ opacity: 0.2 }}
              style={animations.slide}
            >
              <div className="link-wrapper">
                <span className="front">CONTACT</span>
                <span className="back">CONTACT</span>
              </div>
            </NavLink>
          </li>
        </ul>
        <div className="social-icon-1">
          <a href="" style={animations.slide}>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div className="social-icon-2">
          <a href="" style={animations.slide}>
            <FontAwesomeIcon icon={faFacebookSquare} />
          </a>
        </div>
        <div className="social-icon-3">
          <a href="" style={animations.slide}>
            <FontAwesomeIcon icon={faInstagramSquare} />
          </a>
        </div>
        <div className="social-icon-4">
          <a href="" style={animations.slide}>
            <FontAwesomeIcon icon={faTwitterSquare} />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavMenu;
