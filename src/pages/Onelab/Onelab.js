import React from "react";
import { Row, Col, Button } from "antd";
import "./Onelab.css";

function Onelab() {
  return (
    <div className="onelab">
      <div className="onelab-intro">
        {/* <div style={{ textAlign: "center" }}> */}
        <h1>KOOMPI Onelab</h1>
        <p className="onelab-intro-description">
          Computer workstation with usability, minimal internet dependency,
          <br />
          efficiency, and affordable cost.
        </p>
        {/* <Button size="large" type="onelab">
            Explore!
          </Button> */}
        {/* </div> */}

        <img
          src="https://koompi.com/assets/images/koompi-onelab/banner.jpg"
          width="auto"
          height="300"
          className="intro-img"
        />
      </div>

      <div className="how-it-works">
        <div className="how-it-works-container">
          <h2 style={{ textAlign: "center", paddingTop: 30 }}>
            How does it work?
          </h2>

          <p style={{ paddingLeft: 100, paddingRight: 100 }}>
            KOOMPI Onelab Workstation is a computer laboratory with hardware and
            software solution that enables teachers and administrators to
            facilitate and monitor students' progress in real time. There are
            three main components that makes the labs functional: hardware,
            content server, and internet connection. Schools can easily invest
            in Workstations due to its affordability and utilization of
            essential tools: monitors, keyboards, mouses, and Raspberry Pis. The
            labs are powered by a content server that runs independently,
            meaning information is stored in an offline cache and gets updated
            when connected to the internet (KOOMPI Fi-Fi). All Workstations are
            connected to one central machine hosting a samba server database,
            making a convenient management system.
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
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Col>
        </Row>
      </div>

      <div className="content-server">
        <Row>
          <Col span={10} offset={2}>
            <h3 style={{ marginTop: 80 }}>Content Server</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
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
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Col>
        </Row>
      </div>

      <div className="uses">
        <div className="uses-container">
          <h2>Who is it for?</h2>
          <Row className="uses-bottom">
            <Col span={8}>
              <img
                src="https://image.freepik.com/free-vector/company-concept-illustration_114360-2721.jpg"
                height="200"
                width="200"
              />
              <h3>School</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </Col>
            <Col span={8}>
              <img
                src="https://image.freepik.com/free-vector/company-concept-illustration_114360-2721.jpg"
                height="200"
                width="200"
              />
              <h3>Company</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </Col>
            <Col span={8}>
              <img
                src="https://image.freepik.com/free-vector/company-concept-illustration_114360-2721.jpg"
                height="200"
                width="200"
              />
              <h3>Organization</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </Col>
          </Row>
        </div>
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
                  Build an advanced learning, teaching, working, and studying
                  environment.
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
                  To provide energy efficient, low maintenance, easy-to-use,
                  cost effective information technology solutions for students,
                  teachers, and administrators.
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
                  We aim to provide uniform computer workstations in over 10,
                  000 high and junior high schools in Cambodia.
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
                <Button size="large" type="contact">
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
