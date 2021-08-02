import React from "react";
import { Col, Row, Layout } from "antd";
import {
  FaFacebookF,
  FaTelegramPlane,
  FaMediumM,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import img from "../../lib/img/Koompi-White.png";

const { Footer } = Layout;

function Foot() {
  return (
    <React.Fragment>
      <Layout>
        <Footer className="footer-home-background">
          <div className="container">
            <img src={img} className="logo-footer" />
            <Row gutter={[0, 24]}>
              <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                <Col className="footer-head-info">LEGALS</Col>
                <Col className="sub-header-footer">
                  <Link to="/legals/privacy-policy">Term and Conditions</Link>
                </Col>
                <Col className="sub-header-footer">
                  <Link to="/legals/sale-policy">Privacy Policy</Link>
                </Col>
              </Col>
              <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                <Col className="footer-head-info">Projects</Col>
                <Col className="sub-header-footer">
                  <Link to="/koompi-os">KOOMPI OS</Link>
                </Col>
                <Col className="sub-header-footer">
                  <Link to="/sala">SALA KOOMPI</Link>
                </Col>
                <Col className="sub-header-footer">
                  <Link to="/fifi">KOOMPI FiFi</Link>
                </Col>
                <Col className="sub-header-footer">
                  <Link to="/onelab">KOOMPI ONELAB </Link>
                </Col>
              </Col>
              <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                <Col className="footer-head-info">Help</Col>
                <Col className="sub-header-footer">
                  <a href="https://t.me/koompi" target="_blank">
                    Community
                  </a>
                </Col>
                <Col className="sub-header-footer">
                  <a href="https://wiki.koompi.org/" target="_blank">
                    User manual
                  </a>
                </Col>
              </Col>
              <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                <Col className="footer-head-info">Connect With Us</Col>
                <Col className="sub-header-footer">
                  <div className="social-media">
                    <a href="https://www.facebook.com/koompi/" target="_blank">
                      <FaFacebookF />
                    </a>
                    <a href="https://t.me/koompi" target="_blank">
                      <FaTelegramPlane />
                    </a>
                    <a href="https://medium.com/koompi" target="_blank">
                      <FaMediumM />
                    </a>
                    <a
                      href="https://www.youtube.com/channel/UC3fiB0ZtxidRUd6_EpdUaTA"
                      target="_blank"
                    >
                      <FaYoutube />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/koompi"
                      target="_blank"
                    >
                      <FaLinkedinIn />
                    </a>
                    <a
                      href="https://twitter.com/koompi_official"
                      target="_blank"
                    >
                      <FaTwitter />
                    </a>
                    <a href="https://github.com/koompi/" target="_blank">
                      <FaGithub />
                    </a>
                  </div>
                </Col>
              </Col>
            </Row>
          </div>
          <p className="footer-desc">
            <img
              src="./images/koompi-logo-white.png"
              alt="koompi logo"
              className="koompi-logo-footer"
            />
            KOOMPI &copy; 2020 All Rights Reserved.
          </p>
        </Footer>
      </Layout>
    </React.Fragment>
  );
}

export default Foot;
