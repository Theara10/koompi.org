import React from "react";
import { Row, Col, Button } from "antd";
import "./Onelab.css";

function Onelab() {
  return (
    <div className="onelab">
      <div className="onelab-intro">
        <Row>
          <Col span={12}>
            <div style={{ width: 500, paddingLeft: 30, paddingTop: 50 }}>
              <h1>KOOMPI Onelab</h1>
              <p className="intro-description">
                Computer workstation with usability, minimal internet
                dependency, efficiency, and affordable cost.
              </p>
              <Button size="large" type="onelab">
                Explore!
              </Button>
            </div>
          </Col>
          <Col span={12}>
            <img
              src="https://www.mozilla.org/media/img/home/2020/pocket-hero-high-res.025fe785851e.jpg"
              width="auto"
              height="400"
              className="intro-img"
            />
          </Col>
        </Row>
      </div>

      <div className="how-it-works">
        <div className="how-it-works-container">
          <h2 style={{ textAlign: "center", paddingTop: 30 }}>
            How does it work?
          </h2>

          <p style={{ paddingLeft: 100, paddingRight: 100 }}>
            Discovered as a slave on Tatooine by Qui-Gon Jinn and Obi-Wan
            Kenobi, Anakin Skywalker had the potential to become one of the most
            powerful Jedi ever, and was believed by some to be the prophesied
            Chosen One who would bring balance to the Force. Discovered as a
            slave on Tatooine by Qui-Gon Jinn and Obi-Wan Kenobi, Anakin
            Skywalker had the potential to become one of the most powerful Jedi
            ever, and was believed by some to be the prophesied Chosen One who
            would bring balance to the Force.
          </p>
        </div>
      </div>

      <h2 style={{ textAlign: "center", paddingTop: 30, paddingBottom: 30 }}>
        Components
      </h2>
      <div className="work-station">
        <Row>
          <Col span={10} offset={2}>
            <img
              src="https://getpocket.com/marketing-assets/web-discover/_next/static/images/features-phone.6f0f4c65c5892b24aa553e79b07dd444.png"
              height="400"
              width="auto"
            />
          </Col>
          <Col span={12}>
            <h3 style={{ marginTop: 80 }}>Work Station</h3>
            <p>High effective and affordable consisted workstations.</p>
          </Col>
        </Row>
      </div>

      <div className="content-server">
        <Row>
          <Col span={10} offset={2}>
            <h3 style={{ marginTop: 80 }}>Content Server</h3>
            <p>
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

      <div className="network">
        <Row>
          <Col span={10} offset={2}>
            <img
              src="https://getpocket.com/marketing-assets/web-discover/_next/static/images/features-phone.6f0f4c65c5892b24aa553e79b07dd444.png"
              height="400"
              width="auto"
            />
          </Col>
          <Col span={12}>
            <h3 style={{ marginTop: 80 }}>Network</h3>
            <p>KOOMPI FIFI, the very own network product.</p>
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

      <div className="contact-onelab">
        <div className="contact-onelab-container">
          <Row>
            <Col span={12} offset={2}>
              <img
                src="https://images.ctfassets.net/s8m4aa37zxb2/1AVcSoraPugyYCmwAEQsWW/364264f8b37d29aabc91766263d52227/Sign_Up_2x.png"
                height="400"
                width="auto"
              />
            </Col>
            <Col span={10}>
              <div style={{ width: 300, paddingTop: 40 }}>
                <h1 style={{ fontWeight: "bold", fontSize: 32, lineHeight: 1 }}>
                  Interested? Contact us now!
                </h1>
                <p>
                  The non-profit Mozilla Foundation supports online privacy &
                  security, trustworthy artificial intelligence.
                </p>
                <Button size="large" type="secondary">
                  Contact
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Onelab;
