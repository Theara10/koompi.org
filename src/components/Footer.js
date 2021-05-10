import { Col, Row } from "antd";
import React from "react";
const img = require("../lib/img/Koompi-White.png");

function Foot() {
  return (
    <div className="footer">
      <div className="footer-container">
        <img src={img.default} width="auto" height="40" className="logo" />

        <Row>
          <Col span={5} offset={1}>
            <div>
              <h2 className="footer-title">About</h2>
              <p>About</p>
              <p>About</p>
            </div>
          </Col>
          <Col span={6}>
            <div>
              <h2 className="footer-title">Resources</h2>
              <p>About</p>
              <p>About</p>
            </div>
          </Col>
          <Col span={6}>
            <div>
              <h2 className="footer-title">Help</h2>
              <p>Ask KOOMPI</p>
              <p>FAQ</p>
            </div>
          </Col>
          <Col span={6}>
            <div>
              <h2 className="footer-title">Connect With Us</h2>
              <p>About</p>
              <p>About</p>
            </div>
          </Col>
        </Row>
        <div style={{ textAlign: "center", paddingTop: 20 }}>
          <p style={{ fontWeight: 200 }}>KOOMPI.org ©2021 Created by KOOMPI</p>
        </div>
      </div>
    </div>
  );
}

export default Foot;
