import React from "react";
import { Row, Col, Button } from "antd";
import "./KoompiOS.css";

function KoompiOS() {
  return (
    <div className="koompi-os">
      <div
        style={{
          height: 40,
          width: "100%",
          backgroundColor: "#38a7c8",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontWeight: "bold",
            color: "white",
            margin: 0,
            fontSize: 18,
          }}
        >
          Get the latest version! KOOMPI OS 3.0.5 is now available!{" "}
        </p>
      </div>
      <div className="intro">
        <Row>
          <Col span={12}>
            <div style={{ width: 500, paddingLeft: 30 }}>
              <h1 className="intro-title">KOOMPI OS</h1>
              <p style={{ color: "white" }}>
                A friendly Linux distribution derive from Achlinux. We aim to
                deliver the best user experiences by providing a high
                performance, stable, and reliable operating system.
              </p>
              <Button size="large" type="os-version">
                Download
              </Button>
            </div>
          </Col>
          <Col span={12}>
            <img
              src="https://camo.githubusercontent.com/b605d014b47fa0c2ee05a987a94b8f3b4647fe176c78201f2c6bcffe03aae366/68747470733a2f2f63646e2e706c696e672e636f6d2f696d672f382f342f382f642f6261356132323931363765656265646266613265656338323237333231353865323564372e706e67"
              width="auto"
              height="300"
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
