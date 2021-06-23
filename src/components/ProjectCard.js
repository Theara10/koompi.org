import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

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
        <a href={props.link} className="more">
          Read More..
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
