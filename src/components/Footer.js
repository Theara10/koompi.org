import { Col, Row } from "antd";
import React from "react";

function Foot() {
  return (
    <div className="footer">
      <div className="footer-container">
        <Row>
          <Col span={8}>
            <div>
              <h2 className="footer-title">About</h2>
              <p>About</p>
              <p>About</p>
            </div>
          </Col>
          <Col span={8}>
            <div>
              <h2 className="footer-title">Support</h2>
              <p>About</p>
              <p>About</p>
            </div>
          </Col>
          <Col span={8}>
            <div>
              <h2 className="footer-title">Community</h2>
              <p>About</p>
              <p>About</p>
            </div>
          </Col>
        </Row>
        <div>
          <p className="copyright">KOOMPI.org ©2021 Created by KOOMPI</p>
        </div>
      </div>
    </div>
  );
}

export default Foot;
