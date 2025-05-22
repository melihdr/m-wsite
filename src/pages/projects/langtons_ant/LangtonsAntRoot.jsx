import React from "react";
import LangtonsAnt from "./LangtonsAnt";
import "./langtons_ant.css";

function LangtonsAntRoot() {
  return (
    <>
      <div className="langtons_ant_all">
        <div className="langtons_ant_inner">
          <div className="langtons_ant_title">langton's ant</div>
          <hr />
          <div>
            <LangtonsAnt />
          </div>
          <div className="langtons_ant_subtitle">
            but, what is the idea here?
          </div>
          <div>
            <a
              className="langtons_ant_link"
              href="https://en.wikipedia.org/wiki/Langton%27s_ant"
            >
              Langton's Ant
            </a>{" "}
            is a two-dimensional Turing machine devised by Chris Langton in
            1986. It operates on a grid of black and white cells, where a single
            ant follows a set of simple rules: when on a white cell, it turns 90
            degrees to the right, flips the color of the cell to black, and
            moves forward one unit; when on a black cell, it turns 90 degrees to
            the left, flips the cell to white, and also moves forward. Despite
            the simplicity of these rules, the ant's movement quickly becomes
            complex and seemingly chaotic. However, after a large number of
            steps—usually around 10,000—a surprising regularity emerges: the ant
            begins constructing a repeating "highway" pattern that continues
            infinitely. This behavior is a striking example of emergent
            complexity, where simple deterministic instructions give rise to
            unpredictable and structured global patterns. Interestingly,
            Langton's Ant is also Turing complete, meaning it is capable of
            performing any computation, given the right configuration and input.
          </div>
          <div>
            <a className="langtons_ant_link" href="/">
              [go home]
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default LangtonsAntRoot;
