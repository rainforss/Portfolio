import React from "react";
import RouterLink from "../common/RouterLink";
import ControlButton from "../common/ControlButton";

function BlogCover({ menuOpen }) {
  return (
    <section className="scroll-content side">
      <div
        className="blog-content-wrapper"
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
        <div className="button-1">
          <div className="button-1-inner">
            <ControlButton buttonText="Newer" />
          </div>
        </div>
        <div className="blog-title">
          <div className="blog-title-inner">
            <div className="prev-title"></div>
            <div className="current-title"></div>
            <div className="next-title"></div>
          </div>
        </div>
        <div className="button-2">
          <div className="button-2-inner">
            <ControlButton buttonText="Older" />
          </div>
        </div>

        <RouterLink link="/" linkName="header" linkText="Thoughts" />
      </div>
    </section>
  );
}

export default BlogCover;
