import { Col, Row, Button } from "antd";
import React from "react";
import Contact from "../../components/Contact";
import WhySALA from "./why";

const student = require("../../lib/img/student.png");
const sala = require("../../lib/img/Mode.png");
const why = require("../../lib/img/why2.png");

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

      <div className="sala-white-back">
        <div className="container">
          <Row>
            <Col span={18}>
              <div className="sala-purpose-container">
                <p className="why-join-sala">Why join SALA?</p>
                <h2>Virtual School for the next generation of learners</h2>
                <p className="sala-purpose-subtitle">
                  Sala KOOMPI is created to Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat.
                </p>
              </div>
            </Col>
            <Col span={6}>
              <div>
                <img
                  src={why.default}
                  alt=" why join with sala"
                  className="why-join-salakoompi"
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>

      {/* --------why sala ---------- */}
      <div>
        <WhySALA />
      </div>

      <div className="sala-white-back">
        <div className="container">
          <Row>
            <Col span={10}>
              <div className="sala-koompi-user-details">
                <h2>Join more than 10000 users on SALA KOOMPI</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Button size="large" type="sala">
                  Explore
                </Button>
              </div>
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
