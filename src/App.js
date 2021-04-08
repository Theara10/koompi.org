import "./App.css";
import Navbar from "./components/Navbar";
import { Layout, Row, Col, Input, Space, Menu } from "antd";
import Home from "./pages/Home/Home";
import Foot from "./components/Footer";
import KoompiOS from "./pages/KoompiOS/KoompiOS";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sala from "./pages/Sala/Sala";

function App() {
  return (
    <div className="pp">
      <Navbar />
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/koompi-os" component={KoompiOS} exact />
          <Route path="/sala" component={Sala} />
        </Switch>
        <Foot />
      </Router>
    </div>
  );
}

export default App;
