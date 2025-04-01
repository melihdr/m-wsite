import React from "react";
import SingleProject from "./SingleProject";
import physics_image_1 from "/images/physics.jpg";

function HomePageProjects() {
  return (
    <div className="projects">
      <SingleProject image={physics_image_1} />
      <SingleProject image={physics_image_1} />
      <SingleProject image={physics_image_1} />
      <SingleProject image={physics_image_1} />
    </div>
  );
}

export default HomePageProjects;
