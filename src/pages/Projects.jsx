import React from "react";
import "../styles/projects_page.css";
import SingleProjectPage from "./SingleProjectPage";

function Projects(name) {
  return (
    <>
      <div className="projects_page">
        <div className="projects_page_inline">
          <SingleProjectPage name={"asd"} />
          <SingleProjectPage name={"qwe"} />
          <SingleProjectPage name={"zxc"} />
          <SingleProjectPage name={"cvb"} />
          <SingleProjectPage name={"jkl"} />
          <SingleProjectPage name={"jkl"} />
        </div>
      </div>
    </>
  );
}

export default Projects;
