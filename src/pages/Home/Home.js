import { Row, Col } from "antd";
import React from "react";
import BlogCard from "../../components/Card";
import MetaTage from "../../components/MetaTage";
// import Contact from "../../components/Contact";
import ProjectCard from "../../components/ProjectCard";
import { Helmet } from "react-helmet";

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
      {/* <MetaTage
        title="No license fees. No limitations. Always open. | KOOMPI.org"
        urls=" https://www.koompi.org"
        desc="No license fees. No limitations. Always open."
        // thumbnail="./images/thumbnail/homepage.png"
        thumbnail="https://www.koompi.org/images/thumbnail/homepage.png"
      /> */}
      <Helmet>
        ‍
        <title>
          No license fees. No limitations. Always open. | KOOMPI.org
        </title>
        ‍
        <meta
          name="description"
          content="No license fees. No limitations. Always open."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@koompios" />
        <meta name="twitter:creator" content="@koompios" />
        <meta
          name="twitter:title"
          content="No license fees. No limitations. Always open. | KOOMPI.org"
        />
        <meta
          name="twitter:description"
          content="No license fees. No limitations. Always open."
        />
        <meta
          name="twitter:image"
          content="https://www.koompi.org/images/thumbnail/homepage.png"
        />
        <meta
          property="og:title"
          content="No license fees. No limitations. Always open. | KOOMPI.org"
        />
        <meta
          property="og:description"
          content="No license fees. No limitations. Always open."
        />
        <meta
          property="og:image"
          content="https://www.koompi.org/images/thumbnail/homepage.png"
        />
        <meta property="og:url" content=" http://www.koompi.org" />
        <meta property="og:site_name" content="koompi.org" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
      </Helmet>
    </React.Fragment>
  );
}

export default Home;
