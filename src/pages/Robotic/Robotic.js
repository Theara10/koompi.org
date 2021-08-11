import React from "react";
import { Row, Col, Button } from "antd";
import robotic from "../../lib/img/robot.png";
import robotic2 from "../../lib/img/robot3.png";
// import target from "../../lib/img/target-onelab.png";
import whyrobotic from "../../lib/img/why-robotic.png";
import MetaTage from "../../components/MetaTage";
import middle from "../../lib/img/Middle-School.png";
import element from "../../lib/img/Elementary-School.png";
import kbot from "../../lib/img/K-Bot.png";

function Robotic() {
  const RoboticBanner = () => {
    return (
      <React.Fragment>
        <div className="robotic-intro">
          <Row gutter={[12, 12]}>
            <Col xs={24} sm={24} md={14} lg={14} xl={14} xxl={14}>
              <h1>KOOMPI Robotic Program</h1>
              <p className="banner-desc">
                As part of KOOMPI ACADEMY, Robotic Program is an extension
                initiative that focuses on an introduction to programming,
                robotic engineering and electronics.
              </p>
            </Col>
            <Col xs={24} sm={24} md={10} lg={10} xl={10} xxl={10}>
              <img src={robotic} className="img-responsive" alt="robotic" />
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  };

  const WhyRobotic = () => {
    return (
      <React.Fragment>
        <div className="program">
          <center>
            <h2>Why Robotic Program?</h2>
            <p>
              Our program aims to foster peer-to-peer learning, promote
              creativity and develop social cognitive skills. Students will
              engage in more open-ended activities to inquire and experience
              mathematical and programming concepts. As a self-guided learning
              platform, we focus on inspiring and encouraging young students to
              learn, explore, and build new innovative solutions for the future.
              Their participation will boost their abilities in critical
              thinking, problem solving, independent learning and teamwork.
            </p>

            <img src={whyrobotic} className=" why-robotic-img" alt="robotic" />
          </center>
        </div>
      </React.Fragment>
    );
  };

  const HowItWork = () => {
    return (
      <React.Fragment>
        <div className="how-it-works-robotic">
          <center>
            <h2 className="robotic-title">About Program</h2>
          </center>
          <Row gutter={[24, 24]}>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
              <div className="how-it-works-container">
                <h3>Software Development</h3>
                <p>
                  Robotic Program's Software will be based on
                  <strong> Scratch</strong>, a free programming language and
                  online community where you can create your own interactive
                  stories, games, and animations.
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
                  Focuses on both electronic and Mechanic design, Robotic
                  program's hardware will inspire children to start engaging
                  with programming, science, electronics by building,
                  programming and observing it.
                </p>
              </div>
              <img
                src={robotic2}
                alt="how does it work"
                className="how-robotic-works-img2"
              />
            </Col>
            <Col span={24}>
              <div className="how-it-works-container">
                <h3>Curriculum</h3>
                <p>
                  The curriculum designs purposely for the elementary and middle
                  school students. Students will learn through video tutorials
                  and show their understanding through quizzes and hands-on
                  projects.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  };

  // const OurPrograms = () => {
  //   return (
  //     <React.Fragment>
  //       <div>
  //         <center>
  //           <h2 className="robotic-title">Our Programs</h2>
  //         </center>
  //         <div className="program">
  //           <div className="program-container">
  //             <h3>Program 1</h3>
  //             <p className="robotic-program-desc">
  //               All the work is to gear up the <br />
  //               performance of open-source.
  //             </p>
  //             <Button size="large" type="primary" className="btn-explore">
  //               Read More
  //             </Button>
  //           </div>
  //         </div>

  //         <div className="program">
  //           <div className="program-container-2">
  //             <h3>Program 2</h3>
  //             <p className="robotic-program-desc">
  //               All the work is to gear up the <br />
  //               performance of open-source.
  //             </p>
  //             <Button size="large" type="primary" className="btn-explore">
  //               Read More
  //             </Button>
  //           </div>
  //         </div>
  //       </div>
  //     </React.Fragment>
  //   );
  // };

  const ProgramsRobotic = () => {
    return (
      <React.Fragment>
        <div className="robot-type">
          <center>
            <h2 className="robotic-title">Program Robots</h2>
          </center>
          <div className="robot-type-container">
            <Row gutter={[24, 24]}>
              <Col span={24}>
                <div className="container-robot-items">
                  <h3>K-bots</h3>
                  <p>KOOMPI Robots</p>
                  <img
                    src={kbot}
                    alt="robotic images"
                    className=" robotic-kbot"
                  />
                </div>
              </Col>
              {/* <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                <div className="container-robot-items">
                  <h3>Smart Electronic Kits</h3>
                  <p>Friendly basic electronic components</p>
                  <img
                    src="https://www.bostondynamics.com/sites/default/files/2021-02/right-column-660x480.png"
                    alt="robotic images"
                    className="img-responsive"
                  />
                </div>
              </Col> */}
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
          <h2>Who is this for?</h2>
          <div className="idea-contaner">
            <Row gutter={24}>
              <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                <img src={element} alt="idea" className="who-onelab-img" />
                <div className="goals-detial">
                  <h3>For elementary school</h3>
                  <p>
                    The curriculum and the robot is kid-friendly. We hope they
                    are interested and will spark their curiosities.
                  </p>
                </div>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                <img src={middle} alt="goals" className="who-onelab-img" />
                <div className="goals-detial">
                  <h3>For middle school</h3>
                  <p>
                    Students will learn the foundation to programming, robotics
                    and electronics which involves more technical tools.
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
    <React.Fragment>
      <MetaTage
        title="KOOMPI ROBOTIC | koompi.org"
        urls=" http://www.koompi.org/robotic"
        desc="As part of KOOMPI ACADEMY, Robotic Program is an extension initiative that focuses on an introduction to programming, robotic engineering and electronics."
        // thumbnail="./images/thumbnail/robotic-banner.png"
        thumbnail="http://www.koompi.org/images/thumbnail/robotic-banner.png"
      />

      <div className="robotic">
        <div className="container">
          <RoboticBanner />
          <WhyRobotic />
          <HowItWork />
          <Ideas />
          {/* <OurPrograms /> */}
          <ProgramsRobotic />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Robotic;
