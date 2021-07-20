import React from "react";
import { Row, Col, Button } from "antd";

function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <Row gutter={[24, 24]}>
          <Col span={12}>
            <div className="contact-us-img"></div>
            {/* <img
              src="https://images.ctfassets.net/s8m4aa37zxb2/1AVcSoraPugyYCmwAEQsWW/364264f8b37d29aabc91766263d52227/Sign_Up_2x.png"
              height="400"
              alt="contact-us koompi"
            /> */}
          </Col>
          <Col span={12}>
            <div className="contact-us-section">
              <h1 style={{ fontWeight: "bold", fontSize: 32, lineHeight: 1 }}>
                Interested? Contact us now!
              </h1>
              <p>
                The non-profit Mozilla Foundation supports online privacy &
                security, trustworthy artificial intelligence.
              </p>
              <Button size="large" type="secondary">
                Contact
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Contact;
