import { Row, Col, Card, Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import Contact from "../../components/Contact";
import Partners from "../../components/Partners";
import ProjectCard from "../../components/ProjectCard";
import RecentNews from "../../components/RecentNews";
import "./Home.css";

const img = require("../../lib/img/docs.jpg");
const img2 = require("../../lib/img/KOOMPI-Wifi-1.png");
const img3 = require("../../lib/img/favicon.png");
const sala = require("../../lib/img/sala-logo.png");

function Home() {
  return (
    <div className="home">
      <div className="project-intro">
        <Row gutter={[24, 24]}>
          <Col span={12}>
            <div style={{ width: 400 }}>
              <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
              <p className="document-content">
                This website is a one-stop platform that gathering the
                instruction installation.
              </p>
            </div>
          </Col>
          <Col span={12}>
            <img
              src="https://image.freepik.com/free-vector/communication-flat-icon_1262-18771.jpg"
              alt="koompi wiki docs"
              className="img-responsive"
            />
          </Col>
        </Row>
      </div>

      <div className="projects">
        <div className="projects-container"></div>
        <Row gutter={[24, 24]}>
          <Col span={12}>
            <ProjectCard
              link={"/koompi-os"}
              img="https://ai.devoteam.com/wp-content/uploads/sites/91/2018/05/google-logo-icon-png-transparent-background.png"
              title="KOOMPI OS"
              subtitle="Operating System"
              description="A friendly Linux distribution derive from Achlinux. We aim to deliver the best user experiences by providing a high performance, stable, and reliable operating system."
            />
          </Col>

          <Col span={12}>
            <ProjectCard
              link={"/sala"}
              img={sala.default}
              title="SALA KOOMPI"
              subtitle="E-Learning"
              description="A virtual school that allows both students and teachers to view and provide learning resources. School admins and teachers can sign up as members of a virtual school on the platform and distribute lessons exclusively to their students as well."
            />
          </Col>
          <Col span={12}>
            <ProjectCard
              link={"/fifi"}
              img={img2.default}
              title="KOOMPI FIFI"
              subtitle="Network"
              description="This website is a one-stop platform that gathering the instruction installation, updating, FAQs, and problem-solving."
            />
          </Col>
          <Col span={12}>
            <ProjectCard
              link={"/onelab"}
              img="https://cryptologos.cc/logos/bitcoin-btc-logo.png"
              title="KOOMPI ONELAB"
              subtitle="Lab Solution"
              description="This website is a one-stop platform that gathering the instruction installation, updating, FAQs, and problem-solving."
            />
          </Col>
          <Col span={12}>
            <ProjectCard
              link={"/robotic"}
              img="https://qf7s26sxazr7uwqlogrl311.blob.core.windows.net/sys-master-root/hae/h45/9722305249310/7448929222296_main_480Wx480H"
              title="KOOMPI Robotic Program"
              subtitle="Robotic"
              description="This website is a one-stop platform that gathering the instruction installation, updating, FAQs, and problem-solving."
            />
          </Col>
        </Row>
      </div>

      <div className="charity">
        <div className="charity-container">
          <Row>
            <Col span={7} offset={5}>
              <div className="charity-left">
                <h1 style={{ fontSize: 36, lineHeight: 1, fontWeight: "bold" }}>
                  Donation
                </h1>
                <p>
                  The non-profit Mozilla Foundation supports online privacy &
                  security, trustworthy artificial intelligence.
                </p>
                <a>Visit the Mozilla Foundation</a>
              </div>
            </Col>
            <Col span={12}>
              <img
                src="https://www.mozilla.org/media/img/home/2018/billboard-healthy-internet-high-res.56fc2c64c968.png"
                height="300"
                width="auto"
              />
            </Col>
          </Row>
        </div>
      </div>

      <div className="recentnews">
        <div className="recentnews-container">
          <div className="recentnews-header">
            <h1 style={{ fontSize: 32 }}>
              Creating opportunities for more students
            </h1>
            <p style={{ color: "#5f6368", marginBottom: 20 }}>
              Through community-based programs and philanthropy.
            </p>
          </div>
          <Row gutter={22}>
            <Col span={8}>
              <Card
                cover={
                  <img
                    alt="example"
                    src="https://img-getpocket.cdn.mozilla.net/direct?url=https%3A%2F%2Fwww.protocol.com%2Fmedia-library%2FeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yNTg5Mzk4MS9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTY2NTA0NjU4N30.wc3XeEUZRqtc7YJrQT0MSbpPlUanDP78iW-oQD1zcqc%2Fimage.jpg%3Fwidth%3D1200%26coordinates%3D0%252C0%252C0%252C341%26height%3D600&resize=w450"
                  />
                }
              >
                <p className="recentnews-date">18th Feb 2021</p>
                <h2>Mozilla leads push for FCC to reinstate net neutrality</h2>
              </Card>
            </Col>
            <Col span={8}>
              <Card
                cover={
                  <img
                    alt="example"
                    src="https://miro.medium.com/max/1400/1*8y-bTJLxH6sudQ-nIFMfqg.jpeg"
                  />
                }
              >
                <p className="recentnews-date">18th Feb 2021</p>
                <h2>Mozilla leads push for FCC to reinstate net neutrality</h2>
              </Card>
            </Col>
            <Col span={8}>
              <Card
                cover={
                  <img
                    alt="example"
                    src="https://cdn-images-1.medium.com/max/1024/1*q_Tv0sTdMKnMmhN7JnVVHA.jpeg"
                  />
                }
              >
                <p className="recentnews-date">18th Feb 2021</p>
                <h2>
                  Mozilla leads push for FCC to reinstate net neutrality. I'm
                  Batman.
                </h2>
              </Card>
            </Col>
          </Row>
          <div style={{ textAlign: "center" }}>
            <p>
              <Link to="/blog">More...</Link>
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="partners">
          <h1 className="partners-header">Partners</h1>
          <p className="partners-sub-header">
            The non-profit Mozilla Foundation supports online privacy &
            security, trustworthy artificial intelligence.
          </p>
          <Partners />
        </div>
      </div>
      <Contact />
    </div>
  );
}

export default Home;
