import React from "react";
import { Link } from "react-router-dom";
import { Layout, Row, Col, Input, Space, Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

const { Header } = Layout;
const img = require("../lib/img/Koompi-White.png");
const img2 = require("../lib/img/KOOMPI-Wifi-1.png");
const sala = require("../lib/img/sala-logo.png");

const menu = (
  <Menu>
    <Menu.Item>
      <Link to="/koompi-os">
        <div
          style={{
            paddingTop: 20,
            paddingLeft: 20,
            paddingRight: 20,
            paddingBottom: 0,
            display: "flex",
          }}
        >
          <img
            src="https://www.mozilla.org/media/protocol/img/logos/firefox/browser/logo-sm.f2523d97cbe0.png"
            height="30"
            width="auto"
          />
          <div style={{ paddingLeft: 20 }}>
            <h3 style={{ fontWeight: "bold" }}>KOOMPI OS</h3>
            <p style={{ fontSize: 12, lineHeight: 1.2 }}>
              A friendly Linux distribution derive <br />
              from Achlinux.
            </p>
          </div>
        </div>
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/sala">
        <div style={{ paddingLeft: 20, paddingRight: 20, display: "flex" }}>
          <img src={sala.default} height="30" width="auto" />
          <div style={{ paddingLeft: 20 }}>
            <h3 style={{ fontWeight: "bold" }}>SALA KOOMPI</h3>
            <p style={{ fontSize: 12, lineHeight: 1.2 }}>
              Learn and create your own online <br />
              school.
            </p>
          </div>
        </div>
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/fifi">
        <div style={{ paddingLeft: 20, paddingRight: 20, display: "flex" }}>
          <img src={img2.default} height="30" width="auto" />
          <div style={{ paddingLeft: 20 }}>
            <h3 style={{ fontWeight: "bold" }}>KOOMPI FIFI</h3>
            <p style={{ fontSize: 12, lineHeight: 1.2 }}>
              Convenient and affordable mobile WIFI <br />
              anywhere.
            </p>
          </div>
        </div>
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/onelab">
        <div style={{ paddingLeft: 20, paddingRight: 20, display: "flex" }}>
          <img
            src="https://www.mozilla.org/media/protocol/img/logos/pocket/pocket.f21f7a5dedba.svg"
            height="30"
            width="auto"
          />
          <div style={{ paddingLeft: 20 }}>
            <h3 style={{ fontWeight: "bold" }}>KOOMPI ONELAB</h3>
            <p style={{ fontSize: 12, lineHeight: 1.2 }}>
              Computer workstation with usability,
              <br /> minimal internet dependency
              <br /> and efficiency.
            </p>
          </div>
        </div>
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/robotic">
        <div style={{ paddingLeft: 20, paddingRight: 20, display: "flex" }}>
          <img
            src="https://qf7s26sxazr7uwqlogrl311.blob.core.windows.net/sys-master-root/hae/h45/9722305249310/7448929222296_main_480Wx480H"
            height="30"
            width="auto"
          />
          <div style={{ paddingLeft: 20 }}>
            <h3 style={{ fontWeight: "bold" }}>KOOMPI Robotic Program</h3>
            <p style={{ fontSize: 12, lineHeight: 1.2 }}>
              Computer workstation with usability,
              <br /> minimal internet dependency
              <br /> and efficiency.
            </p>
          </div>
        </div>
      </Link>
    </Menu.Item>
  </Menu>
);

function Navbar() {
  return (
    <Header className="header">
      <Link to="/">
        <img src={img.default} width="auto" height="40" className="logo" />
      </Link>

      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="4" className="header-menu-item">
          <Dropdown overlay={menu}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              Projects
            </a>
          </Dropdown>
        </Menu.Item>
        <Menu.Item key="2" className="header-menu-item">
          <a href="https://wiki.koompi.org/en/index.md" target="_blank">
            Wiki
          </a>
        </Menu.Item>
        <Menu.Item key="3" className="header-menu-item">
          <a href=" https://t.me/koompicom" target="_blank">
            Community
          </a>
        </Menu.Item>
      </Menu>
    </Header>
  );
}

export default Navbar;
