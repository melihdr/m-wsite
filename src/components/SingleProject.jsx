import React from "react";
import "../styles/project.css";
import { useNavigate } from "react-router-dom";

function SingleProject(props) {
  const { image, link, name = "project name", date = "project date" } = props;

  const navigate = useNavigate();

  const handleGoToProjects = () => {
    navigate(`${link}`);
  };

  return (
    <>
      <button
        style={{
          background: "transparent",
          border: "none",
          padding: "0",
          margin: "0",
          cursor: "pointer",
          fontFamily: "JetBrains",
          color: "black",
        }}
        onClick={handleGoToProjects}
      >
        <div className="project-main">
          <div className="project-name-date">
            <div>{name}</div>
            <div>{date}</div>
          </div>
          <div className="project-image">
            <img className="home-page-projects-images" src={image} />
          </div>
        </div>
      </button>
    </>
  );
}

export default SingleProject;
