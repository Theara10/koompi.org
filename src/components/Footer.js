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
        <img src={img.default} width="auto" height="50" className="logo" />
        <Row>
          <Col span={8} offset={1}>
            <div style={{ paddingRight: 80 }}>
              <h2 className="footer-title">About</h2>
              <p>
                If you could not find any answers related to the problems, let
                us know by. I'm Batman. If you could not find any I'm Batman. If
                you could not find any. If you could not find any I'm Batman. If
                you could not find any.
              </p>
            </div>
          </Col>
          <Col span={5}>
            <div>
              <h2 className="footer-title">Projects</h2>
              <p>OS</p>
              <p>Fifi</p>
              <p>Sala </p>
              <p>Onelab</p>
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
              <p style={{ fontWeight: 400 }}>
                The content of this site is copyright protected and is the
                property of KOOMPI&#169;2021
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Foot;
