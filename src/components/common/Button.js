import React from "react";
import ResponsiveUnderline from "./ResponsiveUnderline";

function Button({ onClick, pageTranslate }) {
  return (
    <div className="button-outter" onClick={onClick}>
      <div className="button-inner">
        <ResponsiveUnderline />
        <div className="button-txt">
          <div
            className="scroll"
            style={
              pageTranslate === -500 || pageTranslate === 0
                ? { transform: "translateY(100%)" }
                : { transform: "translateY(0)" }
            }
          >
            Scroll or Click?
          </div>
          <div
            className="back"
            style={
              pageTranslate === -500 || pageTranslate === 0
                ? { transform: "translateY(0)" }
                : { transform: "translateY(-100%)" }
            }
          >
            Going Back!
          </div>
        </div>
      </div>
    </div>
  );
}

export default Button;
