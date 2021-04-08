import { Row, Col } from "antd";
import React from "react";
import Partners from "../../components/Partners";
import ProjectCard from "../../components/ProjectCard";
import RecentNews from "../../components/RecentNews";
import "./Home.css";

const img = require("../../lib/img/docs.jpg");
const img2 = require("../../lib/img/Wifi-KOOMPI-2.png");
const img3 = require("../../lib/img/favicon.png");

function Home() {
  return (
    <div className="container">
      <div className="project-intro">
        <Row gutter={[24, 24]}>
          <Col span={8}>
            <img
              src={img.default}
              alt="koompi wiki docs"
              className="img-responsive"
            />
          </Col>
          <Col span={16}>
            <div className="welcome-doc">
              <h2 className="document-title">KOOMPI PROJECTS</h2>
              <p className="document-content">
                This website is a one-stop platform that gathering the
                instruction installation, updating, FAQs, and problem-solving.
                You can learn more about the Linux commands and information.
                Besides, you can keep up with the latest releases for new
                features and environment as our teams are always trying their
                best to deliver the optimal user experience.
              </p>
            </div>
          </Col>
        </Row>
      </div>

      <div className="projects-card">
        <Row gutter={[24, 24]}>
          <Col span={12}>
            <ProjectCard
              link={"/koompi-os"}
              img="https://ai.devoteam.com/wp-content/uploads/sites/91/2018/05/google-logo-icon-png-transparent-background.png"
              title="KOOMPI OS"
              subtitle="Operating System"
              description="This website is a one-stop platform that gathering the instruction installation, updating, FAQs, and problem-solving. You can learn more about the Linux commands and information."
            />
          </Col>

          <Col span={12}>
            <ProjectCard
              link={"/sala"}
              img={img3.default}
              title="SALA KOOMPI"
              subtitle="E-Learning"
              description="This website is a one-stop platform that gathering the instruction installation, updating, FAQs, and problem-solving. You can learn more about the Linux commands and information."
            />
          </Col>
          <Col span={12}>
            <ProjectCard
              img={img2.default}
              title="KOOMPI FIFI"
              subtitle="Network"
              description="This website is a one-stop platform that gathering the instruction installation, updating, FAQs, and problem-solving. You can learn more about the Linux commands and information."
            />
          </Col>
          <Col span={12}>
            <ProjectCard
              img="https://cryptologos.cc/logos/bitcoin-btc-logo.png"
              title="KOOMPI ONELAB"
              subtitle="Lab Solution"
              description="This website is a one-stop platform that gathering the instruction installation, updating, FAQs, and problem-solving. You can learn more about the Linux commands and information."
            />
          </Col>
        </Row>
      </div>

      <div className="recentnews">
        <div className="recentnews-header">
          <h1>Recent News</h1>
        </div>
        <RecentNews />
        <RecentNews />
        <RecentNews />
      </div>
      <div>
        <div className="partners">
          <h1 className="partners-header">Partners</h1>
          <Partners />
        </div>
      </div>
    </div>
  );
}

export default Home;
