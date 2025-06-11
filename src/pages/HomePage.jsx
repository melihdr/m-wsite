import React from "react";
import { useState, useEffect } from "react";
import anime_char_image from "/images/anime-char.png";
import { Canvas } from "@react-three/fiber";
import HomePageCube from "../components/HomePageCube";

function HomePage() {
  function getAstroImage() {
    const [data, setData] = useState(null);

    const apiKey = import.meta.env.VITE_NASA_API_KEY;

    useEffect(() => {
      fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
        .then((res) => res.json())
        .then((json) => setData(json))
        .catch((error) => console.error("api error", error));
    }, [apiKey]);

    if (!data) return <p>loading...</p>;

    return data.url;
  }

  const AstroImage = getAstroImage();
  return (
    <>
      <div>
        <div className="home-page-wrapper">
          {/* LEFT PART */}
          <div className="home-page-left-part">left</div>
          {/* END OF LEFT */}

          {/* MIDDLE PART */}
          <div className="home-page-middle-part">
            {/* MIDDLE PART LEFT */}
            <div className="home-page-middle-part-left">
              <div className="card">
                <div className="label">astro</div>
                <div className="card-content">
                  <div className="home-page-astro-image-div">
                    <img src={AstroImage} alt="astro_image" />
                  </div>
                  <div style={{ fontSize: "0.6rem" }}>see full</div>
                </div>
              </div>
            </div>

            {/* MIDDLE PART MIDDLE */}
            <div className="home-page-middle-part-middle">
              <div className="home-page-title">
                {`>>`}dreamspace by melih durmus
              </div>
              <hr />

              <div className="middle-part-about-me-div">
                <div className="card">
                  <div className="label">about me</div>
                  hi, i'm officially an electrical engineering student who has
                  an interest in cool 3d stuff, web development and software in
                  general. i did this website, because i'm really into cozy
                  things, and i wanted to share my thoughts about what i see. in
                  this website, you can find photos i took, musics i listened,
                  movies i watched, and books i read. i also add informations
                  and personal opionions as much as i can on them. you can be
                  sure that i'll ad much more while living my life :]
                </div>
              </div>
              <div className="middle-part-middle-four-layout">
                <div className="middle-part-photos-div">
                  <div className="card">
                    <div className="label">photos</div>
                    <div
                      style={{
                        wordBreak: "break-word",
                        overflowWrap: "break-word",
                      }}
                    >
                      asdasdasasdasdasdasdasdasdasdasdasasdasdasdasdasdasdasdasdasasdasdasdasdasdasd
                    </div>
                  </div>
                </div>
                <div className="middle-part-musics-div">
                  <div className="card">
                    <div className="label">musics</div>
                    asd
                  </div>
                </div>
                <div className="middle-part-movies-div">
                  <div className="card">
                    <div className="label">movies</div>
                    asd
                  </div>
                </div>
                <div className="middle-part-books-div">
                  <div className="card">
                    <div className="label">books</div>
                    asd
                  </div>
                </div>
              </div>
              <div className="middle-part-personal-projects-div">
                <div className="card">
                  <div className="label">personal projects</div>
                  my personal projects
                </div>
              </div>
            </div>

            {/* MIDDLE PART RIGHT */}
            <div className="home-page-middle-part-right">
              <div className="card">
                <div className="label">cube</div>
                <div className="canvas-wrapper">
                  <Canvas>
                    <HomePageCube />
                  </Canvas>
                </div>
              </div>
            </div>
          </div>

          {/* END OF MIDDLE */}

          {/* RIGHT PART */}
          <div className="home-page-right-part">
            <div className="home-page-right-part-anime-div">
              <img src={anime_char_image} alt="div" />
            </div>
          </div>
          {/* END OF RIGHT */}
        </div>
      </div>
    </>
  );
}

export default HomePage;
