import React from "react";
import "../styles/projects_page.css";
import SingleProjectPage from "./SingleProjectPage";

function Projects(name) {
  return (
    <>
      <div className="projects_page">
        <div className="projects_page_in">
          <div className="my_all_projects_title">my all projects</div>
          <hr />
          <div className="projects_page_inline">
            <SingleProjectPage name={"[solar system]"} link={"/solar_system"} />
            <SingleProjectPage
              name={"[caesar cipher]"}
              link={"/caesar_cipher"}
            />
            <SingleProjectPage
              name={"[vigenere cipher]"}
              link={"/vigenere_cipher"}
            />
            <SingleProjectPage name={"[rsa encryption]"} link={"/rsa"} />
            <SingleProjectPage name={"[game of life]"} link={"/game_of_life"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
