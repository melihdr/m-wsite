import React from "react";
import "../styles/project.css";
import { useNavigate } from "react-router-dom";
import "../index.css";

function SingleProject(props) {
  const { image, link, name = "project name", date = "project date" } = props;

  const navigate = useNavigate();

  const handleGoToProjects = () => {
    navigate(`${link}`);
  };

  return (
    <>
      <div style={{ width: "25%" }}>
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
            <div className="project-name">
              <div>{name}</div>
            </div>
            <div className="project-image">
              <img
                style={{ width: "100%", height: "10vw" }}
                className="home-page-projects-images"
                src={image}
              />
            </div>
          </div>
        </button>
      </div>
    </>
  );
}

export default SingleProject;
