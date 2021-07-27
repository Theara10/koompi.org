import React from "react";
import { Row, Col, Button } from "antd";
import onelab from "../../lib/img/banner.jpg";
import how from "../../lib/img/why.png";
import target from "../../lib/img/target-onelab.png";
import contactus from "../../lib/img/contact.png";

function Onelab() {
  const BannerOnelab = () => {
    return (
      <React.Fragment>
        <div className="onelab-intro">
          <center>
            <h1>KOOMPI Onelab</h1>
            <p className="banner-desc2 ">
              Part of KOOMPI Enterprise, Onelabs are advanced learning,
              teaching, work and study environments, <br /> centered around a
              local independent server at each school. <br />
              Curriculum updates are distributed by teachers and administrators
              through the local server,
              <br /> which is uniform and compatible with all other
              participating schools in Cambodia.
            </p>

            <img src={onelab} className="onelab-img" alt="koompi onelab" />
          </center>
        </div>
      </React.Fragment>
    );
  };

  const HowItWork = () => {
    return (
      <React.Fragment>
        <div className="how-it-works">
          <div className="how-it-works-container">
            <h2>How does it work?</h2>
            <p>
              KOOMPI Onelab Workstation is a computer laboratory with hardware
              and software solution that enables teachers and administrators to
              facilitate and monitor students' progress in real time. There are
              three main components that makes the labs functional: hardware,
              content server, and internet connection. Schools can easily invest
              in Workstations due to its affordability and utilization of
              essential tools: monitors, keyboards, mouses, and Raspberry Pis.
              The labs are powered by a content server that runs independently,
              meaning information is stored in an offline cache and gets updated
              when connected to the internet (KOOMPI Fi-Fi). All Workstations
              are connected to one central machine hosting a samba server
              database, making a convenient management system.
            </p>
          </div>
          <img src={how} alt="how does it work" className="how-it-works-img" />
        </div>
      </React.Fragment>
    );
  };

  const WorkStation = () => {
    return (
      <React.Fragment>
        <div className="work-station">
          <center>
            <h1>Components</h1>
          </center>
          <Row gutter={24}>
            <Col span={10}>
              <img
                src="https://getpocket.com/marketing-assets/web-discover/_next/static/images/features-phone.6f0f4c65c5892b24aa553e79b07dd444.png"
                alt="onelap picture"
                className="img-responsive onelabe-img"
              />
            </Col>
            <Col span={14}>
              <div className="onelap-details">
                <h2>Work Station</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  };

  const ContentServer = () => {
    return (
      <React.Fragment>
        <div className="work-station">
          <Row gutter={24}>
            <Col span={14}>
              <div className="onelap-details">
                <h2>Content Server</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </Col>
            <Col span={10}>
              <img
                src="https://getpocket.com/marketing-assets/web-discover/_next/static/images/private-nook.adda9d99ef9f132c9d613f520e300fea.png"
                alt="onelap picture"
                className="img-responsive onelabe-img"
              />
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  };

  const Network = () => {
    return (
      <React.Fragment>
        <div className="work-station">
          <Row gutter={24}>
            <Col span={10}>
              <img
                src="https://getpocket.com/marketing-assets/web-discover/_next/static/images/features-phone.6f0f4c65c5892b24aa553e79b07dd444.png"
                alt="onelap picture"
                className="img-responsive onelabe-img"
              />
            </Col>
            <Col span={14}>
              <div className="onelap-details">
                <h2>Network</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  };

  const Who = () => {
    return (
      <React.Fragment>
        <div className="users-container">
          <h2>Who is it for?</h2>
          <div className="uses-bottom">
            <Row gutter={24}>
              <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
                <img
                  src="https://image.freepik.com/free-vector/company-concept-illustration_114360-2721.jpg"
                  alt="school"
                  className="who-onelab-img"
                />
                <div className="goals-detial">
                  <h3>School</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                </div>
              </Col>
              <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
                <img
                  src="https://image.freepik.com/free-vector/company-concept-illustration_114360-2721.jpg"
                  alt="company"
                  className="who-onelab-img"
                />
                <div className="goals-detial">
                  <h3>Company</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                </div>
              </Col>
              <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
                <img
                  src="https://image.freepik.com/free-vector/company-concept-illustration_114360-2721.jpg"
                  alt="org"
                  className="who-onelab-img"
                />
                <div className="goals-detial">
                  <h3>Organization</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </React.Fragment>
    );
  };

  const Ideas = () => {
    return (
      <React.Fragment>
        <div className="ideas">
          <h2>Our Works</h2>
          <div className="idea-contaner">
            <Row gutter={24}>
              <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
                <img src={target} alt="idea" className="who-onelab-img" />
                <div className="goals-detial">
                  <h3>Idea</h3>
                  <p>
                    Build an advanced learning, teaching, working, and studying
                    environment.
                  </p>
                </div>
              </Col>
              <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
                <img src={target} alt="goals" className="who-onelab-img" />
                <div className="goals-detial">
                  <h3>Goal</h3>
                  <p>
                    To provide energy efficient, low maintenance, easy-to-use,
                    cost effective information technology solutions for
                    students, teachers, and administrators.
                  </p>
                </div>
              </Col>
              <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
                <img src={target} alt="target" className="who-onelab-img" />
                <div className="goals-detial">
                  <h3>Target</h3>
                  <p>
                    We aim to provide uniform computer workstations in over 10,
                    000 high and junior high schools in Cambodia.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </React.Fragment>
    );
  };

  const Contact = () => {
    return (
      <React.Fragment>
        {/* <div className="contact-onelab">
          <Row>
            <Col span={10}>
              <img
                src="https://images.ctfassets.net/s8m4aa37zxb2/1AVcSoraPugyYCmwAEQsWW/364264f8b37d29aabc91766263d52227/Sign_Up_2x.png"
                alt="onelap picture"
                className=" onelap-pictures"
              />
            </Col>
            <Col span={14}>
              <div className="contact-container-details">
                <h2>Interested? Contact us now!</h2>
                <p>
                  The non-profit Mozilla Foundation supports online privacy &
                  security, trustworthy artificial intelligence.
                </p>
                <Button size="large" type="primary">
                  Contact
                </Button>
              </div>
            </Col>
          </Row>
        </div> */}
        <div className="contact-onelab">
          <Row gutter={[24, 24]}>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
              <div>
                <img
                  src={contactus}
                  alt="contact with us"
                  className="img-responsive "
                />
              </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
              <div className="contact-us-section">
                <h2 className="project-head-title">
                  Interested? Contact us now!
                </h2>
                <p>
                  The non-profit Mozilla Foundation supports online privacy &
                  security, trustworthy artificial intelligence.
                </p>
                <Button size="large" type="primary" className="btn-contact">
                  Contact
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  };

  return (
    <div className="onelab">
      <div className="container">
        <BannerOnelab />
        <HowItWork />
        <Ideas />
        <WorkStation />
        <ContentServer />
        <Network />
        <Who />
        <Contact />
      </div>
    </div>
  );
}

export default Onelab;
