import React from "react";
import { Link } from "react-router-dom";
import { Layout, Row, Col, Input, Space, Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

const { Header } = Layout;
const img = require("../lib/img/Koompi-White.png");

const menu = (
  <Menu>
    <Menu.Item>
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
          src="http://localhost:3000/static/media/favicon.727b64de.png"
          height="30"
          width="auto"
        />
        <div style={{ paddingLeft: 20 }}>
          <h3 style={{ fontWeight: "bold" }}>SALA KOOMPI</h3>
          <p style={{ fontSize: 12, lineHeight: 1.2 }}>
            Anakin Skywalker had the potential
            <br /> to become one of the most powerful <br />
            Jedi ever
          </p>
        </div>
      </div>
    </Menu.Item>
    <Menu.Item>
      <div style={{ paddingLeft: 20, paddingRight: 20, display: "flex" }}>
        <img
          src="http://localhost:3000/static/media/Wifi-KOOMPI-2.a28e9f89.png"
          height="30"
          width="auto"
        />
        <div style={{ paddingLeft: 20 }}>
          <h3 style={{ fontWeight: "bold" }}>KOOMPI ONELAB</h3>
          <p style={{ fontSize: 12, lineHeight: 1.2 }}>
            Computer workstation with usability, <br />
            minimal internet dependency, efficiency
          </p>
        </div>
      </div>
    </Menu.Item>
    <Menu.Item>
      <div style={{ paddingLeft: 20, paddingRight: 20, display: "flex" }}>
        <img
          src="http://localhost:3000/static/media/Wifi-KOOMPI-2.a28e9f89.png"
          height="30"
          width="auto"
        />
        <div style={{ paddingLeft: 20 }}>
          <h3 style={{ fontWeight: "bold" }}>KOOMPI FIFI</h3>
          <p style={{ fontSize: 12, lineHeight: 1.2 }}>
            Computer workstation with usability, <br />
            minimal internet dependency, efficiency
          </p>
        </div>
      </div>
    </Menu.Item>
    <Menu.Item>
      <div style={{ paddingLeft: 20, paddingRight: 20, display: "flex" }}>
        <img
          src="https://www.mozilla.org/media/protocol/img/logos/firefox/browser/logo-sm.f2523d97cbe0.png"
          height="30"
          width="auto"
        />
        <div style={{ paddingLeft: 10 }}>
          <h3 style={{ fontWeight: "bold" }}>KOOMPI OS</h3>
          <p style={{ fontSize: 12, lineHeight: 1.2 }}>
            Discovered as a slave on Tatooine by <br />
            Qui-Gon Jinn and Obi-Wan Kenobi.
          </p>
        </div>
      </div>
    </Menu.Item>
  </Menu>
);

function Navbar() {
  return (
    <Header className="header">
      <img src={img.default} width="auto" height="40" className="logo" />

      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="2" className="header-menu-item">
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
          Wiki
        </Menu.Item>
        <Menu.Item key="3" className="header-menu-item">
          Community
        </Menu.Item>
      </Menu>
    </Header>
  );
}

export default Navbar;
