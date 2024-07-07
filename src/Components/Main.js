import React from "react";
import "../Css/Main.css";
import Spline from "@splinetool/react-spline";
function Main() {
  return (
    <div className="App">
      <div class="Home-text">
        <h1>3D ROBO-TRACKER</h1>
        <p>
          This website features an immersive interactive 3D experience created
          using React JS, Spline, and Three.js. At the heart of the site is a
          sophisticated 3D model of a robot, which dynamically follows the
          user's cursor movements, creating an engaging and responsive user
          experience. The use of advanced web technologies ensures smooth
          performance and high-quality graphics, making the website both
          visually stunning and highly interactive.
        </p>
      </div>
      <div className="Home">
        <Spline scene="https://prod.spline.design/Hzf0alncEtpS4fkw/scene.splinecode" />
      </div>
    </div>
  );
}

export default Main;
