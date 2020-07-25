import React from "react";
import { Icon, Row, Col } from "antd";
import "../view.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div>
      <div className="information-sec">
        <Row>
          <Col lg={8}>
            <p className="info-text">
              <i className="fas fa-map-marked-alt info-icon"></i>128 Ellington
              Blvd, Gaithersburg, MD 20878
            </p>
          </Col>
          <Col lg={8}>
            <p className="info-text">
              <i className="fas fa-address-book info-icon"></i> +1(240)-428-1427
            </p>
          </Col>
          <Col lg={8}>
            <p className="info-text">
              <i className="far fa-question-circle info-icon"></i>
              info@spicelifemd.com
            </p>
          </Col>
        </Row>
      </div>
      <div className="socialLinks">
        <h2>Connect with us on our Socials: </h2>
      </div>
      <div
        style={{
          fontFamily: "IM Fell Great Primer",
          backgroundColor: "#c70039",
          color: "white",
          height: "30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1rem",
        }}
      >
        <p style={{ paddingTop: "1%" }}>&copy; SpiceLife {year + " "}</p>
      </div>
    </div>
  );
}

export default Footer;
