import React, { useState, useEffect, useRef } from "react";
import LinkUnderline from "./LinkUnderline";

function TextSlider({ textHead, textBody, isLink, urls, startAnimation }) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const sliderRef = useRef();

  const match = currentSlide - 1;
  useEffect(() => {
    sliderRef.current.classList.remove("animated");
    window.requestAnimationFrame(function (time) {
      window.requestAnimationFrame(function (time) {
        sliderRef.current.classList.add("animated");
      });
    });
    const rollSlides = setTimeout(() => {
      currentSlide === 3
        ? setCurrentSlide(1)
        : setCurrentSlide(currentSlide + 1);
    }, 4000);
    return () => {
      clearTimeout(rollSlides);
    };
  }, [startAnimation, currentSlide]);

  return (
    <div className={"text-slider"}>
      <LinkUnderline isAnimated={startAnimation} ref={sliderRef} />
      <div className="text-slider-inner">
        <div className="text-head">
          <div className="txt">{textHead}</div>
        </div>
        <div className="text-body">
          {textBody.map((text, index) => {
            return (
              <div
                key={text}
                className={"txt " + (index === match ? "active" : "")}
              >
                {isLink ? (
                  <a href={urls[index]} target="_blank">
                    {text}
                  </a>
                ) : (
                  <span>{text}</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TextSlider;
