import React, { useEffect, useState } from "react";

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

  console.log(data);

  return (
    <>
      <div>
        <div>{title}</div>
        <div>{explanation}</div>
        <img src={url} alt={title} />
        <div>
          {copyright}, {date}
        </div>
        <a style={{ display: "block" }} href={hdurl}>
          see the image hd
        </a>
        <a href="/">go home</a>
      </div>
    </>
  );
}

export default Astro;
