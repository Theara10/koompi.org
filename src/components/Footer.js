import { Col, Row } from "antd";
import React from "react";

function Footer() {
  return (
    <div className="footer">
      <Row>
        <Col span={8}>
          <div>
            <h2 className="footer-title">Footer</h2>
          </div>
        </Col>
        <Col span={8}>Footer</Col>
        <Col span={8}>Footer</Col>
      </Row>
    </div>
  );
}

export default Footer;
