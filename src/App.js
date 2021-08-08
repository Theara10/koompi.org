import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home/Home";
import Foot from "./components/layout/Footer";
import KoompiOS from "./pages/KoompiOS/KoompiOS";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sala from "./pages/Sala/Sala";
import Fifi from "./pages/Fifi/Fifi";
import Onelab from "./pages/Onelab/Onelab";
import Robotic from "./pages/Robotic/Robotic";
import PrivacyPolicy from "./pages/legals/privacy-policy";
import Terms from "./pages/legals/terms-and-condition";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/koompi-os" component={KoompiOS} exact />
          <Route path="/sala" component={Sala} />
          <Route path="/fifi" component={Fifi} />
          <Route path="/onelab" component={Onelab} />
          <Route path="/robotic" component={Robotic} />
          <Route path="/legals/privacy-policy" component={PrivacyPolicy} />
          <Route path="/legals/terms-and-conditions" component={Terms} />
        </Switch>
        <Foot />
      </Router>
    </React.Fragment>
  );
}

export default App;
