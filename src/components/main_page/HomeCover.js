import React from "react";
import TextSlider from "../common/TextSlider";
import Clock from "../common/Clock";

function HomeCover({ menuOpen, startAnimation }) {
  return (
    <section className="scroll-content">
      <div
        className="home-content-wrapper"
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
        <div className="logo"></div>
        <TextSlider
          textHead="To"
          textBody={["keep up with change", "grasp new ideas", "succeed"]}
          isLink={false}
          startAnimation={startAnimation}
        />
        <Clock />
        <div className="welcome-word">
          <span>Witness awesomeness on wider screen</span>
        </div>
      </div>
    </section>
  );
}

export default HomeCover;
