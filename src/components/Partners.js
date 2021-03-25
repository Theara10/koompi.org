import React from "react";
import { Row, Col } from "antd";

function Partners() {
  return (
    <div>
      <div>
        <Row
          className="partner"
          align="middle"
          justify="center"
          gutter={{ xs: 0, md: 40 }}
        >
          <Col
            xs={{ span: 12 }}
            sm={{ span: 7 }}
            xl={{ span: 4 }}
            className="gutter-row"
          >
            <img
              width="100"
              height="100"
              src="https://ai.devoteam.com/wp-content/uploads/sites/91/2018/05/google-logo-icon-png-transparent-background.png"
              alt="logo"
            />
          </Col>
          <Col
            xs={{ span: 12 }}
            sm={{ span: 7 }}
            xl={{ span: 4 }}
            className="gutter-row"
          >
            <img
              width="100"
              height="100"
              src="https://ai.devoteam.com/wp-content/uploads/sites/91/2018/05/google-logo-icon-png-transparent-background.png"
              alt="logo"
            />
          </Col>
          <Col
            xs={{ span: 12 }}
            sm={{ span: 7 }}
            xl={{ span: 4 }}
            className="gutter-row"
          >
            <img
              width="100"
              height="100"
              src="https://cryptologos.cc/logos/bitcoin-btc-logo.png"
              alt="logo"
            />
          </Col>
          <Col
            xs={{ span: 12 }}
            sm={{ span: 7 }}
            xl={{ span: 4 }}
            className="gutter-row"
          >
            <img
              width="100"
              height="100"
              src="https://cryptologos.cc/logos/bitcoin-btc-logo.png"
              alt="logo"
            />
          </Col>
          <Col
            xs={{ span: 12 }}
            sm={{ span: 5 }}
            xl={{ span: 2 }}
            className="gutter-row"
          >
            <img
              width="100"
              height="100"
              src="https://ai.devoteam.com/wp-content/uploads/sites/91/2018/05/google-logo-icon-png-transparent-background.png"
              alt="logo"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Partners;
