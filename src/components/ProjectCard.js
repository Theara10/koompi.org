import { Col, Row, Button } from 'antd';
import React from 'react';
import data from '../api/project.json';
function ProjectCard(props) {
  return (
    <div className="project-cards">
      {data.map((project, index) => {
        if (index % 2 === 0) {
          return (
            <div className="project-section">
              <Row gutter={[80, 80]}>
                <Col span={12}>
                  <img
                    src="/images/sala.png"
                    className="img-responsive img-project"
                    alt={props.title}
                  />
                </Col>
                <Col span={12}>
                  <div className="card-title-container">
                    <Row gutter={[12, 12]}>
                      <Col>
                        <img
                          src="/images/logo.svg"
                          height="50px"
                          alt="koompi"
                          className="project-logo"
                        />
                      </Col>
                      <Col>
                        <p className="card-subtitle">{props.subtitle}</p>
                        <h2 className="card-title">{props.title}</h2>
                      </Col>
                    </Row>
                  </div>

                  <div className="projects-card-container-bottom">
                    <p className="card-description">{props.description}</p>
                  </div>

                  <Button className="project-learn-more">Learn More</Button>
                </Col>
              </Row>
            </div>
          );
        } else {
          return (
            <Row gutter={[80, 80]}>
              <Col span={12}>
                <div className="card-title-container">
                  <Row gutter={[12, 12]}>
                    <Col>
                      <img
                        src="/images/logo.svg"
                        height="50px"
                        alt="koompi"
                        className="project-logo"
                      />
                    </Col>
                    <Col>
                      <p className="card-subtitle">{props.subtitle}</p>
                      <h2 className="card-title">{props.title}</h2>
                    </Col>
                  </Row>
                </div>

                <div className="projects-card-container-bottom">
                  <p className="card-description">{props.description}</p>
                </div>

                <Button className="project-learn-more">Learn More</Button>
              </Col>
              <Col span={12}>
                <img
                  src="/images/sala.png"
                  className="img-responsive img-project"
                  alt={props.title}
                />
              </Col>
            </Row>
          );
        }
      })}
    </div>
  );
}

export default ProjectCard;
