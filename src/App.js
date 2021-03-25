import "./App.css";
// import Navbar from "./components/Navbar";
import { Layout, Row, Col, Input, Space, Menu } from "antd";
import Home from "./pages/Home";
import { Footer } from "antd/lib/layout/layout";

const { Header } = Layout;

const img = require("./lib/img/Koompi-White.png");

function App() {
  return (
    <div className="pp">
      {/* <Navbar /> */}
      <Header className="header">
        <img src={img.default} width="auto" height="40" className="logo" />

        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="2" className="header-menu-item">
            Community
          </Menu.Item>
          <Menu.Item key="3" className="header-menu-item">
            Wiki
          </Menu.Item>
        </Menu>
      </Header>
      <Home />
      <Footer />
    </div>
  );
}

export default App;
