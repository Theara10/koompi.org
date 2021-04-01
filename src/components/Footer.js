import { Col, Row } from "antd";
import React from "react";

function Foot() {
  return (
    <div className="footer">
      <div className="footer-container">
        <Row>
          <Col span={8}>
            <div>
              <h2 className="footer-title">Footer</h2>
              <p>About</p>
              <p>About</p>
            </div>
          </Col>
          <Col span={8}>
            <div>
              <p>About</p>
              <p>About</p>
              <p>About</p>
            </div>
          </Col>
          <Col span={8}>
            <div>
              <p>About</p>
              <p>About</p>
              <p>About</p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Foot;
