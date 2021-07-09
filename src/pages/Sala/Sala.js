import { Col, Row, Button } from "antd";
import React from "react";
import Contact from "../../components/Contact";
import "./Sala.css";

const student = require("../../lib/img/student.png");

function Sala() {
  return (
    <div className="sala">
      <div className="sala-intro">
        {/* <img
          src={img1.default}
          width="auto"
          height="300"
          // className="img"
        />
        <h1>SALA KOOMPI</h1>
        <p>
          A virtual school that allows both students and <br />
          teachers to view and provide learning resources.
        </p>
        <Button size="large" type="sala">
          Create your free account
        </Button> */}

        <Row>
          <Col span={11} offset={1}>
            <h1>SALA KOOMPI</h1>
            <p>
              A virtual school that allows both students and <br />
              teachers to view and provide learning resources.
            </p>
            <Button size="large" type="sala">
              Explore
            </Button>
            <Button size="large" type="sala-acc" style={{ marginLeft: 20 }}>
              Create Free Account
            </Button>
          </Col>
          <Col span={10} offset={2}>
            <img
              // src="https://koompi.com/assets/images/projects/sala-koompi.png"
              src={
                "https://global-uploads.webflow.com/5fbb75c0795486e7856db4c8/5fbe0514081ed96e60b08aa8_Illustration.svg"
              }
              width="auto"
              height="300"
            />
          </Col>
        </Row>
      </div>

      <div className="sala-purpose">
        <div className="sala-purpose-container">
          <p style={{ fontSize: 26, color: "rgb(95, 99, 104)" }}>
            Why join Sala?
          </p>
          <h2 style={{ fontSize: 56, lineHeight: 1.2 }}>
            Virtual School for the next generation of learners
          </h2>
          <p className="sala-purpose-subtitle">
            Sala KOOMPI is created to Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
      </div>

      <div className="courses">
        <Row>
          <Col span={10} offset={2}>
            <img
              src="https://www.mozilla.org/media/img/firefox/new/desktop/block-mr1-high-res.2dabc380db76.jpg"
              height="300"
              width="auto"
            />
          </Col>
          <Col span={10} offset={2}>
            <h2>Learn Variety Of Subjects</h2>
            <p className="intro-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Col>
        </Row>
      </div>

      <div className="easy-to-manage">
        <Row>
          <Col span={10} offset={2}>
            <h2>Learn Anywhere Anytime at Your Own Pace </h2>
            <p className="intro-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Col>
          <Col span={10} offset={2}>
            <img
              src="https://www.mozilla.org/media/img/firefox/new/desktop/block-mr1-high-res.2dabc380db76.jpg"
              height="300"
              width="auto"
            />
          </Col>
        </Row>
      </div>

      <div className="schools">
        <Row>
          <Col span={10} offset={2}>
            <img
              src="https://www.mozilla.org/media/img/firefox/new/desktop/block-mr1-high-res.2dabc380db76.jpg"
              height="300"
              width="auto"
            />
          </Col>
          <Col span={10} offset={2}>
            <h2>Create Your Own School </h2>
            <p className="intro-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Col>
        </Row>
      </div>

      <div className="users">
        <div className="users-container">
          <Row>
            <Col span={10} style={{ paddingRight: 60, paddingTop: 50 }}>
              <h1>
                Join more than <br />
                10000 users <br />
                on Sala
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Button size="large" type="sala">
                Explore
              </Button>
            </Col>
            <Col span={14}>
              <img src={student.default} width="auto" height="500" />
            </Col>
          </Row>
        </div>
      </div>
      <Contact />
    </div>
  );
}

export default Sala;
