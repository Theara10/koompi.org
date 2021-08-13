import { Row, Col } from "antd";
import React from "react";
import BlogCard from "../../components/Card";
import MetaTage from "../../components/MetaTage";
// import Contact from "../../components/Contact";
import ProjectCard from "../../components/ProjectCard";

const koompi_logo = require("../../lib/img/koompi-logo-black.png");

function Home() {
  return (
    <React.Fragment>
      <div className="home-banner">
        <div className="container">
          <div className="banner-contents">
            <div className="banner-title">
              <h1>
                No license fees. No limitations.
                <br /> Always open.
              </h1>
            </div>
            <p className="banner-desc">
              This website is the official encyclopedia for KOOMPI projects and
              initiatives. Read about our contribution to the open-source
              community below!
            </p>
          </div>
        </div>
      </div>

      <div className="projects">
        <div className="container">
          <center>
            <h2 className="project-head-title">The Open Source Projects</h2>
            <p className="project-desc">
              Read about our ongoing open-source projects and programs.
            </p>
          </center>
          <Row gutter={[24, 24]}>
            <Col span={24}>
              <ProjectCard
                link={"/koompi-os"}
                img={koompi_logo.default}
                title="KOOMPI OS"
                subtitle="Operating System"
                description="A friendly Linux distribution derive from Achlinux. We aim to deliver the best user experiences by providing a high performance, stable, and reliable operating system."
              />
            </Col>
          </Row>
        </div>
      </div>

      <div className="container recentnews">
        <div className="recentnews-container">
          <center>
            <div className="recentnews-header">
              <h1>News And Events</h1>
              <p>Read about our activities and milestones.</p>
            </div>
          </center>

          {/* -----------blog posts ------------ */}
          <div>
            <BlogCard />
          </div>
        </div>
      </div>
      {/* <Contact /> */}
      <MetaTage
        title="No license fees. No limitations. Always open. | KOOMPI.org"
        urls=" http://www.koompi.org"
        desc="No license fees. No limitations. Also, Open Source."
        // thumbnail="./images/thumbnail/homepage.png"
        thumbnail="https://www.koompi.org/images/thumbnail/homepage.png"
      />
    </React.Fragment>
  );
}

export default Home;
