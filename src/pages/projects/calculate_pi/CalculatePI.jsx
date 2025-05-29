import React, { useEffect, useRef, useState } from "react";

const CANVAS_SIZE = 500;
const MAX_DOTS = 100000;
const INTERVAL_MS = 10;

const MonteCarloPiAnimated = () => {
  const canvasRef = useRef(null);
  const [dotCount, setDotCount] = useState(0);
  const [insideCircle, setInsideCircle] = useState(0);
  const [piEstimate, setPiEstimate] = useState(0);
  const [difference, setDifference] = useState(Math.PI);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.arc(CANVAS_SIZE / 2, CANVAS_SIZE / 2, CANVAS_SIZE / 2, 0, Math.PI * 2);
    ctx.stroke();

    let count = 0;
    let inside = 0;

    const interval = setInterval(() => {
      if (count >= MAX_DOTS) {
        clearInterval(interval);
        return;
      }

      const x = Math.random() * CANVAS_SIZE;
      const y = Math.random() * CANVAS_SIZE;
      const dx = x - CANVAS_SIZE / 2;
      const dy = y - CANVAS_SIZE / 2;
      const distance = Math.sqrt(dx * dx + dy * dy);

      const isInside = distance < CANVAS_SIZE / 2;
      if (isInside) {
        inside++;
      }

      ctx.fillStyle = "white";
      ctx.fillRect(x, y, 1, 1);

      count++;
      const pi = (4 * inside) / count;

      setDotCount(count);
      setInsideCircle(inside);
      setPiEstimate(pi);
      setDifference(Math.abs(Math.PI - pi));
    }, INTERVAL_MS);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        color: "white",
        background: "black",
        padding: 20,
      }}
    >
      <canvas
        ref={canvasRef}
        width={CANVAS_SIZE}
        height={CANVAS_SIZE}
        style={{ border: "2px solid red", display: "block", margin: "0 auto" }}
      />
      <p>Dot count: {dotCount}</p>
      <p>Estimated PI: {piEstimate.toFixed(15)}</p>
      <p>Difference from real PI: {difference.toFixed(15)}</p>
    </div>
  );
};

export default MonteCarloPiAnimated;
