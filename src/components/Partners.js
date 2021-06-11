import React from "react";
import { Row, Col, Carousel } from "antd";

function Partners() {
  return (
    <div>
      <div>
        <Row
          align="middle"
          justify="center"
          gutter={{ xs: 0, md: 20 }}
          onScroll
        >
          <Col>
            <img
              width="auto"
              height="180"
              src="http://www.vitaminair.org/images/partner/smallworld.png"
              alt="logo"
            />
          </Col>
          <Col>
            <img
              width="auto"
              height="150"
              src="http://www.vitaminair.org/images/partner/sabay.png"
              alt="logo"
            />
          </Col>
          <Col>
            <img
              width="auto"
              height="150"
              src="http://www.vitaminair.org/images/partner/isi-group.png"
              alt="logo"
            />
          </Col>
          <Col>
            <img
              width="auto"
              height="150"
              src="https://miro.medium.com/max/186/1*UBckoGkQZnm-qrL0hxCk1A.png"
              alt="logo"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Partners;
