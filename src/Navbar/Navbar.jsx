import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/image/logo.gif";
import "../assets/style/style.scss";

function Navbars() {
  const [theme, settheme] = useState("dark_theme");
  const [submenu, setsubmenu] = useState("no-submenu");
  const handletoogle = () => {
    {
      theme == "dark_theme" ? settheme("light_theme") : settheme("dark_theme");
    }
  };
  const handlenavbartoogle=()=>{
submenu=="no-submenu"? setsubmenu("show-submenu") : setsubmenu("no-submenu");

  }
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <>
      <Navbar className="navbars" variant="dark" id="navs">
        <Container>
          <Navbar.Brand href="#home">
            <i>
              <h2>
                <span
                  style={{
                    color: "rgb(123, 31, 123)",
                    fontFamily: "'Pacifico', cursive",
                  }}
                >{`<R`}</span>
                <span className="ohit_word">{`ohit/>`}</span>
              </h2>
            </i>
            {/* <img alt="" src={logo} className="d-inline-block align-top logo" />{" "} */}
          </Navbar.Brand>
          <div className="list_of_navbar">
            <input type="checkbox" class="checkbox" id="checkbox" />
            <label for="checkbox" class="label_check" onClick={handletoogle}>
              <i class="fas fa-moon"></i>
              <i class="fa-solid fa-sun"></i>
              <div class="ball" />
            </label>
            

            <i class="fa-solid fa-bars hamburger" onClick={handlenavbartoogle}></i>
            <a href="#contact" className="linkname">
              Contact
            </a>
            <a href="#project" className="linkname">
              Projects
            </a>
            <a href="#exp" className="linkname">
              Experience
            </a>
            <a href="#about" className="linkname">
              About
            </a>
            <a href="#hello" className="linkname">
              Home
            </a>

            {/* <button onClick={handletoogle}>click</button> */}
          </div>
          
        </Container>
      </Navbar>
      {submenu=="show-submenu"?
      <ul className={`list_linkname ${submenu === "show-submenu" ? "show-submenu" : ""}`} id="list_linkname">
  <li>
    <a href="#hello" className="inner_list_linkname">
      <i className="fa-solid fa-house nav_icons"></i> Home
    </a>
  </li>
  <li>
    <a href="#about" className="inner_list_linkname">
      <i className="fa-solid fa-user nav_icons"></i> About
    </a>
  </li>
  <li>
    <a href="#exp" className="inner_list_linkname">
      <i className="fa-solid fa-briefcase nav_icons"></i> Experience
    </a>
  </li>
  <li>
    <a href="#project" className="inner_list_linkname">
      <i className="fa-solid fa-rocket nav_icons"></i> Projects
    </a>
  </li>
  <li>
    <a href="#contact" className="inner_list_linkname">
      <i className="fa-solid fa-phone nav_icons"></i> Contact
    </a>
  </li>
</ul>
            :null}
    </>
  );
}

export default Navbars;
