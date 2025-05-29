import React, { useRef, useEffect, useState } from "react";
import "./epicycle.css";

function Epicycle() {
  const canvasRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [canvasWidth, setCanvasWidth] = useState(
    window.innerWidth < 890 ? 275 : 550
  );
  const [canvasHeight, setCanvasHeight] = useState(
    window.innerWidth < 890 ? 275 : 550
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setCanvasWidth(window.innerWidth < 890 ? 275 : 550);
      setCanvasHeight(window.innerWidth < 890 ? 275 : 550);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const CENTER_X = canvas.width / 2;
    const CENTER_Y = canvas.height / 2;

    const R = windowWidth < 890 ? 100 : 200;
    const r = windowWidth < 890 ? 25 : 50;
    const n = 10;

    let angle = 0;
    const path = [];

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const x1 = CENTER_X + R * Math.cos(angle);
      const y1 = CENTER_Y + R * Math.sin(angle);

      const x = x1 + r * Math.cos(n * angle);
      const y = y1 + r * Math.sin(n * angle);

      path.push({ x, y });

      ctx.beginPath();
      ctx.arc(CENTER_X, CENTER_Y, R, 0, 2 * Math.PI);
      ctx.strokeStyle = "#888";
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(x1, y1, r, 0, 2 * Math.PI);
      ctx.strokeStyle = "#99f";
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(x1, y1, 3, 0, 2 * Math.PI);
      ctx.fillStyle = "blue";
      ctx.fill();

      ctx.beginPath();
      ctx.arc(x, y, 3, 0, 2 * Math.PI);
      ctx.fillStyle = "red";
      ctx.fill();

      ctx.beginPath();
      for (let i = 0; i < path.length - 1; i++) {
        ctx.moveTo(path[i].x, path[i].y);
        ctx.lineTo(path[i + 1].x, path[i + 1].y);
      }
      ctx.strokeStyle = "black";
      ctx.stroke();

      angle += 0.01;
      requestAnimationFrame(draw);
    }

    draw();
  }, [canvasWidth]);

  return (
    <canvas
      className="epicycle_canvas"
      ref={canvasRef}
      width={canvasWidth}
      height={canvasHeight}
    />
  );
}

export default Epicycle;
