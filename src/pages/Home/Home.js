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
            <Col span={8}>
              <ProjectCard
                link={'/koompi-os'}
                img={koompi_logo.default}
                title="KOOMPI OS"
                subtitle="Operating System"
                description="A friendly Linux distribution derive from Achlinux. We aim to deliver the best user experiences by providing a high performance, stable, and reliable operating system."
              />
            </Col>

            <Col span={8}>
              <ProjectCard
                link={'/sala'}
                img={sala.default}
                title="SALA KOOMPI"
                subtitle="E-Learning"
                description="A virtual school that allows both students and teachers to view and provide learning resources. School admins and teachers can sign up as members of a virtual school on the platform and distribute lessons exclusively to their students as well."
              />
            </Col>
            <Col span={8}>
              <ProjectCard
                link={'/fifi'}
                img={img2.default}
                title="KOOMPI FIFI"
                subtitle="Network"
                description="This website is a one-stop platform that gathering the instruction installation, updating, FAQs, and problem-solving."
              />
            </Col>
            <Col span={8}>
              <ProjectCard
                link={'/onelab'}
                img="https://image.freepik.com/free-vector/computer-lab-abstract-concept-illustration_335657-3876.jpg"
                title="KOOMPI ONELAB"
                subtitle="Lab Solution"
                description="This website is a one-stop platform that gathering the instruction installation, updating, FAQs, and problem-solving."
              />
            </Col>
            <Col span={8}>
              <ProjectCard
                link={'/robotic'}
                img="https://qf7s26sxazr7uwqlogrl311.blob.core.windows.net/sys-master-root/hae/h45/9722305249310/7448929222296_main_480Wx480H"
                title="KOOMPI Robotic Program"
                subtitle="Robotic"
                description="This website is a one-stop platform that gathering the instruction installation, updating, FAQs, and problem-solving."
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
