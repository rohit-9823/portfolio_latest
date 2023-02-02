import React, { useEffect } from "react";
import prabhuipo from "../assets/image/prabhuipo.png";
import tms from "../assets/image/tms.png";
import jamna from "../assets/image/jamna.png";
import xceltrip from "../assets/image/xceltrip.png";
import { Link, useHistory } from "react-router-dom";
import AOS from "aos";
function Project() {
  const history = useHistory();
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="projectcollection" id="project">
      <h1 className="project_head">Projects</h1>
      <div className="project">
        {/* ------------------------------IPO------------------------------------ */}
        <div data-aos="zoom-in-down" className="project1">
          <img className="proj_images" src={prabhuipo} alt="" />
        </div>
        <div data-aos="zoom-in-up" className="project1_desc">
          <h4>Prabhu Ipo</h4>
          <button>Prabhu IPO</button>
          <button>Web App</button>

          <p>
            Prabhu IPO is developed with the thought of solving the problems
            that arise while publishing and applying for a Local IPO. We can
            create a local IPO for certain wards, municipalities and districts
            as well.
          </p>

          <p style={{ color: "rgb(206, 56, 206)" }}>
            <button className="livewebsite_btn">
              <a
                href="https://ipoapply.prabhucapital.com/"
                target="_blank"
                style={{ textDecoration: "none", color: "white" }}
              >
                Visit Website
              </a>
            </button>
            <span
              className="readmore"
              onClick={() => history.push("/detail", 1)}
            >
              Read More ➜
            </span>
          </p>
        </div>
        {/*------------------------------IPO------------------------------------ */}
        {/* ------------------------------TMS------------------------------------ */}
        <div data-aos="zoom-in-down" className="project1_desc">
          <h4>Task Management System</h4>
          <button>Task Management</button>
          <button>Web App</button>

          <p>
            TMS is built to manage projects and products flow in the IT
            industry. Assign tasks to employees. Track the progress of the
            employees and projects. Bug fixing Work on new features.{" "}
          </p>
          <p style={{ color: "rgb(206, 56, 206)" }}>
            <span
              className="readmore"
              onClick={() => history.push("/detail", 2)}
            >
              Read More ➜
            </span>
          </p>
        </div>
        <div data-aos="zoom-in-up" className="project1">
          <img className="proj_images" src={tms} alt="" />
        </div>
        {/* ------------------------------TMS------------------------------------ */}
        {/* ------------------------------JAMNA------------------------------------ */}
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="project1"
        >
          <img className="proj_images" src={jamna} alt="" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          className="project1_desc"
        >
          <h4>Jamna</h4>
          <button>Travel & Tour</button>
          <button>Web App</button>
          <p>
            Jaamna Nepal is your local-global travel platform offering you
            amazing benefits. Jaamna Nepal has established a full fledge local
            office in Kathmandu to offer regional support to vendor partners and
            users.
          </p>

          <p style={{ color: "rgb(206, 56, 206)" }}>
            <button className="livewebsite_btn">
              <a
                href="https://www.jaamna.com/"
                target="_blank"
                style={{ textDecoration: "none", color: "white" }}
              >
                Visit Website
              </a>
            </button>
            <span
              className="readmore"
              onClick={() => history.push("/detail", 3)}
            >
              Read More ➜
            </span>
          </p>
        </div>
        {/* ------------------------------JAMNA------------------------------------ */}
        {/* ------------------------------XCEL TRIP------------------------------------ */}

        <div data-aos="zoom-out-right" className="project1_desc">
          <h4>Xcel Trip</h4>
          <button>Travel & Tour</button>
          <button>Web App</button>
          <p>
            XcelTrip is a next-gen, decentralized, travel and booking platform.
            We are disintermediating travel, and empowering travelers and
            service providers. We are maximizing benefits to overall community.
          </p>
          <p style={{ color: "rgb(206, 56, 206)" }}>
            <button className="livewebsite_btn">
              <a
                href="https://www.xceltrip.com/"
                target="_blank"
                style={{ textDecoration: "none", color: "white" }}
              >
                Visit Website
              </a>
            </button>
            <span
              className="readmore"
              onClick={() => history.push("/detail", 4)}
            >
              Read More ➜
            </span>
          </p>
        </div>
        <div data-aos="zoom-out-down" className="project1">
          <img className="proj_images" src={xceltrip} alt="" />
        </div>
        {/* ------------------------------XCEL TRIP------------------------------------ */}
      </div>
    </div>
  );
}

export default Project;
