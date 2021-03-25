import React from "react";
import { Row, Col } from "antd";

function RecentNews() {
  return (
    <div className="recentnews-card">
      <Row>
        <Col span={9}>
          <img
            src="https://miro.medium.com/max/1400/1*gNZXI1l5-CwTvsY_ltHxEw.jpeg"
            height="300"
            width="350"
            object-fit="cover"
          />
        </Col>
        <Col span={15}>
          <div>
            <div className="tag">
              <p>NEWS</p>
            </div>
            <h2 className="recentnews-title">Linux commands and information</h2>
            <p className="recentnews-date">Oct 21, 2020</p>
            <p className="recentnews-description">
              This website is a one-stop platform that gathering the instruction
              installation, updating, FAQs, and problem-solving. You can learn
              more about the Linux commands and information.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default RecentNews;
