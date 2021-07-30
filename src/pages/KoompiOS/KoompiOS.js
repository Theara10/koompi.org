import React from "react";
import { Row, Col, Button } from "antd";
import Contact from "../../components/Contact";

const software_img = require("../../lib/img/Software-desktop.png");
const idea = require("../../lib/img/Idea.png");
const goal = require("../../lib/img/Goal.png");
const target2 = require("../../lib/img/Target.png");
const security = require("../../lib/img/Security-desktop.png");
const docs = require("../../lib/img/Read-Doc.png");
const os = require("../../lib/img/KOOMPI-OS.png");
const environment = require("../../lib/img/Desktop-Enviroment-2.png");
const target = require("../../lib/img/target-onelab.png");

function KoompiOS() {
  return (
    <div className="koompi-os">
      <div className="koompi-os-intro">
        <div className="container">
          <div className="">
            <center>
              <h1 className="intro-title">KOOMPI OS</h1>
            </center>

            <p className="banner-desc2">
              A lightweight, decentralized, crypto/security-oriented open-source
              operating system derived from Archlinux. KOOMPI OS is built on a
              kernel and provides an environment for multiple applications and
              software to run simultaneously.
            </p>
          </div>
          <Button className="btn-download" size="large" type="primary">
            Download
          </Button>

          <Button className="btn-update">Update</Button>
          <img
            src={software_img.default}
            alt="koompi-os"
            className="os-main-img"
          />
          <center>
            <p> KOOMPI OS V3.3.5</p>
          </center>
        </div>
      </div>
      {/* <div className="koompi-os-intro">
        <div className="container">
          <div className="os-banner-section">
            <Row gutter={[24, 24]}>
              <Col span={8}>
                <div className="koompi-os-details">
                  <h1 className="intro-title">KOOMPI OS</h1>

                  <p className="banner-desc2">
                    A lightweight, decentralized, crypto/security-oriented
                    open-source operating system derived from Archlinux.
                  </p>
                  <Button className="btn-download" size="large" type="primary">
                    Download
                  </Button>
                </div>
              </Col>
              <Col span={16}>
                <img
                  src={software_img.default}
                  alt="koompi-os"
                  className="os-main-img"
                />
                <center>
                  <p> KOOMPI OS V3.3.5</p>
                </center>
              </Col>
            </Row>
          </div>
        </div>
      </div> */}

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
      {/* <div className="os-security"> */}
      <div className="os-section-height" style={{ backgroundColor: "#f4f4f4" }}>
        <div className="container">
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
      {/* </div> */}

      <div className="container">
        <div className="os-section-height">
          <Row gutter={[24, 24]}>
            <Col span={12}>
              <img
                src={environment.default}
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

      <div className="os-section-height" style={{ backgroundColor: "#f4f4f4" }}>
        <div className="container">
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

      <div className="container">
        <div className="os-section-height">
          <Row gutter={[32, 32]}>
            <Col span={12}>
              <div>
                <center>
                  <img
                    src={target.default}
                    alt="koompi.org"
                    className="image-koompi"
                  />
                  <h3>Code Of Conduct</h3>
                  <p>
                    We welcome contributors. <br />
                    Read our Code of Conduct here!
                  </p>
                </center>
              </div>
            </Col>
            <Col span={12}>
              <div>
                <center>
                  <img
                    src={target.default}
                    alt="koompi.org"
                    className="image-koompi"
                  />
                  <h3>The Community</h3>
                  <p>Join the community and support the open-source world!</p>
                </center>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default KoompiOS;
