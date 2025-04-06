import React from "react";
import SingleProject from "./SingleProject";
import physics_image_1 from "/images/physics.jpg";
import solar_system_image from "/images/home_page_projects_links/solar_system.png";

function HomePageProjects() {
  return (
    <div className="projects">
      <SingleProject
        name={"solar system"}
        date={"06.04.2025"}
        image={solar_system_image}
        link={"/solar_system"}
      />
      <SingleProject image={physics_image_1} link={"/projects"} />
      <SingleProject image={physics_image_1} link={"/projects"} />
      <SingleProject image={physics_image_1} link={"/projects"} />
    </div>
  );
}

export default HomePageProjects;
