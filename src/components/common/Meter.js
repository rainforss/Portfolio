import React from "react";

function Meter({ total, current }) {
  const inlineStyle = { transform: `translate(${(100 * current) / total}%,0)` };
  return (
    <div className="meter-outter">
      <div className="meter-inner">
        <div className="meter-front" style={inlineStyle}></div>
        <div className="meter-back"></div>
      </div>
    </div>
  );
}

export default Meter;
