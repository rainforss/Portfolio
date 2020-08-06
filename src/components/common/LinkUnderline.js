import React from "react";

const LinkUnderline = (props, ref) => {
  return (
    <div className="underline-outter">
      <div className="underline-inner">
        <div
          ref={ref}
          className={"front " + (props.isAnimated ? "animated" : "")}
        ></div>
        <div className="back"></div>
      </div>
    </div>
  );
};

export default React.forwardRef(LinkUnderline);
