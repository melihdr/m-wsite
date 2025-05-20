import React from "react";
import GameOfLife from "./GameOfLife";
import "./Cell.css";

function GameOfLifeRoot() {
  return (
    <>
      <div className="game_of_life_all">
        <div className="game_of_life_inner">
          <div className="game_of_life_title">game of life</div>
          <hr />
          <div className="game_of_life">
            <GameOfLife />
          </div>

          <div>but, what is the idea here?</div>
          <div>
            The Game of Life, created by mathematician John Conway, is a
            cellular automaton. It simulates the life and death of cells on a
            grid based on a few simple rules. Each cell can either be alive or
            dead, and the state of the grid changes over time in discrete steps
            called generations.
          </div>
          <div>rules of the game of life</div>
          <div>
            At each step (generation), the next state of a cell is determined by
            the number of live neighbors it has (up to 8 surrounding cells):
            Underpopulation: A live cell with fewer than 2 live neighbors dies.
            Survival: A live cell with 2 or 3 live neighbors stays alive.
            Overpopulation: A live cell with more than 3 live neighbors dies.
            Reproduction: A dead cell with exactly 3 live neighbors becomes
            alive. It’s a zero-player game — after the initial setup, the grid
            evolves automatically following the rules. The system can show
            complex patterns and behaviors despite the simple rules.
          </div>
        </div>
      </div>
    </>
  );
}

export default GameOfLifeRoot;
