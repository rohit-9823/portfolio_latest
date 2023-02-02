import { React, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import prabhuipo from "../assets/image/prabhuipo.png";
import tms from "../assets/image/tms.png";
import jamna from "../assets/image/jamna.png";
import xceltrip from "../assets/image/xceltrip.png";

import Detaildata from "./detailApi";
function Details(props) {
  const history = useHistory();
  const [datas, setdatas] = useState([]);

  useEffect(() => {
    let newValue = Detaildata.filter(
      (value) => value.id == props.location.state
    );
    setdatas(newValue);

    if (!props.location.state) {
      history.push("/");
    }
  }, []);

  return (
    <Container>
      <div className="details" id="details">
        {datas.map((value) => (
          <>
            <div className="details_image">
              {props.location.state == 1 ? (
                <img src={prabhuipo} alt="" className="detail_images" />
              ) : props.location.state == 2 ? (
                <img src={tms} alt="" className="detail_images" />
              ) : props.location.state == 3 ? (
                <img src={jamna} alt="" className="detail_images" />
              ) : props.location.state == 4 ? (
                <img src={xceltrip} alt="" className="detail_images" />
              ) : null}
            </div>
            <div className="details_description">
              <h1>{value.heading}</h1>
              <hr />
              <p>{value.description}</p>
              <p className="techno">
                {" "}
                Technology we use: <br />— React <br /> — Java
              </p>
              <p className="member">
                Member Involved: <br />
                <i class="fa-sharp fa-solid fa-user-tie memberinvolved"></i>
                Rohit Singh (Frontend Developer) <br />
                <i class="fa-sharp fa-solid fa-user-tie memberinvolved mr-5"></i>
                Ajit Pudasaini (Backend Developer) <br />
              </p>
            </div>
          </>
        ))}
      </div>
    </Container>
  );
}

export default Details;
