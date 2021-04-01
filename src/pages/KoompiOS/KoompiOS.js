import React from "react";
import { Row, Col } from "antd";
import "./KoompiOS.css";

function KoompiOS() {
  return (
    <div className="koompi-os">
      <div className="intro">
        <Row>
          <Col span={16}>
            <h1 className="intro-title">
              The Future of Operating System, fully Decentralize and Open-source
            </h1>
            <p className="intro-description">
              If you could not find any answers related to the problems,
              <br /> let us know by. I'm Batman.
            </p>
          </Col>
          <Col span={8}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtV3wPFTYM1WWDdo8eIyPAWCgADh88aq6mTbIOpllBTqQ3cftzsd29KkLl51vUOPTlV_NTZgVtcgA&usqp=CAU"
              width="auto"
              height="200"
              className="intro-img"
            />
          </Col>
        </Row>
      </div>

      <div className="open-source">
        <Row>
          <Col span={12}>
            <img
              src="https://uploads-ssl.webflow.com/5d7cbf81500ecce115c776f7/5da76c5de0a68b7ba5c164bc_circology_opensourcespotglass.png"
              height="300"
              width="auto"
            />
          </Col>
          <Col span={12}>
            <h1>Open Source</h1>
            <p className="intro-description">
              If you could not find any answers related to the problems,
              <br /> let us know by. I'm Batman. If you could not find any
              answers related to the problems, If you could not find any answers
              related to the problems,
            </p>
          </Col>
        </Row>
      </div>

      <div className="decentralize">
        <Row>
          <Col span={12}>
            <h1>Decentralize</h1>
            <p className="intro-description">
              If you could not find any answers related to the problems,
              <br /> let us know by. I'm Batman. If you could not find any
              answers related to the problems, If you could not find any answers
              related to the problems,
            </p>
          </Col>
          <Col span={12}>
            <img
              src="https://i.pinimg.com/originals/73/8d/16/738d16e0ba772f6142be3c5dd8c70547.png"
              height="300"
              width="auto"
            />
          </Col>
        </Row>
      </div>

      <div className="open-source">
        <Row>
          <Col span={12}>
            <img
              src="https://uploads-ssl.webflow.com/5d7cbf81500ecce115c776f7/5da76c5de0a68b7ba5c164bc_circology_opensourcespotglass.png"
              height="300"
              width="auto"
            />
          </Col>
          <Col span={12}>
            <h1>Open Source</h1>
            <p className="intro-description">
              If you could not find any answers related to the problems,
              <br /> let us know by. I'm Batman. If you could not find any
              answers related to the problems, If you could not find any answers
              related to the problems,
            </p>
          </Col>
        </Row>
      </div>

      <div className="applications">
        <div className="applications-top">
          <h1 style={{ textAlign: "center" }}>Supported Applications</h1>
          <p className="intro-description">
            If you could not find any answers related to the problems, let us
            know by. I'm Batman. If you could not find any answers related to
            the problems.
          </p>
        </div>
        <div className="application-bottom">
          <div className="application-bottom-card">
            <p>Card</p>
          </div>
          <div className="application-bottom-card">
            <p>Card</p>
          </div>
          <div className="application-bottom-card">
            <p>Card</p>
          </div>
          <div className="application-bottom-card">
            <p>Card</p>
          </div>
          <div className="application-bottom-card">
            <p>Card</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KoompiOS;
