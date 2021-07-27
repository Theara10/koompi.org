import React from "react";
import { Row, Col } from "antd";
import blogs from "../api/blogs.json";

function BlogCard() {
  return (
    <React.Fragment>
      <Row gutter={[12, 12]}>
        {blogs.map((res) => {
          return (
            <Col xs={12} sm={12} md={8} lg={6} xl={6} xxl={6}>
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
