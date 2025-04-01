import React from "react";
import "../styles/project.css";

function SingleProject(props) {
  const { image } = props;

  return (
    <>
      <div className="project-main">
        <div className="project-name-date">
          <div>project name</div>
          <div>project date</div>
        </div>
        <div className="project-image">
          <img className="image" src={image} />
        </div>
      </div>
    </>
  );
}

export default SingleProject;
