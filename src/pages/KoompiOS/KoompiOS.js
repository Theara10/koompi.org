import React from "react";
import { Row, Col, Button } from "antd";

const software_img = require("../../lib/img/koompi-os-software.png");
const idea = require("../../lib/img/Idea.png");
const goal = require("../../lib/img/Goal.png");
const target = require("../../lib/img/Target.png");
const security = require("../../lib/img/Security.png");
const docs = require("../../lib/img/Read-Doc.png");
const os = require("../../lib/img/KOOMPI-Os.png");

function KoompiOS() {
  return (
    <div className="koompi-os">
      <div className="koompi-os-intro">
        <div className="container">
          <div className="os-banner-section">
            <Row gutter={[24, 24]}>
              <Col span={10}>
                <div className="koompi-os-details">
                  <h1 className="intro-title">KOOMPI OS</h1>
                  <p>
                    A lightweight, decentralized, crypto/security-oriented
                    open-source operating system derived from Archlinux. KOOMPI
                    OS is built on a kernel and provides an environment for
                    multiple applications and software to run simultaneously.
                  </p>
                  <Button className="btn-download" size="large" type="primary">
                    Download
                  </Button>
                </div>
              </Col>
              <Col span={14}>
                <img
                  src={os.default}
                  alt="koompi-os"
                  className="img-responsive"
                />
                <center>
                  <p> KOOMPI OS V3.3.5</p>
                </center>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="goal">
          <div className="goal-container">
            <Row gutter={[32, 32]}>
              <Col span={8}>
                <div>
                  <center>
                    <img
                      src={idea.default}
                      alt="koompi.org"
                      className="image-koompi"
                    />
                    <h3>Idea</h3>
                    <p>
                      The idea behind KOOMPI OS is to create a free operating
                      system for all kind of users without breaching their
                      personal data.
                    </p>
                  </center>
                </div>
              </Col>
              <Col span={8}>
                <div>
                  <center>
                    <img
                      src={goal.default}
                      alt="koompi.org"
                      className="image-koompi"
                    />
                    <h3>Goal</h3>
                    <p>
                      The idea behind KOOMPI OS is to create a free operating
                      system for all kinds of users without breaching their
                      personal data.
                    </p>
                  </center>
                </div>
              </Col>
              <Col span={8}>
                <div>
                  <center>
                    <img
                      src={target.default}
                      alt="koompi.org"
                      className="image-koompi"
                    />
                    <h3>Target</h3>
                    <p>
                      Users who seek out an operating system that allows them to
                      use all essential applications without breaking their
                      budget.
                    </p>
                  </center>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="os-section-height">
          <Row gutter={[24, 24]}>
            <Col span={12}>
              <img
                src={software_img.default}
                alt="koompi.org"
                className="img-responsive"
              />
            </Col>
            <Col span={12}>
              <div className="os-section-height-detail">
                <h2 className="os-title">Software</h2>
                <p className="intro-description">
                  KOOMPI OS is compatible with other software solutions and is
                  especially great for individuals in the IT field. It gives
                  users free usage without the hassle of licenses and can be
                  customized to meet individual needs. All packages of the
                  software are available for the latest version, using pi and
                  pix as a package manager.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className="container">
        <div className="os-section-height">
          <Row gutter={[24, 24]}>
            <Col span={12}>
              <div className="os-section-height-detail">
                <h2 className="os-title">Security</h2>
                <p className="intro-description">
                  The system itself leverages traditional OS security control to
                  protect user data and system resources, protects device
                  integrity against malware, and provides application isolation
                  – application is separated from the rest of the running
                  processes.
                </p>
              </div>
            </Col>
            <Col span={12}>
              <img
                src={security.default}
                alt="koompi.org"
                className="img-responsive"
              />
            </Col>
          </Row>
        </div>
      </div>

      <div className="container">
        <div className="os-section-height">
          <Row gutter={[24, 24]}>
            <Col span={12}>
              <img
                src="https://getpocket.com/marketing-assets/web-discover/_next/static/images/features-phone.6f0f4c65c5892b24aa553e79b07dd444.png"
                alt="koompi.org"
                className="img-responsive"
              />
            </Col>
            <Col span={12}>
              <div className="os-section-height-detail">
                <h2 className="os-title">Desktop Environment</h2>
                <p className="intro-description">
                  KOOMPI Desktop Environment is based on KDE – a highly
                  customizable desktop with moderate usage of system resources.
                  It has its own set of integrated applications and utilities.
                  There are three main desktop environments and each of them has
                  two core theme colours, Dark and Light.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className="container">
        <div className="os-section-height">
          <Row gutter={[24, 24]}>
            <Col span={12}>
              <div className="os-section-height-detail">
                <h2 className="os-title">Read the documentation</h2>
                <p className="intro-description">
                  We keep you guys updated! Read our documentation to keep track
                  of the latest releases and enjoy bug-free user experience!
                </p>
              </div>
            </Col>
            <Col span={12}>
              <img
                src={docs.default}
                alt="koompi.org"
                className="img-responsive"
              />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default KoompiOS;
