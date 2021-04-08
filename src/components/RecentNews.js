import React from "react";
import { Row, Col, Card } from "antd";

const { Meta } = Card;

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
          <div className="recentnews-card-right">
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
        {/* <Col span={8}>
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://miro.medium.com/max/1400/1*BrrH41gDcqqEzDl_sn4agQ.jpeg"
              />
            }
          >
            <Meta title="Card title" description="This is the description" />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
          >
            <Meta title="Card title" description="This is the description" />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
          >
            <Meta title="Card title" description="This is the description" />
          </Card>
        </Col> */}
      </Row>
    </div>
  );
}

export default RecentNews;
