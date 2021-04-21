import React from "react";
import "./Fifi.css";
import { Row, Col, Button } from "antd";
import {
  ClockCircleOutlined,
  GlobalOutlined,
  WifiOutlined,
} from "@ant-design/icons";
import { TileLayer, MapContainer as LeafletMap } from "react-leaflet";

function Fifi() {
  return (
    <div>
      <div className="fifi-intro">
        <Row>
          <Col span={12}>
            <div>
              <h2 className="fifi-title">
                Affordable And Convenient WIFI For All
              </h2>
              <p>
                Part of the Internet-For-All initiative, KOOMPI Fi-Fi is a
                school internet infrastructure provided by KOOMPI with fast
                fiber internet where students & teachers only pay as little as
                1.25$ per month per user, up to two devices. Data is unlimited
                with speed between 60 Mps-300 Mps depending on number of devices
                connected.
              </p>
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
        <h2 className="fifi-title">Features</h2>
        <Row>
          <Col span={8}>
            <div className="feature-card">
              <img
                src="https://lelogama.go-jek.com/prime/upload/image/be_fast.png"
                width="auto"
                height="100"
                className="card-feature-img"
              />
              <div className="card-feature-bottom">
                <h2>KOOMPI FIFI</h2>
                <p className="feature-card-description">
                  Part of the Internet-For-All initiative, KOOMPI Fi-Fi is a
                  school internet infrastructure
                </p>
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div className="feature-card">
              <img
                src="https://lelogama.go-jek.com/prime/upload/image/shoot_for_greatness.png"
                width="auto"
                height="100"
              />
              <div className="card-feature-bottom">
                <h2>KOOMPI FIFI</h2>
                <p className="feature-card-description">
                  Part of the Internet-For-All initiative, KOOMPI Fi-Fi is a
                  school internet infrastructure
                </p>
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div className="feature-card">
              <img
                src="https://lelogama.go-jek.com/prime/upload/image/shoot_for_greatness.png"
                width="auto"
                height="100"
              />
              <div className="card-feature-bottom">
                <h2>KOOMPI FIFI</h2>
                <p className="feature-card-description">
                  Part of the Internet-For-All initiative, KOOMPI Fi-Fi is a
                  school internet infrastructure
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div className="fifi-application">
        <h2 className="fifi-title">Download App</h2>
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
