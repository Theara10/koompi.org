import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Dropdown, BackTop, Row, Col } from "antd";
import { IoMdArrowRoundUp } from "react-icons/io";

const { Header } = Layout;

const menu = (
  <Menu>
    <Menu.Item>
      <Link to="/koompi-os">
        <div className="project-icons">
          <Row gutter={24}>
            <Col span={4}>
              <img
                src="./images/koompi-logo-black.png"
                alt="logo-icons"
                className="logo-icons"
              />
            </Col>
            <Col span={20}>
              <div className="project-detail-container">
                <h3>KOOMPI OS</h3>
                <p>
                  A friendly Linux distribution derive <br />
                  from Achlinux.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/sala">
        <div className="project-icons">
          <Row gutter={24}>
            <Col span={4}>
              <img
                src="./images/sala-logo.png"
                alt="logo-icons"
                className="logo-icons"
              />
            </Col>
            <Col span={20}>
              <div className="project-detail-container">
                <h3>SALA KOOMPI</h3>
                <p>
                  Learn and create your own online <br />
                  school.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/fifi">
        <div className="project-icons">
          <Row gutter={24}>
            <Col span={4}>
              <img
                src="./images/KOOMPI-Wifi-1.png"
                alt="icon-logo"
                className="logo-icons"
              />
            </Col>
            <Col span={20}>
              <div className="project-detail-container">
                <h3>KOOMPI FIFI</h3>
                <p>
                  Convenient and affordable mobile WIFI <br />
                  anywhere.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/onelab">
        <div className="project-icons">
          <Row gutter={24}>
            <Col span={4}>
              <img
                src="./images/koompi-logo-black.png"
                className="logo-icons"
                alt="icon-logo"
              />
            </Col>
            <Col span={20}>
              <div className="project-detail-container">
                <h3>KOOMPI ONELAB</h3>
                <p>
                  Computer workstation with usability,
                  <br /> minimal internet dependency
                  <br /> and efficiency.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/robotic">
        <div className="project-icons">
          <Row gutter={24}>
            <Col span={4}>
              <img
                src="./images/robotic.png"
                className="logo-icons"
                alt="icon-logo"
              />
            </Col>
            <Col span={20}>
              <div className="project-detail-container">
                <h3>KOOMPI Robotic Program</h3>
                <p>
                  Computer workstation with usability,
                  <br /> minimal internet dependency
                  <br /> and efficiency.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Link>
    </Menu.Item>
  </Menu>
);

function Navbar() {
  return (
    <React.Fragment>
      <BackTop>
        <IoMdArrowRoundUp className="back-to-top" />
      </BackTop>
      <Header className="header">
        <div className="container">
          <div className="navbar">
            <Link to="/">
              <img
                src="./images/Koompi-White.png"
                className="koompi-logo"
                alt="koompi.org"
              />
            </Link>

            <Menu theme="dark" mode="horizontal">
              <Menu.Item key="4" className="header-menu-item">
                <Dropdown overlay={menu}>
                  <div
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    Projects
                  </div>
                </Dropdown>
              </Menu.Item>
              <Menu.Item key="2" className="header-menu-item">
                <a
                  href="https://wiki.koompi.org/en/index.md"
                  rel="noreferrer"
                  target="_blank"
                >
                  Wiki
                </a>
              </Menu.Item>
              <Menu.Item key="3" className="header-menu-item">
                <a href=" https://t.me/koompicom" target="_blank">
                  Community
                </a>
              </Menu.Item>
            </Menu>
          </div>
        </div>
      </Header>
    </React.Fragment>
  );
}

export default Navbar;
