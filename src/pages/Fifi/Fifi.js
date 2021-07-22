import React from "react";
import { Row, Col, Button } from "antd";
// import { TileLayer, MapContainer as LeafletMap } from "react-leaflet";
import fifi from "../../lib/img/MobileApp12.png";
import mobile from "../../lib/img/koompi-fifi.png";
import map from "../../lib/img/map2.png";

function Fifi() {
  return (
    <div className="fifi">
      <div className="fifi-banner">
        <div className="container">
          <center>
            <div className="koompi-fifi-content">
              <h1>KOOMPI FiFi APP</h1>
              <p className="banner-desc2">
                Part of the Internet-For-All initiative, KOOMPI Fi-Fi is a
                school internet infrastructure provided by KOOMPI with fast
                fiber internet where students & teachers only pay as little as
                1.25$ per month per user, up to two devices.
              </p>
            </div>
            <img src={fifi} className="koompi-fifi-img" alt="koompi fifi" />
          </center>
        </div>
      </div>
      {/* 
      <div className="fifi-features">
        <div className="fiti-feature-container">
          <Row gutter={18}>
            <Col span={7} offset={1}>
              <div>
                <img
                  src="https://icons.getbootstrap.com/assets/img/icons-hero.png"
                  height="100"
                  width="auto"
                />
                <h3
                  style={{ fontSize: 24, fontWeight: "bold", marginBottom: 0 }}
                >
                  Modern Internet
                </h3>
                <p>
                  The idea behind KOOMPI OS is to create a free operating system
                  for all kind of users without breaching their personal data.
                </p>
              </div>
            </Col>
            <Col span={7} offset={1}>
              <div>
                <img
                  src="https://icons.getbootstrap.com/assets/img/icons-hero.png"
                  height="100"
                  width="auto"
                />
                <h3
                  style={{ fontSize: 24, fontWeight: "bold", marginBottom: 0 }}
                >
                  Blockchain Based Payment System
                </h3>
                <p>
                  All the work is to gear up the performance of open-source and
                  deliver the reliable operating system to all users, who use
                  it.
                </p>
              </div>
            </Col>
            <Col span={7} offset={1}>
              <div>
                <img
                  src="https://icons.getbootstrap.com/assets/img/icons-hero.png"
                  height="100"
                  width="auto"
                />
                <h3
                  style={{ fontSize: 24, fontWeight: "bold", marginBottom: 0 }}
                >
                  Wifi At Places
                </h3>
                <p>
                  The users who are exhausted with change an operating system
                  and desktop environments that are not available for all
                  resources they need.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div> */}

      <div className="sala-white-back">
        <div className="container">
          <Row>
            <Col span={10}>
              <img src={mobile} alt="koompi fifi" className="koompi-fifi-pic" />
            </Col>
            <Col span={14}>
              <div className="fifi-container-details">
                <h2>Spend as Low as 0.50$ a Month</h2>
                <p className="intro-description">
                  All packages of the software are available for the latest
                  version, using pi and pix as a package manager.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className="sala-gray-back">
        <div className="container">
          <Row>
            <Col span={14}>
              <div className="fifi-container-details">
                <h2>Speed Up to 50Mbps</h2>
                <p className="intro-description">
                  All packages of the software are available for the latest
                  version, using pi and pix as a package manager.
                </p>
              </div>
            </Col>
            <Col span={10}>
              <img src={mobile} alt="koompi fifi" className="koompi-fifi-pic" />
            </Col>
          </Row>
        </div>
      </div>

      <div className="sala-white-back">
        <div className="container">
          <Row>
            <Col span={10}>
              <img src={mobile} alt="koompi fifi" className="koompi-fifi-pic" />
            </Col>
            <Col span={14}>
              <div className="fifi-container-details">
                <h2>10 Minutes to Fully Set Up</h2>
                <p className="intro-description">
                  All packages of the software are available for the latest
                  version, using pi and pix as a package manager.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className="fifi-application">
        <div className="fifi-application-container">
          <h2 className="">Download App</h2>
          <p>
            Part of the Internet-For-All initiative, KOOMPI Fi-Fi is a school
            internet infrastructure provided by KOOMPI with fast fiber internet
            where students & teachers only pay as little as 1.25$ per month per
            user, up to two devices.{" "}
          </p>
          <Button size="large" type="primary">
            Play Store
          </Button>
          <img className="fifi-img" src={fifi} alt="koompi fifi mobile app" />
        </div>
      </div>

      <div className="background-locations">
        <div className="container">
          <center>
            <h2 className="fifi-title">Available FIFI Location</h2>
            <p>
              Part of the Internet-For-All initiative, KOOMPI Fi-Fi is a school
              internet infrastructure provided by KOOMPI <br /> with fast fiber
              internet where students & teachers only pay as little as 1.25$ per
              month per user, up to two devices.
            </p>
            <div className="map-container">
              <img src={map} alt="maps" className="map" />
            </div>
          </center>
        </div>
      </div>
    </div>
  );
}

export default Fifi;
