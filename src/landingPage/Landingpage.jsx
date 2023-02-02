import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Landingpagestyle.css";
function Landingpage() {
  const history = useHistory();
  const [name, setname] = useState("Loading...");
  const [visible, setvisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setname("Checking Connection...");
      setTimeout(() => {
        // setvisible(true);
        history.push("/landing");
      }, 2000);
    }, 2000);
  }, []);
  return (
    <div className="center">
      <div className="ring" id="hawa"></div>
      <span className="landing_name">{name}</span>
      {/* {visible ? (
        <button
          className="landing_btn"
          onClick={() => history.push("/landing")}
        >
          <b>Get Started</b>
        </button>
      ) : null} */}
    </div>
  );
}

export default Landingpage;
