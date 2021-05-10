import React from "react";
import "./Fifi.css";
import { Row, Col, Button } from "antd";
import { TileLayer, MapContainer as LeafletMap } from "react-leaflet";

function Fifi() {
  return (
    <div className="fifi">
      <div className="fifi-intro">
        <Row>
          <Col span={12}>
            <div>
              <h1 className="fifi-title">
                Anakin Skywalker Was Weak. I Destroyed Him
              </h1>
              <p style={{ paddingTop: 20, fontSize: 24 }}>
                Part of the Internet-For-All initiative,
                <br /> KOOMPI Fi-Fi is a school internet <br />
                infrastructure provided by KOOMPI
              </p>
              <div style={{ paddingTop: 20 }}>
                <img
                  src="https://www.mozilla.org/media/img/l10n/en-US/firefox/android/btn-google-play-high-res.87d9720bbc8b.png"
                  height="40"
                  width="auto"
                />
                <img
                  src="https://www.mozilla.org/media/img/l10n/en-US/firefox/ios/btn-app-store.1cfd5dba4a92.svg"
                  height="40"
                  width="auto"
                  style={{ paddingLeft: 10 }}
                />
              </div>
            </div>
          </Col>
          <Col span={12}>
            <img
              src="https://koompi.com/assets/images/koompi-fifi/FiFiMobileApp.png"
              width="auto"
              height="500"
            />
          </Col>
        </Row>
      </div>

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
                <h2
                  style={{ fontSize: 28, fontWeight: "bold", marginBottom: 0 }}
                >
                  Feature 1
                </h2>
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
                <h2
                  style={{ fontSize: 28, fontWeight: "bold", marginBottom: 0 }}
                >
                  Feature 3
                </h2>
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
                <h2
                  style={{ fontSize: 28, fontWeight: "bold", marginBottom: 0 }}
                >
                  Feature 3
                </h2>
                <p>
                  The users who are exhausted with change an operating system
                  and desktop environments that are not available for all
                  resources they need.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className="feature-1">
        <Row>
          <Col span={10} offset={2}>
            <img
              src="https://koompi.com/assets/images/koompi-fifi/FiFiMobileApp.png"
              height="350"
              width="auto"
            />
          </Col>
          <Col span={12}>
            <h1 style={{ marginTop: 40, fontSize: 32, fontWeight: "bold" }}>
              Feature 1
            </h1>
            <p className="intro-description">
              All packages of the software are available
              <br /> for the latest version, <br />
              using pi and pix as a package manager.
            </p>
          </Col>
        </Row>
      </div>

      <div className="feature-2">
        <Row>
          <Col span={10} offset={2}>
            <h1 style={{ marginTop: 50, fontSize: 32, fontWeight: "bold" }}>
              Feature 2
            </h1>
            <p className="intro-description">
              All packages of the software are available for the <br />
              latest version, using pi and pix as a package manager.
            </p>
          </Col>
          <Col span={10} offset={2}>
            <img
              src="https://koompi.com/assets/images/koompi-fifi/FiFiMobileApp.png"
              height="350"
              width="auto"
            />
          </Col>
        </Row>
      </div>

      <div className="feature-1">
        <Row>
          <Col span={10} offset={2}>
            <img
              src="https://koompi.com/assets/images/koompi-fifi/FiFiMobileApp.png"
              height="350"
              width="auto"
            />
          </Col>
          <Col span={12}>
            <h1 style={{ marginTop: 40, fontSize: 32, fontWeight: "bold" }}>
              Feature 3
            </h1>
            <p className="intro-description">
              All packages of the software are available
              <br /> for the latest version, <br />
              using pi and pix as a package manager.
            </p>
          </Col>
        </Row>
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
          <img
            className="img"
            src="https://koompi.com/assets/images/koompi-fifi/MobileApp1.png"
          />
        </div>
      </div>

      <div className="map">
        <div className="map-top">
          <h2 className="fifi-title">Available FIFI Location</h2>
          <p>
            Part of the Internet-For-All initiative, KOOMPI Fi-Fi is a school
            internet infrastructure provided by KOOMPI with fast fiber internet
            where students & teachers only pay as little as 1.25$ per month per
            user, up to two devices.
          </p>
        </div>
        <div className="map-container">
          <LeafletMap center={[11.556374, 104.928207]} zoom={12}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
          </LeafletMap>
        </div>
      </div>
    </div>
  );
}

export default Fifi;
