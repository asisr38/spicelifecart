import React from "react";
import { Col, Row, Button } from "antd";
import dosa from "./dosa.gif";
import "./home.css";
import { PhoneOutlined } from "@ant-design/icons";

function Home() {
  return (
    <div className="title">
      <Row className="containerFluid">
        <Col className="titleContents" lg={12}>
          <h1 className="titleHeading">
            Spice Life <br /> Indian Fare
          </h1>
          <p className="titleDescription">
            Build your own Spice Bowl, with a scoop of everything when you stop
            by. You can reserve a table, or order a take out by calling us at{" "}
            <strong>
              <b>
                <PhoneOutlined rotate={180} /> (240) 428-1427
              </b>
            </strong>
            . Or you can order a carry out from our delivery partners.
          </p>

          <div className="titleButtons">
            <Row gutter={[16, 16]}>
              <Col lg={6} md={6}>
                <Button className="btnHome" size="large" href="/menu">
                  Order Now
                </Button>
              </Col>
              <Col lg={6} md={6}>
                <Button
                  className="btnHome"
                  type="primary"
                  size="large"
                  href="/register"
                >
                  <i
                    className="fas fa-user-plus"
                    style={{ paddingTop: "10px", paddingRight: "5px" }}
                  ></i>
                  Sign Up
                </Button>
              </Col>
            </Row>
          </div>

          <div className="deliveryPartners">
            <h3 style={{ paddingTop: "7%" }}> Delivery Partners </h3>
            <Row gutter={[16, 16]}>
              <Col lg={6} md={4}>
                <a
                  className="btn"
                  role="button"
                  target="_blank"
                  href="https://www.grubhub.com/restaurant/spicelife-indian-fare-128-ellington-blvd-gaithersburg/1141297"
                >
                  Grubhub
                </a>
              </Col>
              <Col lg={6} md={4}>
                <a
                  className="btn"
                  role="button"
                  target="_blank"
                  href="https://www.ubereats.com/washington-dc/food-delivery/spicelife-indian-fare/tKmqFV0XSmGCybCx-WUMJQ"
                >
                  UberEats
                </a>
              </Col>
              <Col lg={6} md={4}>
                <a
                  className="btn"
                  role="button"
                  target="_blank"
                  href="https://www.doordash.com/store/spicelife-indian-fare-gaithersburg-545444/en-US"
                >
                  DoorDash
                </a>
              </Col>
            </Row>
          </div>
        </Col>

        <Col className="titleContents" lg={12}>
          <img className="titleImage" src={dosa} alt="dosa" />
        </Col>
      </Row>
    </div>
  );
}

export default Home;
{
  /* <div className="title-buttons">
            <Button
              style={{ marginRight: "15px" }}
              size="large"
              href="/menu"
              onclick="location.href='#info';"
            >
              <i className="fa fa-cutlery"></i>
              Order Now
            </Button>
            <Button
              type="primary"
              size="large"
              href="/register"
              onclick="location.href='signup.html';"
            >
              <i
                className="fas fa-user-plus"
                style={{ marginRight: "10px" }}
              ></i>
              Sign Up
            </Button>
          </div> */
}
