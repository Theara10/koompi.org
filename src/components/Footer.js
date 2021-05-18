import { Col, Row } from "antd";
import React from "react";
import {
  FaFacebookF,
  FaTelegramPlane,
  FaMediumM,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const img = require("../lib/img/Koompi-White.png");

function Foot() {
  return (
    <div className="footer">
      <div className="footer-container">
        <img src={img.default} width="auto" height="60" className="logo" />
        <Row>
          <Col span={9}>
            <div>
              <h2 className="footer-title">About</h2>
              <p>
                KOOMPI, together with KOOMPI OS, <br />
                are value-added learning and productivity
                <br /> tools built upon the acclaimed <br />
                Linux operating system.
              </p>
            </div>
          </Col>
          <Col span={5}>
            <div>
              <h2 className="footer-title">Projects</h2>
              <p>KOOMPI OS</p>
              <p>KOOMPI FIFI</p>
              <p>SALA KOOMPI </p>
              <p>KOOMPI ONELAB</p>
            </div>
          </Col>
          <Col span={5}>
            <div>
              <h2 className="footer-title">Help</h2>
              <p>Community</p>
              <p>User manual</p>
            </div>
          </Col>
          <Col span={5}>
            <div>
              <h2 className="footer-title">Connect With Us</h2>
              <div className="footer-social-media">
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
                <a href="https://twitter.com/koompi_official" target="_blank">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <div style={{ textAlign: "center", paddingTop: 20 }}>
          <p style={{ fontWeight: 400 }}>
            The content of this site is copyright protected and is the property
            of KOOMPI&#169;2021
          </p>
        </div>
      </div>
    </div>
  );
}

export default Foot;
