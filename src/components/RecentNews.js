import React from 'react';
import { Row, Col, Card } from 'antd';

const { Meta } = Card;

function RecentNews() {
  return (
    <div className="">
      <Row>
        {/* <Col span={9}>
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
        </Col> */}

        <Col span={8}>
          <Card
            cover={
              <img
                alt="example"
                src="https://miro.medium.com/max/1400/1*2wGBfzUUCLvq4jmSBn_LXA.png"
              />
            }
          >
            <Meta
              title="SALA KOOMPI: your very own classroom"
              description="The SALA KOOMPI project, formally known as KOOMPI Academy, was initiated even before online learning became the norm. Seeing that students may lack access to learning resources"
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            cover={
              <img
                alt="example"
                src="https://miro.medium.com/max/1400/1*BrrH41gDcqqEzDl_sn4agQ.jpeg"
              />
            }
          >
            <Meta
              title="SALA KOOMPI: your very own classroom"
              description="The SALA KOOMPI project, formally known as KOOMPI Academy, was initiated even before online learning became the norm. Seeing that students may lack access to learning resources"
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            cover={
              <img
                alt="example"
                src="https://miro.medium.com/max/1400/1*Op9OU3VhzLAA3Hz_ux_pQw.jpeg"
              />
            }
          >
            <Meta
              title="SALA KOOMPI: your very own classroom"
              description="The SALA KOOMPI project, formally known as KOOMPI Academy, was initiated even before online learning became the norm. Seeing that students may lack access to learning resources"
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default RecentNews;
