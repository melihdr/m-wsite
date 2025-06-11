import React from "react";
import SingleProject from "./SingleProject";
import solar_system from "/images/home_page_projects/solar_system.png";
import caesar_cipher from "/images/home_page_projects/caesar_cipher.png";
import vigenere_cipher from "/images/home_page_projects/vigenere_cipher.png";
import rsa_encryption from "/images/home_page_projects/rsa_encryption.png";

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
      <SingleProject
        name={"rsa encryption"}
        date={"25.04.2025"}
        image={rsa_encryption}
        link={"/rsa"}
      />
    </div>
  );
}

export default HomePageProjects;
