import React, { useEffect, useState } from "react";
import { Row, Col, Card, Spin } from "antd";
// import blogs from "../api/blogs.json";
import axios from "axios";
import moment from "moment";
import { LazyLoadImage } from "react-lazy-load-image-component";

function BlogCard() {
  const [koompi, setKoompi] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/koompi"
      )
      .then((res) => {
        setKoompi(res.data.items);
      });
  }, []);
  return (
    <React.Fragment>
      {/* <Row gutter={[12, 12]}>
        {koompi.map((res) => {
          return (
            <Col xs={12} sm={12} md={8} lg={6} xl={6} xxl={6}>
              <div className="news-events-section">
                <a href={res.guid} target="_blank">
                  <img
                    alt={res.name}
                    src={res.thumbnail}
                    className="img-responsive"
                  />
                  <div className="news-events-background">
                    <p className="recentnews-date">
                      {moment(res.pubDate).format("Do MMMM YYYY")}
                    </p>
                    <h2 className="news-event-title">{res.title}</h2>
                    <p className="blog-desc">{res.description}</p>
                  </div>
                </a>
              </div>
            </Col>
          );
        })}
      </Row> */}

      <div>
        {koompi.length === 0 ? (
          <center>
            <Spin tip="Loading ..."></Spin>
          </center>
        ) : (
          <Row gutter={[16, 16]}>
            {koompi.map((koompi) => {
              console.log(koompi);
              return (
                <React.Fragment>
                  <Col
                    xs={12}
                    sm={12}
                    md={8}
                    lg={6}
                    xl={6}
                    xxl={6}
                    key={koompi.guid}
                  >
                    <a href={koompi.guid} target="_blank">
                      <Card
                        className="card-news"
                        hoverable
                        cover={
                          <LazyLoadImage
                            effect="blur"
                            alt={koompi.name}
                            src={koompi.thumbnail}
                            className=" img-responsive img-card-news"
                          />
                        }
                      >
                        <div className="recentnews-date">
                          {moment(koompi.pubDate).format("Do MMMM YYYY")} /
                          {koompi.author}
                        </div>
                        <h3 className="news-event-title">{koompi.title}</h3>
                      </Card>
                    </a>
                  </Col>
                </React.Fragment>
              );
            })}
          </Row>
        )}
      </div>
    </React.Fragment>
  );
}

export default BlogCard;
