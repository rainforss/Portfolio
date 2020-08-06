import React from "react";

function MenuToggle({ menuOpen, onMenuToggle, toggleDisable }) {
  return (
    <div
      className={"menu-toggle " + (menuOpen ? "toggle-on" : "")}
      onClick={toggleDisable ? undefined : onMenuToggle}
    >
      <div className="toggle-button">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </div>
  );
}

export default MenuToggle;
