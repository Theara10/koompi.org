import React from "react";
import { Row, Col, Button } from "antd";
import contactus from "../lib/img/contact.png";

function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <Row gutter={[24, 24]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
            <div>
              <img
                src={contactus}
                alt="contact with us"
                className="contact-us-img"
              />
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
            <div className="contact-us-section">
              <h2 className="project-head-title">
                Interested? Contact us now!
              </h2>
              <p>
                The non-profit Mozilla Foundation supports online privacy &
                security, trustworthy artificial intelligence.
              </p>
              <Button
                size="large"
                type="primary"
                className="btn-contact btn-explore"
              >
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
