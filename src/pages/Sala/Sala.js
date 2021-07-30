import { Col, Row, Button } from "antd";
import React from "react";
import Contact from "../../components/Contact";
import WhySALA from "./why";

const student = require("../../lib/img/student.png");
const sala = require("../../lib/img/Mode.png");
const why = require("../../lib/img/why2.png");
import target from "../../lib/img/target-onelab.png";

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
          <Row>
            <Col span={10} offset={2}>
              <h2>E-learning made easy </h2>
              <p className="intro-description">
                SALA KOOMPI, formerly called KOOMPI Academy, is an eLearning
                platform that aims to enable a decentralized and open-ended
                education for Cambodian students. The website (sala.koompi.com
                or academy.koompi.com) can be accessed for free by everyone and
                caters to students as young as ones from the kindergarten level.
                The default language is in Khmer.
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

      {/* --------why sala ---------- */}
      <div>
        <WhySALA />
        <Ideas />
        <div className="sala-white-back">
          <div className="container">
            <Row>
              <Col span={10}>
                <div className="sala-koompi-user-details">
                  <h2>Join more than 10000 users on SALA KOOMPI</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
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
        <Contact
          title="Sala Community"
          subtitle="Join Sala Community to get in touch with amazing teachers and learners."
          button="Join Now"
        />
      </div>
    </div>
  );
}

const Ideas = () => {
  return (
    <React.Fragment>
      <div className="ideas">
        <div className="container">
          <Row gutter={24}>
            <Col span={8}>
              <div>
                <img src={target} alt="idea" className="who-onelab-img" />
                <h3>Enroll as a Student</h3>
                <p>Learn STEAM subjects and keep track of your progress.</p>
              </div>
            </Col>
            <Col span={8}>
              <div>
                <img src={target} alt="goals" className="who-onelab-img" />
                <h3>Sign up as a Teacher and contribute to the lesson pool </h3>
                <p>
                  Upload free content or earn extra income with premium content.
                  Your contribution means the world to us and students!
                </p>
              </div>
            </Col>
            <Col span={8}>
              <div>
                <img src={target} alt="target" className="who-onelab-img" />
                <h3>Become a Principal of your school</h3>
                <p>Create a school and recruit your team of teachers!</p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sala;
