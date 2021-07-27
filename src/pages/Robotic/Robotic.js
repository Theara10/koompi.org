import React from "react";
import { Row, Col, Button } from "antd";
import robotic from "../../lib/img/robot.png";
import robotic2 from "../../lib/img/robot3.png";
import target from "../../lib/img/target-onelab.png";

function Robotic() {
  const RoboticBanner = () => {
    return (
      <React.Fragment>
        <div className="robotic-intro">
          <Row gutter={[12, 12]}>
            <Col span={14}>
              <h1>KOOMPI Robotic Program</h1>
              <p className="banner-desc">
                Computer workstation with usability, minimal internet <br />
                dependency, efficiency, and affordable cost.
              </p>
            </Col>
            <Col span={10}>
              <img src={robotic} className="img-responsive" alt="robotic" />
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  };

  const HowItWork = () => {
    return (
      <React.Fragment>
        <div className="how-it-works-robotic">
          <center>
            <h2 className="robotic-title">How does it work?</h2>
          </center>
          <Row gutter={[24, 24]}>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
              <div className="how-it-works-container">
                <h3>Software Development</h3>
                <p>
                  All the work is to gear up the performance of open-source and
                  deliver the reliable operating system to all users, who use
                  it.
                </p>
              </div>
              <img
                src={robotic2}
                alt="how does it work"
                className="how-robotic-works-img"
              />
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
              <div className="how-it-works-container">
                <h3>Hardware Development</h3>
                <p>
                  Using <strong>Scratch</strong>, a programming language and
                  community tool to create stories, games and animations.
                </p>
              </div>
              <img
                src={robotic2}
                alt="how does it work"
                className="how-robotic-works-img2"
              />
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  };

  const OurPrograms = () => {
    return (
      <React.Fragment>
        <div>
          <center>
            <h2 className="robotic-title">Our Programs</h2>
          </center>
          <div className="program">
            <div className="program-container">
              <h3>Program 1</h3>
              <p className="robotic-program-desc">
                All the work is to gear up the <br />
                performance of open-source.
              </p>
              <Button size="large" type="primary">
                Read More
              </Button>
            </div>
          </div>

          <div className="program">
            <div className="program-container-2">
              <h3>Program 2</h3>
              <p className="robotic-program-desc">
                All the work is to gear up the <br />
                performance of open-source.
              </p>
              <Button size="large" type="primary">
                Read More
              </Button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  };

  const ProgramsRobotic = () => {
    return (
      <React.Fragment>
        <div className="robot-type">
          <center>
            <h2 className="robotic-title">Program Robots</h2>
          </center>
          <div className="robot-type-container">
            <Row gutter={[24, 24]}>
              <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                <div className="container-robot-items">
                  <h3>Optimus Prime</h3>
                  <p>Learn More..</p>
                  <img
                    src="https://www.bostondynamics.com/sites/default/files/2021-02/left-column-660x480.png"
                    alt="robotic images"
                    className="img-responsive"
                  />
                </div>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                <div className="container-robot-items">
                  <h3>Megatron</h3>
                  <p>Learn More..</p>
                  <img
                    src="https://www.bostondynamics.com/sites/default/files/2021-02/right-column-660x480.png"
                    alt="robotic images"
                    className="img-responsive"
                  />
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
                    The idea behind KOOMPI OS is to create a free operating
                    system for all kind of users without breaching their
                    personal data.
                  </p>
                </div>
              </Col>
              <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
                <img src={target} alt="goals" className="who-onelab-img" />
                <div className="goals-detial">
                  <h3>Goal</h3>
                  <p>
                    All the work is to gear up the performance of open-source
                    and deliver the reliable operating system to all users, who
                    use it.
                  </p>
                </div>
              </Col>
              <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
                <img src={target} alt="target" className="who-onelab-img" />
                <div className="goals-detial">
                  <h3>Target</h3>
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
      </React.Fragment>
    );
  };

  return (
    <div className="robotic">
      <div className="container">
        <RoboticBanner />
        <HowItWork />
        <Ideas />
        <OurPrograms />
        <ProgramsRobotic />
      </div>
    </div>
  );
}

export default Robotic;
