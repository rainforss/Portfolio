import React from "react";
import RouterLink from "../common/RouterLink";
import TextSlider from "../common/TextSlider";
import { workUrls } from "../constants/Urls";

function ProjectCover({ menuOpen }) {
  return (
    <section className="scroll-content side">
      <div
        className="project-content-wrapper"
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
        <div className="project-logo"></div>
        <RouterLink link="/" linkName="header" linkText="My sites" />
        <TextSlider
          textHead="Recent work"
          textBody={["The Optical Shop", "Stewart Brownlee Law", "Heere Tea"]}
          isLink={true}
          urls={workUrls}
        />
      </div>
    </section>
  );
}

export default ProjectCover;
