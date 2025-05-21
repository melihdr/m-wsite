import React, { useEffect, useRef, useState } from "react";

const N = 8;
const CELL_SIZE = 80;

function Board() {
  const canvasRef = useRef(null);
  const [board, setBoard] = useState(
    Array(N)
      .fill()
      .map(() => Array(N).fill(-1))
  );
  const [start, setStart] = useState(null);

  useEffect(() => {
    drawBoard(board);
  }, [board]);

  const drawBoard = (board) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    for (let row = 0; row < N; row++) {
      for (let col = 0; col < N; col++) {
        const x = col * CELL_SIZE;
        const y = row * CELL_SIZE;

        ctx.fillStyle = (row + col) % 2 === 0 ? "#ffffff" : "#aaaaaa";
        ctx.fillRect(x, y, CELL_SIZE, CELL_SIZE);

        if (board[row][col] !== -1) {
          ctx.fillStyle = "#6495ed";
          ctx.fillRect(x, y, CELL_SIZE, CELL_SIZE);
          ctx.fillStyle = "black";
          ctx.font = "24px Arial";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(board[row][col], x + CELL_SIZE / 2, y + CELL_SIZE / 2);
        }
      }
    }

    if (start) {
      const [sx, sy] = start;
      ctx.strokeStyle = "green";
      ctx.lineWidth = 4;
      ctx.strokeReact(sy * CELL_SIZE, sx * CELL_SIZE, CELL_SIZE, CELL_SIZE);
    }
  };

  const handleClick = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = Math.floor((e.clientX - rect.left) / CELL_SIZE);
    const y = Math.floor((e.clientY - rect.top) / CELL_SIZE);
    setBoard([y, x]);
    const newBoard = Array(N)
      .fill()
      .map(() => Array(N).fill(-1));
    solve(newBoard, y, x, 0);
  };

  const moves = [
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
  ];

  const isValid = (x, y, board) => {
    return x >= 0 && x < N && y >= 0 && y < N && board[x][y] === -1;
  };

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const solve = async (board, x, y, step) => {
    board[x][y] = step;
    setBoard;
  };

  return (
    <>
      <canvas
        style={{
          display: "block",
          margin: "0",
          padding: "0",
          border: "none",
        }}
        ref={canvasRef}
        width={N * CELL_SIZE}
        height={N * CELL_SIZE}
        onClick={handleClick}
      ></canvas>
    </>
  );
}

export default Board;
