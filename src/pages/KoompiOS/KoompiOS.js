import React from "react";
import { Row, Col, Button } from "antd";
import "./KoompiOS.css";

function KoompiOS() {
  return (
    <div className="koompi-os">
      <div className="intro">
        <Row>
          <Col span={12}>
            <div style={{ width: 500, paddingLeft: 30 }}>
              <h1 className="intro-title">KOOMPI OS</h1>
              <p className="intro-description">
                A friendly-arch-based open-source Linux distribution. We aim to
                deliver the best user experiences by providing a high
                performance, stable, and reliable operating system.
              </p>
              <Button size="large" type="os-version">
                Get the latest release version!
              </Button>
            </div>
          </Col>
          <Col span={12}>
            <img
              src="https://www.mozilla.org/media/img/firefox/developer/stylo-engine.svg"
              width="auto"
              height="400"
              className="intro-img"
            />
          </Col>
        </Row>
      </div>

      <div className="open-source">
        <Row>
          <Col span={10} offset={2}>
            <img
              src="https://getpocket.com/marketing-assets/web-discover/_next/static/images/internet-save-button.ef8b9e03cc561fe33f68bdf0db61c5fe.svg"
              height="300"
              width="auto"
            />
          </Col>
          <Col span={10} offset={2}>
            <h1 style={{ marginTop: 80 }}>Software</h1>
            <p className="intro-description">
              All packages of the software are available for the <br />
              latest version, using pi and pix as a package manager.
            </p>
          </Col>
        </Row>
      </div>

      <div className="decentralize">
        <Row>
          <Col span={10} offset={2}>
            <h1 style={{ marginTop: 80 }}>Security</h1>
            <p className="intro-description">
              Leverages security control to protect user data and system
              resources, protects device integrity against malware, and provides
              application isolation.
            </p>
          </Col>
          <Col span={10} offset={2}>
            <img
              src="https://getpocket.com/marketing-assets/web-discover/_next/static/images/private-nook.adda9d99ef9f132c9d613f520e300fea.png"
              height="400"
              width="auto"
            />
          </Col>
        </Row>
      </div>

      <div className="open-source">
        <Row>
          <Col span={10} offset={2}>
            <img
              src="https://getpocket.com/marketing-assets/web-discover/_next/static/images/features-phone.6f0f4c65c5892b24aa553e79b07dd444.png"
              height="400"
              width="auto"
            />
          </Col>
          <Col span={12}>
            <h1 style={{ marginTop: 80 }}>Desktop Environment</h1>
            <p className="intro-description">
              With Plasma and KDE, you feel the ideal, freshness, and simple of
              your desktop. We aim to build our own Desktop Environment with QT.
            </p>
          </Col>
        </Row>
      </div>

      <div className="applications">
        <div className="applications-top">
          <h1 style={{ textAlign: "center" }}>Community Collaboration</h1>
          <p style={{ textAlign: "center" }}>
            Be a part of our community to be a part of our family.
          </p>
        </div>
        <div className="application-bottom">
          <Row>
            <Col span={12}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <img
                  src="https://icons.getbootstrap.com/assets/img/icons-hero.png"
                  height="100"
                  width="auto"
                />
                <h2
                  style={{ fontSize: 28, fontWeight: "bold", marginBottom: 0 }}
                >
                  Code of Conduct
                </h2>
                <p>
                  If you want to contribute,
                  <br /> our code of conducts is down below.
                </p>
              </div>
            </Col>
            <Col span={12}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <img
                  src="https://icons.getbootstrap.com/assets/img/icons-hero.png"
                  height="100"
                  width="auto"
                />
                <h2
                  style={{ fontSize: 28, fontWeight: "bold", marginBottom: 0 }}
                >
                  Donation
                </h2>
                <p>
                  If you want to support us, you can
                  <br /> donate.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className="documentation">
        <Row>
          <Col span={10} offset={2}>
            <h1 style={{ marginTop: 80 }}>Read the documentation</h1>
            <p className="intro-description">
              Checking our last release notes for the version you are
              downloading.
            </p>
          </Col>
          <Col span={10} offset={2}>
            <img
              src="https://getpocket.com/marketing-assets/web-discover/_next/static/images/private-nook.adda9d99ef9f132c9d613f520e300fea.png"
              height="400"
              width="auto"
            />
          </Col>
        </Row>
      </div>

      <div className="ideas">
        <div className="ideas-container">
          {/* <h1 style={{ textAlign: "center" }}>
            What to be apart of our growing developer community?
          </h1> */}
          <Row gutter={18}>
            <Col span={7} offset={1}>
              <div>
                <img
                  src="https://icons.getbootstrap.com/assets/img/icons-hero.png"
                  height="100"
                  width="auto"
                />
                <h2
                  style={{ fontSize: 28, fontWeight: "bold", marginBottom: 0 }}
                >
                  Idea
                </h2>
                <p>
                  The idea behind KOOMPI OS is to create a free operating system
                  for all kind of users without breaching their personal data.
                </p>
              </div>
            </Col>
            <Col span={7} offset={1}>
              <div>
                <img
                  src="https://icons.getbootstrap.com/assets/img/icons-hero.png"
                  height="100"
                  width="auto"
                />
                <h2
                  style={{ fontSize: 28, fontWeight: "bold", marginBottom: 0 }}
                >
                  Goal
                </h2>
                <p>
                  All the work is to gear up the performance of open-source and
                  deliver the reliable operating system to all users, who use
                  it.
                </p>
              </div>
            </Col>
            <Col span={7} offset={1}>
              <div>
                <img
                  src="https://icons.getbootstrap.com/assets/img/icons-hero.png"
                  height="100"
                  width="auto"
                />
                <h2
                  style={{ fontSize: 28, fontWeight: "bold", marginBottom: 0 }}
                >
                  Target
                </h2>
                <p>
                  The users who are exhausted with change an operating system
                  and desktop environments that are not available for all
                  resources they need.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default KoompiOS;
