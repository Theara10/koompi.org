import { Col, Row, Button } from "antd";
import React from "react";
import Contact from "../../components/Contact";

const student = require("../../lib/img/student.png");
const sala = require("../../lib/img/Mode.png");

function Sala() {
  return (
    <div className="sala">
      <div className="koompi-os-intro">
        <div className="container">
          <div className="os-banner-section">
            <Row>
              <Col span={8}>
                <div className="sala-koompi-details">
                  <h1>SALA KOOMPI</h1>
                  <p>
                    A virtual school that allows both students and <br />
                    teachers to view and provide learning resources.
                  </p>
                  <div className="btn-container">
                    <Button size="large" type="primary">
                      Explore
                    </Button>
                    <Button size="large" className="btn-create-account-sala">
                      Create Free Account
                    </Button>
                  </div>
                </div>
              </Col>
              <Col span={10} offset={2}>
                <img
                  src={sala.default}
                  alt="sala koompi"
                  className="sala-koompi-banner-pic"
                />
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <div className="container">
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
        <div className="container">
          <Row>
            <Col span={12}>
              <img
                src="https://www.mozilla.org/media/img/firefox/new/desktop/block-mr1-high-res.2dabc380db76.jpg"
                height="300"
                width="auto"
              />
            </Col>
            <Col span={12}>
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
      </div>

      <div className="easy-to-manage">
        <div className="container">
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
      </div>

      <div className="schools">
        <div className="container">
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
