import React from "react";
import "./Robotic.css";
import { Row, Col, Button } from "antd";

function Robotic() {
  return (
    <div className="robotic">
      <div className="robotic-intro">
        <h1 style={{ color: "white" }}>
          KOOMPI Robotic
          <br /> Program
        </h1>
        <p style={{ color: "white", fontSize: 30 }}>
          Computer workstation with usability, minimal internet <br />
          dependency, efficiency, and affordable cost.
        </p>
      </div>
      <div className="how-it-works">
        <div className="how-it-works-container">
          <h2 style={{ textAlign: "center" }}>How It Works</h2>
          <Row gutter={18}>
            <Col span={11} offset={1}>
              <div>
                <img
                  src="https://icons.getbootstrap.com/assets/img/icons-hero.png"
                  height="100"
                  width="auto"
                />
                <h2
                  style={{ fontSize: 26, fontWeight: "bold", marginBottom: 0 }}
                >
                  Software Development
                </h2>
                <p>
                  Using <strong>Scratch</strong>, a programming language and
                  community tool to create stories, games and animations.
                </p>
              </div>
            </Col>
            <Col span={11} offset={1}>
              <div>
                <img
                  src="https://icons.getbootstrap.com/assets/img/icons-hero.png"
                  height="100"
                  width="auto"
                />
                <h2
                  style={{ fontSize: 26, fontWeight: "bold", marginBottom: 0 }}
                >
                  Hardware Development
                </h2>
                <p>
                  All the work is to gear up the performance of open-source and
                  deliver the reliable operating system to all users, who use
                  it.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className="robot-type">
        <div className="robot-type-container">
          <h2>Our Robots</h2>
          <Row gutter={[16, 6]} style={{ paddingTop: 20 }}>
            <Col span={12}>
              <div
                style={{
                  backgroundColor: " #f1f2f6",
                  height: 600,
                  paddingTop: 30,
                }}
              >
                <h4>Robot 1</h4>
                <p>Learn More..</p>
                <img
                  style={{ marginTop: 70 }}
                  src="https://www.bostondynamics.com/sites/default/files/2021-02/left-column-660x480.png"
                  height="400"
                  width="auto"
                />
              </div>
            </Col>
            <Col span={12}>
              <div
                style={{
                  backgroundColor: " #f1f2f6",
                  height: 600,
                  paddingTop: 30,
                }}
              >
                <h4>Robot 2</h4>
                <p>Learn More..</p>
                <img
                  src="https://www.bostondynamics.com/sites/default/files/2021-02/right-column-660x480.png"
                  height="400"
                  width="auto"
                  style={{ marginTop: 70 }}
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className="ideas">
        <div className="ideas-container">
          {/* <h1 style={{ textAlign: "center" }}>
            What to be apart of our growing developer community?
          </h1> */}
          <Row gutter={18}>
            <Col span={7} offset={1}>
              <div>
                <img
                  src="https://icons.getbootstrap.com/assets/img/icons-hero.png"
                  height="100"
                  width="auto"
                />
                <h2
                  style={{ fontSize: 28, fontWeight: "bold", marginBottom: 0 }}
                >
                  Idea
                </h2>
                <p>
                  The idea behind KOOMPI OS is to create a free operating system
                  for all kind of users without breaching their personal data.
                </p>
              </div>
            </Col>
            <Col span={7} offset={1}>
              <div>
                <img
                  src="https://icons.getbootstrap.com/assets/img/icons-hero.png"
                  height="100"
                  width="auto"
                />
                <h2
                  style={{ fontSize: 28, fontWeight: "bold", marginBottom: 0 }}
                >
                  Goal
                </h2>
                <p>
                  All the work is to gear up the performance of open-source and
                  deliver the reliable operating system to all users, who use
                  it.
                </p>
              </div>
            </Col>
            <Col span={7} offset={1}>
              <div>
                <img
                  src="https://icons.getbootstrap.com/assets/img/icons-hero.png"
                  height="100"
                  width="auto"
                />
                <h2
                  style={{ fontSize: 28, fontWeight: "bold", marginBottom: 0 }}
                >
                  Target
                </h2>
                <p>
                  The users who are exhausted with change an operating system
                  and desktop environments that are not available for all
                  resources they need.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Robotic;
