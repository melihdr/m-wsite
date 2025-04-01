import React from "react";
import SingleProject from "./SingleProject";
import three_js_image from "/images/threejs.png";
import physics_image_1 from "/images/physics.jpg";
import physics_image_2 from "/images/physics2.jpg";
import physics_image_3 from "/images/physics3.jpg";

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
