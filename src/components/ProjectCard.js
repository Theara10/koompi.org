import React from "react";
import { Link } from "react-router-dom";

function ProjectCard(props) {
  return (
    <div className="project-cards">
      <div className="projects-card-container-top" lin>
        <a href={props.link}>
          <img src={props.img} className="projects-img" />
        </a>
        <div className="card-title-container">
          <p className="card-subtitle">{props.subtitle}</p>
          <h2 className="card-title">{props.title}</h2>
        </div>
      </div>

      <div className="projects-card-container-bottom">
        <p className="card-description">{props.description}</p>
        <p style={{ color: "#38a7c8" }}>
          <a href={props.link}>Read More..</a>
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
