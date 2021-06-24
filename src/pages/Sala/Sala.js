import { Col, Row, Button } from "antd";
import React from "react";
import Contact from "../../components/Contact";
import "./Sala.css";

const img1 = require("../../lib/img/sala-intro-img.png");

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

      <div className="why-sala">
        <h2 style={{ marginBottom: 50 }}>Why Sala KOOMPI?</h2>
        <div className="why-sala-container">
          <Row gutter={18}>
            <Col span={7} offset={1}>
              <div>
                <img
                  src="https://icons.getbootstrap.com/assets/img/icons-hero.png"
                  height="80"
                  width="auto"
                />
                <h2
                  style={{
                    fontSize: 24,
                    fontWeight: "bold",
                    marginBottom: 0,
                    marginTop: 20,
                  }}
                >
                  Feature 1
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
                  height="80"
                  width="auto"
                />
                <h2
                  style={{
                    fontSize: 24,
                    fontWeight: "bold",
                    marginBottom: 0,
                    marginTop: 20,
                  }}
                >
                  Feature 3
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
                  height="80"
                  width="auto"
                />
                <h2
                  style={{
                    fontSize: 24,
                    fontWeight: "bold",
                    marginBottom: 0,
                    marginTop: 20,
                  }}
                >
                  Feature 3
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

      <div className="courses">
        <Row>
          <Col span={10} offset={2}>
            <img
              src="https://uploads-ssl.webflow.com/5d7cbf81500ecce115c776f7/5da76c5de0a68b7ba5c164bc_circology_opensourcespotglass.png"
              height="300"
              width="auto"
            />
          </Col>
          <Col span={12}>
            <h2>Learn Variety Of Subjects</h2>
            <p className="intro-description">
              Learn valuable methods and techniques explained <br />
              by different creators.
            </p>
          </Col>
        </Row>
      </div>

      <div className="schools">
        <Row>
          <Col span={10} offset={2}>
            <h2>Create Your Own School </h2>
            <p className="intro-description">
              If you could not find any answers related to the problems,
              <br /> let us know by. I'm Batman. If you could not find any
              answers related to the problems, If you could not find any answers
              related to the problems,
            </p>
          </Col>
          <Col span={11} offset={1}>
            <img
              src="https://image.freepik.com/free-vector/online-school-platform-abstract-concept-illustration-homeschooling-online-education-platform-digital-classes-virtual-courses-lms-school_335657-3486.jpg"
              height="400"
              width="auto"
            />
          </Col>
        </Row>
      </div>

      <div className="courses-category">
        <h2>Courses</h2>
        <p>
          If you could not find any answers related to the problems, let us know
          by. I'm Batman. If you could not find any <br /> I'm Batman. If you
          could not find any.
        </p>
        <div className="courses-row">
          <Row gutter={[16, 16]} className="batman">
            <Col span={6}>
              <div className="courses-batman">
                <p>Math</p>
              </div>
            </Col>
            <Col span={6}>
              <div className="courses-batman">
                <p>Math</p>
              </div>
            </Col>
            <Col span={6}>
              <div className="courses-batman">
                <p>Math</p>
              </div>
            </Col>
            <Col span={6}>
              <div className="courses-batman">
                <p>Math</p>
              </div>
            </Col>
            <Col span={6}>
              <div className="courses-batman">
                <p>Math</p>
              </div>
            </Col>
            <Col span={6}>
              <div className="courses-batman">
                <p>Math</p>
              </div>
            </Col>
            <Col span={6}>
              <div className="courses-batman">
                <p>Math</p>
              </div>
            </Col>
            <Col span={6}>
              <div className="courses-batman">
                <p>Math</p>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className="users">
        <h2>Users</h2>
        <p>
          If you could not find any answers related to the problems, let us know
          by. I'm Batman. If you could not find any <br /> I'm Batman. If you
          could not find any.
        </p>
        <div className="container">
          <div>
            <Row>
              <Col span={6}>
                <div>
                  <p className="user-title">Users</p>
                  <h3 className="number">10000+</h3>
                </div>
              </Col>
              <Col span={6}>
                <div>
                  <p className="user-title">Courses</p>
                  <h3 className="number">3000+</h3>
                </div>
              </Col>
              <Col span={6}>
                <div>
                  <p className="user-title">Schools</p>
                  <h3 className="number">200+</h3>
                </div>
              </Col>
              <Col span={6}>
                <div>
                  <p className="user-title">Instructors</p>
                  <h3 className="number">5000+</h3>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
}

export default Sala;
