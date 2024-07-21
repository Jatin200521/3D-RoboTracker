import React from "react";
import Page1 from "../About/Page1";
import Page2 from "../About/Page2";
import Page3 from "../About/Page3";
import "../Css/About.css";

function About() {
  return (
    <div className="About">
      <Page1 />
      <Page2 />
      <Page3 />
    </div>
  );
}

export default About;
