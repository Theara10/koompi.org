import { Col, Row, Button } from "antd";
import React from "react";
import "./Sala.css";

const img1 = require("../../lib/img/online-class3.jpg");

function Sala() {
  return (
    <div className="sala">
      <div className="sala-intro">
        <Row>
          <Col span={10}>
            <h1>SALA KOOMPI is a localize and global online course platform</h1>
            <p>
              Learn and create your own online school. Unlimited courses, mainly
              focusing on STEAM subjects.
            </p>
            <Button size="large" type="sala">
              Create your free account
            </Button>
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
            <h1>Learn From the Best</h1>
            <p className="intro-description">
              Learn valuable methods and techniques explained by different
              creators.
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
