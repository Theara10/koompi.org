import React from "react";
import { Row, Col, Button } from "antd";
// import { TileLayer, MapContainer as LeafletMap } from "react-leaflet";
import fifi from "../../lib/img/MobileApp12.png";
import mobile from "../../lib/img/koompi-fifi.png";
import fifimobile from "../../lib/img/FiFiMobileApp.png";
import map from "../../lib/img/map.png";
import MetaTage from "../../components/MetaTage";

function Fifi() {
  return (
    <React.Fragment>
      <MetaTage
        title="KOOMPI FiFi | koompi.org"
        urls=" http://www.koompi.org/fifi"
        desc="As part of our Internet-For-All initiative, KOOMPI Fi-Fi is a wireless internet infrastructure designed for schools and neighboring communities providing fast fiber internet at a user cost of only USD 1.25 per month for up to two devices."
        // thumbnail="./images/thumbnail/fifi-banner.png"
        thumbnail="http://www.koompi.org/images/thumbnail/fifi-banner.png"
      />
      <div className="fifi">
        <div className="fifi-banner">
          <div className="container">
            <center>
              <div className="koompi-fifi-content">
                <h1>KOOMPI FiFi APP</h1>
                <p className="banner-desc2">
                  As part of our Internet-For-All initiative, KOOMPI Fi-Fi is a
                  wireless internet infrastructure designed for schools and
                  neighboring communities providing fast fiber internet at a
                  user cost of only USD 1.25 per month for up to two devices.
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
        <div>
          <div className="sala-white-back">
            <div className="fifi-desktop">
              <div className="container">
                <Row gutter={[12, 12]}>
                  <Col xs={24} sm={24} md={10} lg={10} xl={10} xxl={10}>
                    <img
                      src={mobile}
                      alt="koompi fifi"
                      className="koompi-fifi-pic"
                    />
                  </Col>
                  <Col xs={24} sm={24} md={14} lg={14} xl={14} xxl={14}>
                    <div className="fifi-container-details">
                      <h2>Spend as Low as 0.50$ a Month</h2>
                      <p className="intro-description">
                        KOOMPI Fi-Fi is a 5000៛ ($1.25) monthly subscription
                        network service that provides secure storage and
                        internet connection.
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="mobile-row-responsive">
              <div className="container">
                <Row gutter={[12, 12]}>
                  <Col xs={24} sm={24} md={14} lg={14} xl={14} xxl={14}>
                    <div className="fifi-container-details">
                      <h2>Spend as Low as 0.50$ a Month</h2>
                      <p className="intro-description">
                        KOOMPI Fi-Fi is a 5000៛ ($1.25) monthly subscription
                        network service that provides secure storage and
                        internet connection.
                      </p>
                    </div>
                  </Col>
                  <Col xs={24} sm={24} md={10} lg={10} xl={10} xxl={10}>
                    <img
                      src={mobile}
                      alt="koompi fifi"
                      className="koompi-fifi-pic"
                    />
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>

        <div className="sala-gray-back">
          <div className="container">
            <Row gutter={[12, 12]}>
              <Col xs={24} sm={24} md={14} lg={14} xl={14} xxl={14}>
                <div className="fifi-container-details">
                  <h2>Speed Up to 300Mbps</h2>
                  <p className="intro-description">
                    Data is unlimited with speeds from between 60 Mbps to 300
                    Mbps depending on the connected workload.
                  </p>
                </div>
              </Col>
              <Col xs={24} sm={24} md={10} lg={10} xl={10} xxl={10}>
                <img
                  src={mobile}
                  alt="koompi fifi"
                  className="koompi-fifi-pic"
                />
              </Col>
            </Row>
          </div>
        </div>

        <div>
          <div className="sala-white-back">
            <div className="fifi-desktop">
              <div className="container">
                <Row gutter={[12, 12]}>
                  <Col xs={24} sm={24} md={10} lg={10} xl={10} xxl={10}>
                    <img
                      src={fifimobile}
                      alt="koompi fifi"
                      className="koompi-fifi-pic"
                    />
                  </Col>
                  <Col xs={24} sm={24} md={14} lg={14} xl={14} xxl={14}>
                    <div className="fifi-container-details">
                      <h2>10 Minutes to Fully Set Up</h2>
                      <p className="intro-description">
                        Be wherever KOOMPI Wifi is set up and instantly connect!
                        KOOMPI Hotspot is a mobile app that connects users to
                        KOOMPI Wifi wherever it is available. Be among the first
                        2000 users to get two months of free KOOMPI Hotspot
                        plan!
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="mobile-row-responsive">
              <div className="container">
                <Row gutter={[12, 12]}>
                  <Col xs={24} sm={24} md={14} lg={14} xl={14} xxl={14}>
                    <div className="fifi-container-details">
                      <h2>10 Minutes to Fully Set Up</h2>
                      <p className="intro-description">
                        Be wherever KOOMPI Wifi is set up and instantly connect!
                        KOOMPI Hotspot is a mobile app that connects users to
                        KOOMPI Wifi wherever it is available. Be among the first
                        2000 users to get two months of free KOOMPI Hotspot
                        plan!
                      </p>
                    </div>
                  </Col>
                  <Col xs={24} sm={24} md={10} lg={10} xl={10} xxl={10}>
                    <img
                      src={fifimobile}
                      alt="koompi fifi"
                      className="koompi-fifi-pic"
                    />
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>

        <div className="sala-gray-back">
          <div className="container">
            <center>
              <h2 className="">Download the app now!</h2>
              <div>
                <p>
                  Part of the Internet-For-All initiative, KOOMPI Fi-Fi is a
                  school internet infrastructure provided by KOOMPI with fast
                  fiber internet where students & teachers only pay as little as
                  1.25$ per month per user, up to two devices.{" "}
                </p>
                <Button size="large" type="primary" className="btn-explore">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.koompi.hotspot"
                    target="_blank"
                  >
                    Play Store
                  </a>
                </Button>
              </div>

              <img
                className="fifi-img"
                src={fifi}
                alt="koompi fifi mobile app"
              />
            </center>
          </div>
        </div>

        <div className="background-locations">
          <div className="container">
            <center>
              <h2 className="fifi-title">Available Fi-Fi Location</h2>
              <p>
                The first school to be connected to KOOMPI Fi-Fi is Saang High
                School. We hope to connect more schools to KOOMPI Fi-Fi in
                future.
              </p>
              <div className="map-container">
                <img src={map} alt="maps" className=" map" />
              </div>
            </center>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Fifi;
