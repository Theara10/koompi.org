import { Row, Col, Card, Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import BlogCard from '../../components/Card';
import Contact from '../../components/Contact';
import Partners from '../../components/Partners';
import ProjectCard from '../../components/ProjectCard';
import RecentNews from '../../components/RecentNews';

const img2 = require('../../lib/img/KOOMPI-Wifi-1.png');
const koompi_logo = require('../../lib/img/koompi-logo-black.png');
const sala = require('../../lib/img/sala-logo.png');

function Home() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="home-banner">
          <div className="banner-contents">
            {/* <h1 className="banner-sub-title">KOOMPI</h1> */}
            <h1 className="banner-title">
              <div>No license fees. No limitations.</div>{' '}
              <div>Always Open-Source.</div>
            </h1>

            <p className="banner-desc">
              Welcome to your new favorite browser. Get the latest features,
              fast performance, and the development tools you need to build for
              the open web.
            </p>
          </div>
        </div>
      </div>

      <div className="projects">
        <div className="container">
          <center>
            <h2 className="project-head-title">The Open Source Projects</h2>
            <p className="project-desc">
              Welcome to your new favorite browser. Get the latest features,
              fast performance, and the development tools you need to build for
              the open web.
            </p>
          </center>
          <Row gutter={[24, 24]}>
            <Col span={24}>
              <ProjectCard
                link={'/koompi-os'}
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
              <p>
                Get the latest features, fast performance, and the development
                tools you need to build for the open web.
              </p>
            </div>
          </center>
          <Row gutter={[16, 16]}>
            <Col span={6}>
              <BlogCard />
            </Col>
            <Col span={6}>
              <BlogCard />
            </Col>
            <Col span={6}>
              <BlogCard />
            </Col>
            <Col span={6}>
              <BlogCard />
            </Col>
            <Col span={6}>
              <BlogCard />
            </Col>
            <Col span={6}>
              <BlogCard />
            </Col>
            <Col span={6}>
              <BlogCard />
            </Col>
            <Col span={6}>
              <BlogCard />
            </Col>
          </Row>
          <br />
          <br />
          <div style={{ textAlign: 'center' }}>
            <Button type="primary">Load More</Button>
          </div>
        </div>
      </div>
      <Contact />
    </React.Fragment>
  );
}

export default Home;
