import { Col, Row } from 'antd';
import React from 'react';

function ProjectCard(props) {
  return (
    <div className="project-cards">
      <div>
        <img
          src="/images/sala.png"
          className="img-responsive img-project"
          alt={props.title}
        />
      </div>
      <div className="card-title-container">
        <Row gutter={[12, 12]}>
          <Col>
            <img
              src="/images/logo.svg"
              height="40px"
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
    </div>
  );
}

export default ProjectCard;
