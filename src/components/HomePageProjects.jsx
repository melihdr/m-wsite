import React from "react";
import SingleProject from "./SingleProject";
import solar_system from "/images/home_page_projects/solar_system.png";
import caesar_cipher from "/images/home_page_projects/caesar_cipher.png";
import vigenere_cipher from "/images/home_page_projects/vigenere_cipher.png";
import rsa_encryption from "/images/home_page_projects/rsa_encryption.png";
import minecraft_map from "/images/home_page_projects/minecraft_map.png";
import langtons_ant from "/images/home_page_projects/langtons_ant.png";

function HomePageProjects() {
  return (
    <div
      className="projects"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <SingleProject
        name={"solar system"}
        image={solar_system}
        link={"/solar_system"}
      />
      <SingleProject
        name={"langton's ant"}
        image={langtons_ant}
        link={"/caesar_cipher"}
      />
      <SingleProject
        name={"vigenère  cipher"}
        image={vigenere_cipher}
        link={"/vigenere_cipher"}
      />
      <SingleProject
        name={"minecraft map"}
        image={minecraft_map}
        link={"/rsa"}
      />
    </div>
  );
}

export default HomePageProjects;
