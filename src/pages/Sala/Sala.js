import { Col, Row } from "antd";
import React from "react";
import "./Sala.css";

const img1 = require("../../lib/img/online-class3.jpg");

function Sala() {
  return (
    <div className="sala">
      <div className="sala-intro">
        <Row>
          <Col span={10}>
            <h1>Study Anywhere On VIRTUAL SCHOOL</h1>
            <p>
              SALA KOOMPI is a virtual school that allows both students and
              teachers to view and provide learning resources resources.
            </p>
            <p className="sala-button">Explore</p>
          </Col>
          <Col span={14}>
            <img src={img1.default} width="auto" height="400" className="img" />
          </Col>
        </Row>
      </div>

      <div className="courses">
        <Row>
          <Col span={12}>
            <img
              src="https://uploads-ssl.webflow.com/5d7cbf81500ecce115c776f7/5da76c5de0a68b7ba5c164bc_circology_opensourcespotglass.png"
              height="300"
              width="auto"
            />
          </Col>
          <Col span={12}>
            <h1>Enroll In Good Courses For Free</h1>
            <p className="intro-description">
              If you could not find any answers related to the problems,
              <br /> let us know by. I'm Batman. If you could not find any
              answers related to the problems, If you could not find any answers
              related to the problems,
            </p>
          </Col>
        </Row>
      </div>

      <div className="schools">
        <Row>
          <Col span={12}>
            <h1>Create Your Own School </h1>
            <p className="intro-description">
              If you could not find any answers related to the problems,
              <br /> let us know by. I'm Batman. If you could not find any
              answers related to the problems, If you could not find any answers
              related to the problems,
            </p>
          </Col>
          <Col span={12}>
            <img
              src="https://uploads-ssl.webflow.com/5d7cbf81500ecce115c776f7/5da76c5de0a68b7ba5c164bc_circology_opensourcespotglass.png"
              height="300"
              width="auto"
            />
          </Col>
        </Row>
      </div>

      <div className="upload">
        <Row>
          <Col span={12}>
            <img
              src="https://uploads-ssl.webflow.com/5d7cbf81500ecce115c776f7/5da76c5de0a68b7ba5c164bc_circology_opensourcespotglass.png"
              height="300"
              width="auto"
            />
          </Col>
          <Col span={12}>
            <h1>Upload Courses </h1>
            <p className="intro-description">
              If you could not find any answers related to the problems,
              <br /> let us know by. I'm Batman. If you could not find any
              answers related to the problems, If you could not find any answers
              related to the problems,
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Sala;
