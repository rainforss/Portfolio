import React from "react";
import RouterLink from "../common/RouterLink";
import TextSlider from "../common/TextSlider";
import { socialUrls } from "../constants/Urls";

function ContactCover({ menuOpen }) {
  return (
    <section className="scroll-content side">
      <div
        className="contact-content-wrapper"
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
        <div className="contact-logo"></div>
        <RouterLink link="/" linkName="header" linkText="Contact" />
        <TextSlider
          textHead="Follow me"
          textBody={["Facebook", "LinkedIn", "Twitter"]}
          isLink={true}
          urls={socialUrls}
        />
      </div>
    </section>
  );
}

export default ContactCover;
