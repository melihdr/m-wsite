import React, { useRef, useEffect, useState } from "react";
import { makeNoise2D } from "open-simplex-noise";
import "./minecraft_map.css";

const BLOCK_SIZE = 4;
const MAP_WIDTH = 128;
const MAP_HEIGHT = 128;

const colors = {
  water: "#006994",
  sand: "#C2B280",
  grass: "#6ABE30",
  forest: "#228B22",
  mountain: "#646464",
};

const getBlockType = (val) => {
  if (val < -0.4) return "water";
  if (val < -0.3) return "sand";
  if (val < 0.3) return "grass";
  if (val < 0.45) return "forest";
  return "mountain";
};

const generateWorld = () => {
  const noise2D = makeNoise2D(Date.now());
  return Array.from({ length: MAP_HEIGHT }, (_, y) =>
    Array.from({ length: MAP_WIDTH }, (_, x) => {
      const nx = x / 25;
      const ny = y / 25;
      return noise2D(nx, ny);
    })
  );
};

const MinecraftMap = () => {
  const canvasRef = useRef(null);
  const [camera, setCamera] = useState({ x: 0, y: 0 });
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [world, setWorld] = useState(() => generateWorld());

  const SCREEN_WIDTH = windowWidth < 890 ? 320 : 512;
  const SCREEN_HEIGHT = SCREEN_WIDTH;

  const regenerateMap = () => {
    setWorld(generateWorld());
  };

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const draw = () => {
      const blocksX = SCREEN_WIDTH / BLOCK_SIZE;
      const blocksY = SCREEN_HEIGHT / BLOCK_SIZE;

      for (let y = 0; y < blocksY; y++) {
        for (let x = 0; x < blocksX; x++) {
          const worldX = camera.x + x;
          const worldY = camera.y + y;

          if (
            worldX >= 0 &&
            worldX < MAP_WIDTH &&
            worldY >= 0 &&
            worldY < MAP_HEIGHT
          ) {
            const val = world[worldY][worldX];
            const type = getBlockType(val);
            ctx.fillStyle = colors[type];
            ctx.fillRect(
              x * BLOCK_SIZE,
              y * BLOCK_SIZE,
              BLOCK_SIZE,
              BLOCK_SIZE
            );
          }
        }
      }
    };

    ctx.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
    draw();
  }, [camera, world, SCREEN_WIDTH]);

  return (
    <div className="minecraft_map_canvas_button">
      <div>
        <canvas
          className="minecraft_map_canvas"
          ref={canvasRef}
          width={SCREEN_WIDTH}
          height={SCREEN_HEIGHT}
        />
        <div className="minecraft_map_button_div">
          <div>
            <button className="minecraft_map_button" onClick={regenerateMap}>
              [create new map]
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinecraftMap;
