import { Row, Col, Card } from "antd";
import React from "react";
import "./Blog.css";

function Blog() {
  return (
    <div className="blog">
      <h1>News and Event</h1>
      <Row gutter={22}>
        <Col span={8}>
          <Card
            cover={
              <img
                alt="example"
                src="https://img-getpocket.cdn.mozilla.net/direct?url=https%3A%2F%2Fwww.protocol.com%2Fmedia-library%2FeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yNTg5Mzk4MS9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTY2NTA0NjU4N30.wc3XeEUZRqtc7YJrQT0MSbpPlUanDP78iW-oQD1zcqc%2Fimage.jpg%3Fwidth%3D1200%26coordinates%3D0%252C0%252C0%252C341%26height%3D600&resize=w450"
              />
            }
          >
            <p className="recentnews-date">18th Feb 2021</p>
            <h2>
              Collaborating with PEPY’s Youth Innovators Space and Incubators
              (YISI)
            </h2>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            cover={
              <img
                alt="example"
                src="https://miro.medium.com/max/1400/1*8y-bTJLxH6sudQ-nIFMfqg.jpeg"
              />
            }
          >
            <p className="recentnews-date">18th Feb 2021</p>
            <h2>Mozilla leads push for FCC to reinstate net neutrality</h2>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            cover={
              <img
                alt="example"
                src="https://cdn-images-1.medium.com/max/1024/1*q_Tv0sTdMKnMmhN7JnVVHA.jpeg"
              />
            }
          >
            <p className="recentnews-date">18th Feb 2021</p>
            <h2>
              Mozilla leads push for FCC to reinstate net neutrality. I'm
              Batman.
            </h2>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Blog;
