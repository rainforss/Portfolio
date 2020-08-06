import React from "react";
import styled from "styled-components";

const TestSlider = styled.div`
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.6);
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Slider = ({ direction }) => {
  return <TestSlider></TestSlider>;
};

export default Slider;
