import React from "react";
import LinkUnderline from "./LinkUnderline";

function ControlButton({ buttonText, callBack }) {
  return (
    <div className="control-button" onClick={callBack}>
      <div className="button-inner">
        <div className="button-text">{buttonText}</div>

        <LinkUnderline isAnimated={false} />
      </div>
    </div>
  );
}

export default ControlButton;
