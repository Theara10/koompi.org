import "./App.css";
import Navbar from "./components/Navbar";
import { Layout, Row, Col, Input, Space, Menu } from "antd";
import Home from "./pages/Home/Home";
import Foot from "./components/Footer";
import KoompiOS from "./pages/KoompiOS/KoompiOS";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sala from "./pages/Sala/Sala";
import Fifi from "./pages/Fifi/Fifi";
import Onelab from "./pages/Onelab/Onelab";
import Blog from "./pages/Blog/Blog";

function App() {
  return (
    <div className="pp">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/koompi-os" component={KoompiOS} exact />
          <Route path="/sala" component={Sala} />
          <Route path="/fifi" component={Fifi} />
          <Route path="/onelab" component={Onelab} />
          <Route path="/blog" component={Blog} />
        </Switch>
        <Foot />
      </Router>
    </div>
  );
}

export default App;
