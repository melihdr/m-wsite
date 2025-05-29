import React, { useRef, useState, useEffect } from "react";

const grayToAscii = (gray) => {
  const chars = "@%#*+=-:. ";
  const index = Math.floor((gray / 255) * (chars.length - 1));
  return chars[index];
};

const AsciiVideo = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [asciiFrame, setAsciiFrame] = useState("");

  const drawAscii = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const video = videoRef.current;

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

    let ascii = "";
    for (let y = 0; y < canvas.height; y += 8) {
      for (let x = 0; x < canvas.width; x += 4) {
        const idx = (y * canvas.width + x) * 4;
        const r = imgData[idx];
        const g = imgData[idx + 1];
        const b = imgData[idx + 2];
        const gray = (r + g + b) / 3;
        ascii += grayToAscii(gray);
      }
      ascii += "\n";
    }

    setAsciiFrame(ascii);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const video = videoRef.current;
      if (!video.paused && !video.ended) {
        drawAscii();
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <video
        ref={videoRef}
        src="/video.mp4"
        width="160"
        autoPlay
        muted
        loop
        style={{ display: "none" }}
      />
      <canvas
        ref={canvasRef}
        width={120}
        height={90}
        style={{ display: "none" }}
      />

      <pre
        style={{
          fontFamily: "monospace",
          fontSize: "8px",
          lineHeight: "8px",
          color: "lime",
          backgroundColor: "black",
          whiteSpace: "pre",
          padding: "10px",
        }}
      >
        {asciiFrame || "Loading..."}
      </pre>
    </div>
  );
};

export default AsciiVideo;
