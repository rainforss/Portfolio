import React from "react";
import { NavLink } from "react-router-dom";
import LinkUnderline from "./LinkUnderline";

function RouterLink({ link, linkName, linkText }) {
  return (
    <div className="router-outter">
      <div className="router-inner">
        <div className="link-wrapper">
          <NavLink exact={linkName === "header"} to={link}>
            {linkText}
          </NavLink>
        </div>
        <LinkUnderline isAnimated={false} />
      </div>
    </div>
  );
}

export default RouterLink;
