import React, { useState, useEffect, useRef } from "react";
import "./langtons_ant.css";

const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

const getGridSize = () => {
  const width = window.innerWidth;
  return width < 890 ? { rows: 30, cols: 30 } : { rows: 30, cols: 50 };
};

const generateEmptyGrid = (rows, cols) => {
  return Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => 0)
  );
};

const LangtonsAnt = () => {
  const [{ rows, cols }, setGridSize] = useState(getGridSize());
  const [grid, setGrid] = useState(() => generateEmptyGrid(rows, cols));
  const [antX, setAntX] = useState(Math.floor(cols / 2));
  const [antY, setAntY] = useState(Math.floor(rows / 2));
  const [direction, setDirection] = useState(0);
  const [running, setRunning] = useState(false);
  const runningRef = useRef(running);

  useEffect(() => {
    const handleResize = () => {
      const { rows: newRows, cols: newCols } = getGridSize();

      setGridSize({ rows: newRows, cols: newCols });
      setGrid(generateEmptyGrid(newRows, newCols));
      setAntX(Math.floor(newCols / 2));
      setAntY(Math.floor(newRows / 2));
      setDirection(0);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    runningRef.current = running;

    if (!running) return;

    const interval = setInterval(() => {
      setGrid((prevGrid) => {
        const newGrid = prevGrid.map((row) => [...row]);

        let x = antX;
        let y = antY;
        let dir = direction;

        if (newGrid[y][x] === 0) {
          dir = (dir + 1) % 4;
          newGrid[y][x] = 1;
        } else {
          dir = (dir + 3) % 4;
          newGrid[y][x] = 0;
        }

        const newX = (x + dx[dir] + cols) % cols;
        const newY = (y + dy[dir] + rows) % rows;

        setAntX(newX);
        setAntY(newY);
        setDirection(dir);

        return newGrid;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [running, antX, antY, direction, rows, cols]);

  const handleRestart = () => {
    setGrid(generateEmptyGrid(rows, cols));
    setAntX(Math.floor(cols / 2));
    setAntY(Math.floor(rows / 2));
    setDirection(0);
    setRunning(false);
  };

  return (
    <div className="langtons_ant_container">
      <div>
        <div className="buttons">
          <button
            className="langtons_ant_button"
            onClick={() => setRunning(!running)}
          >
            {running ? "[stop]" : "[start]"}
          </button>

          <button className="langtons_ant_button" onClick={handleRestart}>
            [restart]
          </button>

          <button
            className="langtons_ant_button"
            onClick={() => {
              setRunning(false);
              setGrid(generateEmptyGrid(rows, cols));
            }}
          >
            [clean up]
          </button>
        </div>

        <div className="langtons_ant_grid" style={{}}>
          {grid.map((row, y) =>
            row.map((cell, x) => {
              const isAnt = x === antX && y === antY;
              return (
                <div
                  key={`${y}-${x}`}
                  className="langtons_ant_cell"
                  style={{
                    backgroundColor: isAnt
                      ? "#780000"
                      : cell === 1
                      ? "black"
                      : "antiquewhite",
                  }}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default LangtonsAnt;
