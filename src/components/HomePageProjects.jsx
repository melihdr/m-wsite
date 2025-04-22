import React from "react";
import SingleProject from "./SingleProject";
import physics_image_1 from "/images/physics.jpg";
import solar_system from "/images/home_page_projects/solar_system.png";
import caesar_cipher from "/images/home_page_projects/caesar_cipher.png";
import vigenere_cipher from "/images/home_page_projects/vigenere_cipher.png";

function HomePageProjects() {
  return (
    <div className="projects">
      <SingleProject
        name={"solar system"}
        date={"06.04.2025"}
        image={solar_system}
        link={"/solar_system"}
      />
      <SingleProject
        name={"caesar cipher"}
        date={"21.04.2025"}
        image={caesar_cipher}
        link={"/caesar_cipher"}
      />
      <SingleProject
        name={"vigenère  cipher"}
        date={"22.04.2025"}
        image={vigenere_cipher}
        link={"/vigenere_cipher"}
      />
      <SingleProject image={physics_image_1} link={"/projects"} />
    </div>
  );
}

export default HomePageProjects;
