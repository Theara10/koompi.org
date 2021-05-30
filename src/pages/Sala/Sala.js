import { Col, Row, Button } from "antd";
import React from "react";
import Contact from "../../components/Contact";
import "./Sala.css";

const img1 = require("../../lib/img/online-class3.jpg");

function Sala() {
  return (
    <div className="sala">
      <div className="sala-intro">
        <Row>
          <Col span={11} offset={1}>
            <h1>SALA KOOMPI</h1>
            <p>
              A virtual school that allows both students and <br />
              teachers to view and provide learning resources.
            </p>
            <Button size="large" type="sala">
              Create your free account
            </Button>
          </Col>
          <Col span={12}>
            <img
              src="https://koompi.com/assets/images/projects/sala-koompi.png"
              width="auto"
              height="300"
              // className="img"
            />
          </Col>
        </Row>
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
            <h2>Learn From the Best</h2>
            <p className="intro-description">
              Learn valuable methods and techniques explained <br />
              by different creators.
            </p>
          </Col>
        </Row>
      </div>

      <div className="schools">
        <Row>
          <Col span={11} offset={1}>
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
              src="https://uploads-ssl.webflow.com/5d7cbf81500ecce115c776f7/5da76c5de0a68b7ba5c164bc_circology_opensourcespotglass.png"
              height="300"
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
