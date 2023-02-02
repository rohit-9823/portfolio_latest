import React from "react";
import { useState } from "react";
import AOS from "aos";
import vsn from "../assets/image/vsn.png";
import ccrc from "../assets/image/ccrc.png";
import cite from "../assets/image/cite.png";
import nitc from "../assets/image/nit.jpeg";
import growtech from "../assets/image/grow.png";
import cloco from "../assets/image/clocoes.png";
import { useEffect } from "react";
function Experience() {
  const [show, setshow] = useState(true);
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <div className="experience" id="exp">
      <div className="selection_type">
        {show ? (
          <>
            <h5
              onClick={() => setshow(true)}
              style={{ borderBottom: "3px solid rgb(123, 31, 123)" }}
            >
              Education
            </h5>
            <h5 onClick={() => setshow(false)}>Work Experience</h5>
          </>
        ) : (
          <>
            <h5 onClick={() => setshow(true)}>Education</h5>
            <h5
              onClick={() => setshow(false)}
              style={{ borderBottom: "3px solid rgb(123, 31, 123)" }}
            >
              Work Experience
            </h5>
          </>
        )}
      </div>
      <div className="experience_content">
        {show ? (
          <>
            <div data-aos="fade-down-right" className="showeducation">
              <div className="edulogo">
                <img src={cite} alt="vsn" />
              </div>
              <div className="edu_description">
                <h2>College of Information Technology and Engineering </h2>
                <h3>BCA</h3>
                <h4>Graduated</h4>
              </div>
            </div>
            <br />
            <div data-aos="fade-right" className="showeducation">
              <div className="edulogo">
                <img src={ccrc} alt="vsn" />
              </div>
              <div className="edu_description">
                <h2>Capital College and Research Center </h2>
                <h3>H.S.E.B</h3>
                <h4>Completed</h4>
              </div>
            </div>
            <br />
            <div data-aos="fade-up-right" className="showeducation">
              <div className="edulogo">
                <img src={vsn} alt="vsn" />
              </div>
              <div className="edu_description">
                <h2>VS Niketan English Medium School</h2>
                <h3>SLC</h3>
                <h4>Completed</h4>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flippingcard">
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img
                      src={nitc}
                      alt="Avatar"
                      style={{
                        width: "300px",
                        height: "300px",
                        borderRadius: "20px",
                      }}
                    />
                  </div>
                  <div class="flip-card-back">
                    <img
                      src={nitc}
                      alt=""
                      style={{
                        width: "300px",
                        height: "300px",
                        opacity: "0.1",
                      }}
                    />
                    <div className="words">
                      <h3>National Information Technology Center</h3>
                      <b>
                        <p>Database Administrator</p>{" "}
                      </b>
                      <p>Intern (Jan 2021-Apr 2021)</p>
                      <span style={{ textAlign: "left" }}>
                        Monitoring Database performance Assisting in database
                        design and development
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img
                      src={growtech}
                      alt="Avatar"
                      style={{
                        width: "300px",
                        height: "300px",
                        objectFit: "contain",
                        marginLeft: "20px",
                      }}
                    />
                  </div>
                  <div class="flip-card-back">
                    <img
                      src={growtech}
                      alt=""
                      style={{
                        width: "300px",
                        height: "300px",
                        objectFit: "contain",
                        opacity: "0.1",
                      }}
                    />
                    <div className="words">
                      <h3>Grow Tech Pvt. Ltd.</h3>
                      <b>
                        <p>Frontend Developer</p>{" "}
                      </b>
                      <p>(May 2021- Feb 2023)</p>
                      <span style={{ textAlign: "left" }}>
                        {" "}
                        Developing new user-facing features, building reusable
                        codes, optimizing page loading times
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img
                      src={cloco}
                      alt="Avatar"
                      style={{
                        width: "290px",
                        height: "290px",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                  <div class="flip-card-back">
                    <img
                      src={cloco}
                      alt=""
                      style={{
                        width: "290px",
                        height: "290px",
                        objectFit: "contain",
                        opacity: "0.1",
                      }}
                    />
                    <div className="words">
                      <h3>株式会社cloco.</h3>
                      <b>
                        <p>Frontend Developer</p>{" "}
                      </b>
                      <p>(Mar 2023 - Present)</p>
                      <span style={{ textAlign: "left" }}>
                        {" "}
                        Developing new user-facing features, building reusable
                        codes, optimizing page loading times
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Experience;
