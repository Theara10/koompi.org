import React from "react";

function ProjectCard(props) {
  return (
    <div className="document-category">
      <div className="projects-card-container-top">
        <img src={props.img} className="projects-img" />
        <div className="card-title-container">
          <p className="card-subtitle">{props.subtitle}</p>
          <h2 className="card-title">{props.title}</h2>
        </div>
      </div>
      <div className="projects-card-container-bottom">
        <p>{props.description}</p>
        <p style={{ color: "#38a7c8" }}>Read more..</p>
      </div>
    </div>
  );
}

export default ProjectCard;
