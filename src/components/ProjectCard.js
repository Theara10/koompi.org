import { Col, Row, Button } from "antd";
import React from "react";
import data from "../api/project.json";
import { Link } from "react-router-dom";

function ProjectCard() {
  return (
    <React.Fragment>
      <div className="project-cards">
        {data.map((project, index) => {
          if (index % 2 === 0) {
            return (
              <div className="project-section">
                <Row gutter={[24, 24]} className="left-img">
                  <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                    <img
                      src={project.image}
                      className="img-responsive img-project"
                      alt={project.title}
                    />
                  </Col>
                  <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                    <div className="card-title-container">
                      <Row gutter={[12, 12]}>
                        <Col>
                          <img
                            src={project.logo}
                            height="50px"
                            alt="koompi"
                            className="project-logo"
                          />
                        </Col>
                        <Col>
                          <p className="card-subtitle">{project.subtitle}</p>
                          <h2 className="card-title">{project.title}</h2>
                        </Col>
                      </Row>
                    </div>

                    <div className="projects-card-container-bottom">
                      <p className="card-description">{project.desc}</p>
                    </div>
                    <Link to={project.link}>
                      <Button className="project-learn-more">Learn More</Button>
                    </Link>
                  </Col>
                </Row>
              </div>
            );
          } else {
            return (
              <Row gutter={[24, 24]}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                  <div className="card-title-container">
                    <Row gutter={[12, 12]}>
                      <Col>
                        <img
                          src={project.logo}
                          height="50px"
                          alt="koompi"
                          className="project-logo"
                        />
                      </Col>
                      <Col>
                        <p className="card-subtitle">{project.subtitle}</p>
                        <h2 className="card-title">{project.title}</h2>
                      </Col>
                    </Row>
                  </div>

                  <div className="projects-card-container-bottom">
                    <p className="card-description">{project.desc}</p>
                  </div>

                  <Link to={project.link}>
                    <Button className="project-learn-more">Learn More</Button>
                  </Link>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                  <img
                    src={project.image}
                    className="img-responsive img-project"
                    alt={project.title}
                  />
                </Col>
              </Row>
            );
          }
        })}
      </div>
      <div className="project-cards-mobile">
        {data.map((project, index) => {
          return (
            <React.Fragment>
              <div className="project-section">
                <Row gutter={[24, 24]} className="left-img">
                  <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                    <img
                      src={project.image}
                      className="img-responsive img-project"
                      alt={project.title}
                    />
                  </Col>
                  <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                    <div className="card-title-container">
                      <Row gutter={[12, 12]}>
                        <Col>
                          <img
                            src={project.logo}
                            height="50px"
                            alt="koompi"
                            className="project-logo"
                          />
                        </Col>
                        <Col>
                          <p className="card-subtitle">{project.subtitle}</p>
                          <h2 className="card-title">{project.title}</h2>
                        </Col>
                      </Row>
                    </div>

                    <div className="projects-card-container-bottom">
                      <p className="card-description">{project.desc}</p>
                    </div>
                    <Link to={project.link}>
                      <Button className="project-learn-more">Learn More</Button>
                    </Link>
                  </Col>
                </Row>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default ProjectCard;
