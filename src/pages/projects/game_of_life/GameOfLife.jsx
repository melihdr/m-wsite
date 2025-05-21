import React, { useState, useCallback, useRef } from "react";
import "./Cell.css";

const numRows = 30;
const numCols = window.innerWidth > 890 ? 50 : 30;

let i = 0;

const operations = [
  [0, 1],
  [0, -1],
  [1, -1],
  [1, 0],
  [1, 1],
  [-1, -1],
  [-1, 0],
  [-1, 1],
];

const generateEmptyGrid = () => {
  return Array.from({ length: numRows }, () =>
    Array.from({ length: numCols }, () => 0)
  );
};

const computeNextGrid = (grid) => {
  const newGrid = grid.map((row) => [...row]);

  for (let y = 0; y < numRows; y++) {
    for (let x = 0; x < numCols; x++) {
      let neighbors = 0;

      operations.forEach(([dy, dx]) => {
        const newY = y + dy;
        const newX = x + dx;

        if (newY >= 0 && newY < numRows && newX >= 0 && newX < numCols) {
          neighbors += grid[newY][newX];
        }
      });

      if (grid[y][x] === 1) {
        newGrid[y][x] = neighbors === 2 || neighbors === 3 ? 1 : 0;
      } else {
        newGrid[y][x] = neighbors === 3 ? 1 : 0;
      }
    }
  }

  return newGrid;
};

const GameOfLife = () => {
  const [grid, setGrid] = useState(generateEmptyGrid());
  const [running, setRunning] = useState(false);
  const runningRef = useRef(running);
  runningRef.current = running;

  const runSimulation = useCallback(() => {
    if (!runningRef.current) return;

    setGrid((prev) => computeNextGrid(prev));
    setTimeout(runSimulation, 100);
  }, []);

  return (
    <>
      <div className="game_of_life_div">
        <div>
          <button
            className="game_of_life_button"
            onClick={() => {
              const newRunning = !running;
              setRunning(newRunning);
              runningRef.current = newRunning;
              if (newRunning) {
                runSimulation();
              }
            }}
          >
            {running ? "[stop]" : "[start]"}
          </button>

          <button
            className="game_of_life_clean_up_button"
            onClick={() => setGrid(generateEmptyGrid())}
          >
            [clean up]
          </button>
        </div>

        <div className="game_of_life_grid_div" style={{}}>
          {grid.map((row, y) =>
            row.map((col, x) => (
              <div
                key={`${y}-${x}`}
                className="cell"
                style={{
                  backgroundColor: grid[y][x] ? "#780000" : undefined,
                }}
                onClick={() => {
                  const newGrid = grid.map((row) => [...row]);
                  newGrid[y][x] = grid[y][x] ? 0 : 1;
                  setGrid(newGrid);
                }}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default GameOfLife;
