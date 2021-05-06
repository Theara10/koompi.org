import React from "react";
import { Link } from "react-router-dom";
import { Layout, Row, Col, Input, Space, Menu } from "antd";

const { Header } = Layout;
const img = require("../lib/img/Koompi-White.png");

function Navbar() {
  return (
    <Header className="header">
      <img src={img.default} width="auto" height="40" className="logo" />

      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="2" className="header-menu-item">
          Projects
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
