import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
// import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <div className="project-content">
        <h1> {project.name}</h1>
        <h3>{project.org}</h3>
        {/* <img src={project.image} /> */}
        <p><b>Skills:</b> {project.skills}</p>
        <p>{project.descr}</p>
        {/* <GitHubIcon /> */}
      </div>
    </div>
  );
}

export default ProjectDisplay;
