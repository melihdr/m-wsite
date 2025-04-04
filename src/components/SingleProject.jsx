import React from "react";
import "../styles/project.css";
import { useNavigate } from "react-router-dom";

function SingleProject(props) {
  const { image } = props;

  const navigate = useNavigate();

  const handleGoToProjects = () => {
    navigate("/projects");
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
        }}
        onClick={handleGoToProjects}
      >
        <div className="project-main">
          <div className="project-name-date">
            <div>project name</div>
            <div>project date</div>
          </div>
          <div className="project-image">
            <img className="image" src={image} />
          </div>
        </div>
      </button>
    </>
  );
}

export default SingleProject;
