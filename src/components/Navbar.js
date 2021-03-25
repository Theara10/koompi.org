import React from "react";
import { Link } from "react-router-dom";
import { Layout, Row, Col, Input, Space, Menu } from "antd";

const { Header } = Layout;

function Navbar() {
  return (
    <Header className="header">
      <img
        src="https://barcampcambodia.org/wp-content/uploads/2019/06/Koompi.png"
        width="auto"
        height="50"
        className="logo"
      />

      <Menu theme="dark" mode="horizontal">
        {/* <Menu.Item key="1" className="header-menu-item">
          <Input
            placeholder="Search"
            style={{
              width: 400,
              backgroundColor: "#2f3640",
              borderRadius: 5,
              border: "none",
            }}
          />
        </Menu.Item> */}
        {/* <Menu.Item key="2" className="header-menu-item">
          Community
        </Menu.Item> */}
        <Menu.Item key="3" className="header-menu-item">
          Github
        </Menu.Item>
      </Menu>
    </Header>
  );
}

export default Navbar;
