import React from "react";
import { Row, Col, Button } from "antd";
import contactus from "../lib/img/contact.png";

function Contact(props) {
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
<<<<<<< HEAD
              <h1 style={{ fontWeight: "bold", fontSize: 32, lineHeight: 1 }}>
                {props.title}
              </h1>
              <p>{props.subtitle}</p>
              <Button size="large" type="secondary">
                {props.button}
=======
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
>>>>>>> a0d1fd82d7c50cd94b8f10bf9c71205db6b6576d
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Contact;
