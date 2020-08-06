import React from "react";
import RouterLink from "../common/RouterLink";

function AboutCover({ menuOpen, animations }) {
  return (
    <section className="scroll-content side">
      <div
        className="about-content-wrapper"
        style={
          menuOpen
            ? {
                visibility: "hidden",
                opacity: 0,
                transform: "translateX(300px)",
              }
            : {
                visibility: "visible",
                opacity: 1,
                transform: "translateX(0px)",
              }
        }
      >
        <RouterLink link="/" linkName="header" linkText="About me" />
        <div className="subtitle-outter">
          <div className="subtitle-inner">
            <div className="text-wrapper">
              <div className="text" style={animations.pop}>
                STAY UP TO CHANGE
              </div>
            </div>

            <div className="text-wrapper">
              <div className="text" style={animations.pop}>
                WITH ADAPTIVE FORCE
              </div>
            </div>
          </div>
        </div>
        <div className="about-logo"></div>
      </div>
    </section>
  );
}

export default AboutCover;
