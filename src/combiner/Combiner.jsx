import React from "react";
import { Container } from "react-bootstrap";
import Contact from "../Contact/Contact";
import Experience from "../Experience/Experience";
import Hellopage from "../helloPage/Hellopage";
import Landingpage from "../landingPage/Landingpage";
import Navbars from "../Navbar/Navbar";
import Project from "../Project/Project";
import WhatIDo from "../whatIDo/whatIDo";
import up from "../assets/image/up.png";
function Combiner() {
  return (
    <div>
      <a href="#navs">
        <i
          className="fa-solid fa-circle-arrow-up go_up fa-2x"
          title="Go To Top"
        ></i>
        {/* <img
          src={up}
          alt=""
          style={{
            width: "30px",
            cursor: "pointer",
            float: "right",
            position: "fixed",
            right: "20px",
            bottom: "25px",
          }}
        /> */}
      </a>
      <Container>
        <Navbars />
        <Hellopage />
        <WhatIDo />
        <Experience />
        <Project />
        <Contact />
      </Container>
    </div>
  );
}

export default Combiner;
