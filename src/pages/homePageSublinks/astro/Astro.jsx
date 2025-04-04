import React, { useEffect, useState } from "react";
import "../astro/astro.css";

function Astro() {
  const [data, setData] = useState(null);

  const apiKey = import.meta.env.VITE_NASA_API_KEY;

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((error) => console.error("api error", error));
  }, [apiKey]);

  if (!data) return <p>loading...</p>;

  const { copyright, date, explanation, hdurl, title, url } = data;

  return (
    <>
      <div className="homeBody">
        <div className="astroTitle">
          <div className="astroTitle-text">Hello Astronaut!</div>
          <hr />
        </div>

        <div className="astroGrid">
          <div className="astroTitleExplanation">
            <div className="astroTitle-title">{title}</div>
            <div>{explanation}</div>
          </div>
          <div className="astroImageDiv">
            <img className="astroImage" src={url} alt={title} />
          </div>
          <div className="astroBottom">
            <div>
              taken by: {copyright}, {date}
            </div>
            <a className="aSeeImage" href={hdurl}>
              see the image hd
            </a>
            <div>
              the image and information above are provided by{" "}
              <span>
                <a
                  className="aNasaApi"
                  target="_blank"
                  href="https://api.nasa.gov"
                >
                  nasa open api
                </a>{" "}
                and is renewed every day.
              </span>
            </div>
            <a className="aGoHome" href="/">
              go home
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Astro;
