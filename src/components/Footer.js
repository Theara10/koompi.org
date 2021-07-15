import { Col, Row } from 'antd';
import React from 'react';
import {
  FaFacebookF,
  FaTelegramPlane,
  FaMediumM,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from 'react-icons/fa';

const img = require('../lib/img/Koompi-White.png');

function Foot() {
  return (
    <div className="footer">
      <div className="footer-container">
        <center>
          <img
            src={img.default}
            width="auto"
            alt="koompi"
            height="65"
            className="logo"
          />
        </center>
        <Row>
          <Col span={6}>
            <div style={{ paddingRight: 80 }}>
              <h2 className="footer-title">LEGALS</h2>
              <p>Privacy Policy</p>
              <p>Sale Policy</p>
            </div>
          </Col>
          <Col span={6}>
            <div>
              <h2 className="footer-title">Projects</h2>
              <p>OS</p>
              <p>Fifi</p>
              <p>Sala </p>
              <p>Onelab</p>
            </div>
          </Col>
          <Col span={6}>
            <div>
              <h2 className="footer-title">Help</h2>
              <p>Community</p>
              <p>User manual</p>
            </div>
          </Col>
          <Col span={6}>
            <div>
              <h2 className="footer-title">Connect With Us</h2>
              <div className="footer-social-media">
                <a
                  href="https://www.facebook.com/koompi/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebookF />
                </a>
                <a href="https://t.me/koompi" target="_blank" rel="noreferrer">
                  <FaTelegramPlane />
                </a>
                <a
                  href="https://medium.com/koompi"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaMediumM />
                </a>
                <a
                  href="https://www.youtube.com/channel/UC3fiB0ZtxidRUd6_EpdUaTA"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaYoutube />
                </a>
                <a
                  href="https://www.linkedin.com/company/koompi"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://twitter.com/koompi_official"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <p style={{ fontWeight: 400, textAlign: 'center', marginTop: 40 }}>
          KOOMPI © 2021 All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Foot;
