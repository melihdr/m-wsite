import React from "react";
import Epicycle from "./Epicycle";

function EpicycleRoot() {
  return (
    <div className="epicycle_root">
      <div className="epicylce_inline">
        <div className="epicycle_title">epicycle</div>
        <hr />
        <div className="epicycle_div">
          <Epicycle />
        </div>
        <div className="epicycle_subtitle_div">
          <div className="epicycle_subtitle">but, what is the idea here?</div>
          <div>
            An{" "}
            <a
              className="epicycle_link"
              href="https://en.wikipedia.org/wiki/Deferent_and_epicycle"
              target="_blank"
            >
              epicycle
            </a>{" "}
            is a small circle whose center moves along the edge of a larger
            circle, known as the deferent. This idea was originally used in
            ancient astronomy to explain the complex motion of planets in the
            sky, especially their apparent backward motion, known as retrograde
            motion.
          </div>
          <div>
            In a modern mathematical or artistic context, epicycles can
            represent complex periodic motion by combining multiple rotating
            circles. Each additional epicycle adds detail to the overall path,
            and with enough of them, even very complex shapes can be drawn —
            like a hand-drawn sketch recreated from circles alone.
          </div>
          <div>
            Epicycles are often visualized using rotating vectors or complex
            numbers in{" "}
            <a
              className="epicycle_link"
              href="https://en.wikipedia.org/wiki/Fourier_series"
              target="_blank"
            >
              Fourier series
            </a>
            , making them a powerful tool for understanding waveforms and
            animations.
          </div>
          <div>
            <a className="epicycle_link" href="/">
              [go home]
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EpicycleRoot;
