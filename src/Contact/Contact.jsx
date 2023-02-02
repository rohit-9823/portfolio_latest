import React from "react";
import { useRef } from "react";
import { useHistory } from "react-router-dom";
import mail from "../assets/image/imail.gif";
function Contact() {
  const name = useRef();
  const email = useRef();
  const msg = useRef();
  const history = useHistory();
  const submit = () => {
    console.log(name);
    history.push("/");
  };
  return (
    <>
      <div className="contactme" id="contact">
        <div className="leftcontactme">
          <h1>
            Contact Me <img src={mail} alt="" className="contactimg" />
          </h1>
          <h5>
            DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL
          </h5>
          <br />
          <i class="fa-solid fa-paper-plane"> </i>
          <span> mrsingh9823@gmail.com</span> <br />
          <br />
          <a target="_blank" href="https://www.facebook.com/rohitsingh123976/">
            <i class="contact-icons fa-2x  fa-brands fa-facebook"></i>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/rohit-singh-maharjan/"
          >
            <i class="contact-icons fa-2x fa-brands fa-linkedin"></i>
          </a>
          <a target="_blank" href="mailto: mrsingh9823@gmail.com">
            <i class="contact-icons fa-2x fa-solid fa-envelope"></i>
          </a>
        </div>
        <div className="rightcontactme">
          <form action="https://formspree.io/f/moqzvlwy" method="POST">
            <input
              type="text"
              name="name"
              className="inputs"
              placeholder="Your Name"
              ref={name}
            />
            <br />
            <input
              type="email"
              name="email"
              className="inputs"
              placeholder="Your Email"
              ref={email}
            />
            <br />
            <textarea
              className="inputs"
              ref={msg}
              rows="4"
              name="message"
              cols="50"
              placeholder="Your Message"
              style={{ resize: "none" }}
            ></textarea>
            <button className="contactsubmit_btn" onClick={submit}>
              Submit
            </button>
          </form>
        </div>
      </div>
      <div
        className="foot"
        style={{
          color: "white",
          margin: "3%",
          position: "relative",
          top: "20px",
        }}
      >
        <footer className="footer">Powered by: @Rohit Singh</footer>
      </div>
    </>
  );
}

export default Contact;
