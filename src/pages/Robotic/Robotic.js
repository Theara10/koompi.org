import React from "react";
import { Row, Col, Button } from "antd";
import robotic from "../../lib/img/robot.png";
import robotic2 from "../../lib/img/robot3.png";
import target from "../../lib/img/target-onelab.png";
import { Link } from "react-router-dom";

function Robotic() {
  const RoboticBanner = () => {
    return (
      <React.Fragment>
        <div className="robotic-intro">
          <Row>
            <Col span={14}>
              <h1>KOOMPI Robotic Program</h1>
              <p className="banner-desc">
                A part of KOOMPI ACADEMY, Robotic Program is an extension
                program focused on robotic engineering and electronics.
              </p>
            </Col>
            <Col span={10}>
              <img src={robotic} className="robot-img" alt="robotic" />
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
          {/* <center>
            <h2 className="robotic-title">How does it work?</h2>
          </center> */}

          <div className="how-it-works-container">
            <h3>Why Robotic Program?</h3>
            <p>
              This program will provide new ways to foster peer social
              interactions and learn many opportunities for creativity, social
              and cognitive development as part of engaging in more open-ended
              activities focused on inquiry and experimentation of mathematical
              and programming concepts. As a self-guided social learning model,
              aimed to inspire and encourage young students to explore,
              discover, and build new and creative solutions for the future. The
              courses create capacities and abilities in critical thinking,
              problem-solving, independent learning and collaboration.
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  };

  const Software = () => {
    return (
      <React.Fragment>
        <div className="work-station">
          <center>
            <h1>About Programs</h1>
          </center>
          <Row gutter={24}>
            <Col span={10}>
              <img
                src={robotic}
                alt="robotic picture"
                className=" onelap-pictures"
              />
            </Col>
            <Col span={14}>
              <div className="onelap-details">
                <h2>Software Development</h2>
                <p>
                  Robotic Program's Software will be based on{" "}
                  <strong>Scratch</strong>, a free programming language and
                  online community where you can create your own interactive
                  stories, games, and animations.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  };

  const Hardware = () => {
    return (
      <React.Fragment>
        <div className="work-station">
          <Row gutter={24}>
            <Col span={14}>
              <div className="onelap-details">
                <h2>Hardware Development</h2>
                <p>
                  Focuses on both electronic and Mechanic design, Robotic
                  program's hardware will inspire children to start engaging
                  with programming, science, electronics by building,
                  programming and observing it.
                </p>
              </div>
            </Col>
            <Col span={10}>
              <img
                src="https://getpocket.com/marketing-assets/web-discover/_next/static/images/private-nook.adda9d99ef9f132c9d613f520e300fea.png"
                alt="onelap picture"
                className=" onelap-pictures"
              />
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  };

  const Curriculum = () => {
    return (
      <React.Fragment>
        <div className="work-station">
          <Row gutter={24}>
            <Col span={10}>
              <img
                src="https://getpocket.com/marketing-assets/web-discover/_next/static/images/features-phone.6f0f4c65c5892b24aa553e79b07dd444.png"
                alt="onelap picture"
                className=" onelap-pictures"
              />
            </Col>
            <Col span={14}>
              <div className="onelap-details">
                <h2>Curriculum</h2>
                <p>
                  The curriculum will be designed in two levels consisting of
                  elementary & middle school level from 4th grade. It will be
                  structured into One Year curriculum estimating to max
                  42hurs/year.
                </p>
              </div>
              <Link>
                <Button className="project-learn-more">Read More</Button>
              </Link>
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
              <Button size="large" type="primary" className="btn-explore">
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
              <Button size="large" type="primary" className="btn-explore">
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
                  <h3>K-bots</h3>
                  <p>KOOMPI Robots</p>
                  <img
                    src="https://www.bostondynamics.com/sites/default/files/2021-02/left-column-660x480.png"
                    alt="robotic images"
                    className="img-responsive"
                  />
                </div>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                <div className="container-robot-items">
                  <h3>Smart Electronic Kits</h3>
                  <p>Friendly basic electronic components</p>
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
          <h2>Who is it for?</h2>
          <div className="idea-contaner">
            <Row gutter={24}>
              <Col span={12}>
                <div>
                  <img src={target} alt="idea" className="who-onelab-img" />
                  <h3>Elementary School</h3>
                  <p>
                    Designed as a play-toy that can play around with
                    kid-friendly kits. This level will be just to get them
                    interested and can digest the program easily.
                  </p>
                </div>
              </Col>
              <Col span={12}>
                <div>
                  <img src={target} alt="goals" className="who-onelab-img" />
                  <h3>Middle School</h3>
                  <p>
                    A foundation based to understand more about the electronic,
                    this will involve more technical tools
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
        <Software />
        <Hardware />
        <Curriculum />
        <Ideas />
        {/* <OurPrograms /> */}
        <ProgramsRobotic />
      </div>
    </div>
  );
}

export default Robotic;
