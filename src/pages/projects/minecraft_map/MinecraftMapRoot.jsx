import React from "react";
import MinecraftMap from "./MinecraftMap";
import "./minecraft_map.css";

function MinecraftMapRoot() {
  return (
    <div>
      <div className="minecraft_map_inline">
        <div className="minecraft_map_title">minecraft map</div>
        <hr />
        <div className="minecraft_map">
          <MinecraftMap />
        </div>
        <div className="minecraft_map_subtitle_div">
          <div className="minecraft_map_subtitle">
            but, how it actually works?
          </div>
          <div>
            This is a small project I built to simulate a Minecraft-style map
            using React and the HTML5 canvas. It generates a grid of blocks —
            such as grass, water, sand, forest, and mountains — arranged to look
            like a natural landscape. Each time you click the "Generate New Map"
            button, it creates a brand new world using{" "}
            <a
              className="minecraft_map_link"
              href="https://en.wikipedia.org/wiki/Perlin_noise"
            >
              Perlin noise
            </a>
            , a type of smooth randomness often used in games to simulate
            natural terrain. The canvas automatically adjusts to different
            screen sizes, so it works well on both computers and smaller
            devices. I made this project to explore how simple math, visual
            rendering, and programming can come together to create something
            interactive and fun. Even though it's a lightweight simulation, it
            taught me a lot about procedural generation and building visual
            tools with code.
          </div>
          <div>
            <a className="minecraft_map_link" href="/">
              [go home]
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MinecraftMapRoot;
