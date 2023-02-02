import React from "react";

import typing from "../assets/image/typeswhite.gif";
import AOS from "aos";

import { useEffect } from "react";
function WhatIDo() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="whatido" id="about">
      <div className="left_whatido" data-aos="zoom-in-right">
        <img src={typing} alt="image" className="whatidoimg" />
      </div>
      <div className="right_whatido" data-aos="flip-right">
        <h2 className="whatido_heading">What I do</h2>
        <br />
        <h6>CRAZY FRONTEND DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</h6>
        <div className="what_i_know">
          <i className=" iknow_logo fa-brands fa-html5 fa-3x">
            {" "}
            <br />
            <span className="spanning">HTML-5</span>{" "}
          </i>
          <i className=" iknow_logo fa-brands fa-css3-alt fa-3x">
            <br />
            <span className="spanning">CSS-3</span>{" "}
          </i>
          <i className=" iknow_logo fa-brands fa-sass fa-3x">
            <br />
            <span className="spanning">SASS</span>{" "}
          </i>
          <i className=" iknow_logo fa-brands fa-square-js fa-3x">
            <br />
            <span className="spanning">JAVASCRIPT</span>{" "}
          </i>
          <i className=" iknow_logo fa-brands fa-react fa-3x">
            <br />
            <span className="spanning">REACT</span>{" "}
          </i>
          <i className=" iknow_logo fa-brands fa-vuejs fa-3x">
            <br />
            <span className="spanning">VUE</span>{" "}
          </i>
          <i className=" iknow_logo fa-brands fa-npm fa-3x">
            <br />
            <span className="spanning">NPM</span>{" "}
          </i>
          <i className=" iknow_logo fa-solid fa-database fa-3x">
            <br />
            <span className="spanning">MYSQL</span>{" "}
          </i>
          <i className=" iknow_logo fa-brands fa-git-alt fa-3x">
            <br />
            <span className="spanning">GIT</span>{" "}
          </i>
        </div>
        <h5>
          ⚡ Develop highly interactive Front end / User Interfaces for web
          applications.
        </h5>{" "}
        <br />
        <h5>
          ⚡ Staying up-to-date with the latest front-end technologies and
          trends, and incorporating them into work as appropriate.
        </h5>
      </div>
    </div>
  );
}

export default WhatIDo;
