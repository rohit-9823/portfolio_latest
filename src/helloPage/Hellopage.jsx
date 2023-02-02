import React from "react";
import hello from "../assets/image/bye.gif";
import sparkle from "../assets/image/sparkle.gif";
function Hellopage() {
  return (
    <div className="hellopage">
      <div className="left_side_hello">
        <h3>Frontend Developer</h3>
        <br />
        <h1>Hi, I'm </h1>
        <div className="anime">
          <h1>Rohit</h1>
          <h1>Designer</h1>
          <h1>Developer</h1>
          <h1>Musician</h1>
        </div>
        <p>
          A passionate Frontend Developer 🚀 having an experience of designing
          and building Web Application with JavaScript / React JS and some other
          cool libraries and frameworks.
        </p>
        <br />
        <a href="#contact">
          {" "}
          <button className="contact_btn">
            <b>Let's Connect</b>
          </button>
        </a>
      </div>
      <div className="right_side_hello">
        <img src={hello} alt="image" className="wavinghand" />
      </div>
    </div>
  );
}

export default Hellopage;
