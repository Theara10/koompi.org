import { Col, Row, Button } from "antd";
import React from "react";
// import Contact from "../../components/Contact";
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
            <Row gutter={24}>
              <Col xs={24} sm={24} md={10} lg={10} xl={10} xxl={10}>
                <div className="sala-koompi-details">
                  <h1>SALA KOOMPI</h1>
                  <p className="banner-desc2">
                    Virtual platform for students, teachers, and content
                    creators.
                  </p>
                  <div className="btn-container">
                    <Button size="large" type="primary" className="btn-explore">
                      <a href="https://sala.koompi.com/" target="_blank">
                        Explore
                      </a>
                    </Button>
                    <Button
                      size="large"
                      type="primary"
                      className="btn-create-account-sala"
                    >
                      <a
                        href="https://sala.koompi.com/register"
                        target="_blank"
                      >
                        Create Account
                      </a>
                    </Button>
                  </div>
                </div>
              </Col>
              <Col xs={24} sm={24} md={14} lg={14} xl={14} xxl={14}>
                <img
                  src={sala.default}
                  alt="sala koompi"
                  className="img-responsive sala-koompi-banner-pic"
                />
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <div className="sala-white-back">
        <div className="container">
          <Row gutter={24}>
            <Col xs={24} sm={24} md={18} lg={18} xl={18} xxl={18}>
              <div className="sala-purpose-container">
                <p className="why-join-sala">Why join SALA?</p>
                <h2>E-learning made easy</h2>
                <p className="sala-purpose-subtitle">
                  SALA KOOMPI, formerly called KOOMPI Academy, is an eLearning
                  platform that aims to enable a decentralized and open-ended
                  education for Cambodian students. The website (sala.koompi.com
                  or academy.koompi.com) can be accessed for free by everyone
                  and caters to students as young as ones from the kindergarten
                  level. The default language is in Khmer.
                </p>
              </div>
            </Col>
            <Col xs={24} sm={24} md={6} lg={6} xl={6} xxl={6}>
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
          <Row gutter={[24, 24]}>
            <Col xs={24} sm={24} md={10} lg={10} xl={10} xxl={10}>
              <div className="sala-koompi-user-details">
                <h2>Join more than 10000 users on SALA KOOMPI</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Button size="large" type="primary">
                  <a href="https://sala.koompi.com/" target="_blank">
                    Explore
                  </a>
                </Button>
              </div>
            </Col>
            <Col xs={24} sm={24} md={14} lg={14} xl={14} xxl={14}>
              <img
                src={student.default}
                alt="sala-image"
                className="img-responsive"
              />
            </Col>
          </Row>
        </div>
      </div>
      {/* <Contact /> */}
    </div>
  );
}

export default Sala;
