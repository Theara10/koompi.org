import React from "react";
import { Row, Col, Button } from "antd";
import MetaTage from "../../components/MetaTage";

const software_img = require("../../lib/img/koompi-os-software.png");
const idea = require("../../lib/img/Idea.png");
const goal = require("../../lib/img/Goal.png");
const security = require("../../lib/img/Security.png");
const docs = require("../../lib/img/Read-Doc.png");
const os = require("../../lib/img/KOOMPI-Os.png");
const desk = require("../../lib/img/Desktop-Enviroment-2.png");

function KoompiOS() {
  const OSBanner = () => {
    return (
      <React.Fragment>
        <div className="os-banner-section ">
          <Row gutter={[24, 24]}>
            <Col xs={24} sm={24} md={10} lg={10} xl={10} xxl={10}>
              <div className="koompi-os-details">
                <h1 className="intro-title">KOOMPI OS</h1>
                <p className="banner-desc2">
                  A lightweight, decentralized, crypto/security-oriented
                  open-source operating system derived from Archlinux. KOOMPI OS
                  is built on a kernel and provides an environment for multiple
                  applications and software to run simultaneously.
                </p>
                <div className="btn-container">
                  <Button size="large" type="primary" className="btn-explore">
                    <a
                      href="https://wiki.koompi.org/en/index.md"
                      target="_blank"
                    >
                      Wiki
                    </a>
                  </Button>
                  <Button
                    size="large"
                    type="primary"
                    className="btn-create-account-sala"
                  >
                    <a href="https://dev.koompi.org/iso/" target="_blank">
                      Download
                    </a>
                  </Button>
                </div>
              </div>
            </Col>
            <Col xs={24} sm={24} md={14} lg={14} xl={14} xxl={14}>
              <img
                src={os.default}
                alt="koompi-os"
                className="img-responsive os-banner-img"
              />
              <center>
                <p> KOOMPI OS V2.7.0</p>
              </center>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  };

  const Goals = () => {
    return (
      <React.Fragment>
        <div className="goal">
          <div className="goal-container">
            <Row gutter={[24, 24]}>
              <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                <div>
                  <center>
                    <img
                      src={idea.default}
                      alt="koompi.org"
                      className="image-koompi"
                    />
                    <h3>Code Of Conduct</h3>
                    <p>
                      We welcome contributors. Read our Code of Conduct here!
                    </p>
                  </center>
                </div>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                <div>
                  <center>
                    <img
                      src={goal.default}
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
      </React.Fragment>
    );
  };

  const Section1 = () => {
    return (
      <React.Fragment>
        <div className="os-section-height">
          <Row gutter={[24, 24]}>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
              <img
                src={software_img.default}
                alt="koompi.org"
                className="img-responsive"
              />
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
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
      </React.Fragment>
    );
  };

  const Section2 = () => {
    return (
      <React.Fragment>
        <div className="os-section-height-desktop">
          <Row gutter={[24, 24]}>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
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
            <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
              <img
                src={security.default}
                alt="koompi.org"
                className="img-responsive"
              />
            </Col>
          </Row>
        </div>
        <div className="mobile-row-responsive">
          <Row gutter={[24, 24]}>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
              <img
                src={security.default}
                alt="koompi.org"
                className="img-responsive"
              />
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
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
          </Row>
        </div>
      </React.Fragment>
    );
  };

  const Section3 = () => {
    return (
      <React.Fragment>
        <div className="os-section-height">
          <Row gutter={[24, 24]}>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
              <img
                src={desk.default}
                alt="koompi.org"
                className="img-responsive"
              />
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
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
      </React.Fragment>
    );
  };

  const Contact = () => {
    return (
      <React.Fragment>
        <div className="os-section-height-desktop">
          <Row gutter={[24, 24]}>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
              <div className="os-section-height-detail">
                <h2 className="os-title">Read the documentation</h2>
                <p className="intro-description">
                  We keep you guys updated! Read our documentation to keep track
                  of the latest releases and enjoy bug-free user experience!
                </p>
              </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
              <img
                src={docs.default}
                alt="koompi.org"
                className="img-responsive"
              />
            </Col>
          </Row>
        </div>
        <div className="mobile-row-responsive">
          <Row>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
              <img
                src={docs.default}
                alt="koompi.org"
                className="img-responsive"
              />
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
              <div className="os-section-height-detail">
                <h2 className="os-title">Read the documentation</h2>
                <p className="intro-description">
                  We keep you guys updated! Read our documentation to keep track
                  of the latest releases and enjoy bug-free user experience!
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  };

  return (
    <div>
      <div className="koompi-os">
        <div className="koompi-os-intro">
          <div className="container">
            <OSBanner />
          </div>
        </div>
        <div className="container">
          <Section1 />
          <Section2 />
          <Section3 />
          <Contact />
          <Goals />
        </div>
      </div>
      <MetaTage
        title="No license fees. No limitations. Always open. | KOOMPI.org"
        urls=" http://www.koompi.org/koompi-os"
        desc="A lightweight, decentralized, crypto/security-oriented open-source operating system derived from Archlinux. KOOMPI OS is built on a kernel and provides an environment for multiple applications and software to run simultaneously."
        // thumbnail="./images/thumbnail/koompi-os-banner.png"
        thumbnail="https://www.koompi.org/images/thumbnail/koompi-os-banner.png"
      />
    </div>
  );
}

export default KoompiOS;
