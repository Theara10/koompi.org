import { Row, Col, Button } from "antd";
import React from "react";
import BlogCard from "../../components/Card";
import Contact from "../../components/Contact";
import ProjectCard from "../../components/ProjectCard";

const koompi_logo = require("../../lib/img/koompi-logo-black.png");

function Home() {
  return (
    <React.Fragment>
      <div className="home-banner">
        <div className="container">
          <div className="banner-contents">
            <div className="banner-title">
              <h1>Welcome to koompi.org!</h1>
              {/* <h1>No license fees. No limitations.</h1>
              <h1>Always Open-Source.</h1> */}
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

          <br />
          <br />
          <div style={{ textAlign: "center" }}>
            <Button type="primary">Load More</Button>
          </div>
        </div>
      </div>
      {/* <Contact /> */}
    </React.Fragment>
  );
}

export default Home;
