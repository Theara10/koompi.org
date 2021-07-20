import React from "react";
import { Row, Col } from "antd";
import blogs from "../api/blogs.json";

function BlogCard() {
  return (
    <React.Fragment>
      <Row gutter={[24, 24]}>
        {blogs.map((res) => {
          return (
            <Col span={6}>
              <div className="news-events-section">
                <img
                  alt={res.title}
                  src={res.image}
                  className="img-responsive"
                />
                <div className="news-events-background">
                  <p className="recentnews-date">{res.date}</p>
                  <h2 className="news-event-title">{res.title}</h2>
                  <p className="blog-desc">{res.subtitle}</p>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </React.Fragment>
  );
}

export default BlogCard;
