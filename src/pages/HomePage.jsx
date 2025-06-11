import React from "react";
import { useState, useEffect } from "react";
import anime_char_image from "/images/anime-char.png";
import totor_image from "/images/totoro.png";
import { Canvas } from "@react-three/fiber";
import HomePageCube from "../components/HomePageCube";
import in_the_court from "/images/in-the-court.jpg";
import hail_to_the_thief from "/images/hail-to-the-thief.jpg";
import i_can_see_your_house_from_here from "/images/i-can-see-your-house-from-here.jpg";
import souvlaki from "/images/souvlaki.jpg";
import amsterdam1 from "/images/amsterdam/amsterdam1.jpeg";
import amsterdam2 from "/images/amsterdam/amsterdam2.jpeg";
import amsterdam3 from "/images/amsterdam/amsterdam3.jpeg";
import amsterdam4 from "/images/amsterdam/amsterdam4.jpeg";

function HomePage() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

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
          <div className="home-page-left-part">
            <div className="home-page-left-part-anime-div">
              <img src={totor_image} alt="anime-image" />
            </div>
          </div>
          {/* END OF LEFT */}

          {/* MIDDLE PART */}
          <div className="home-page-middle-part">
            {/* MIDDLE PART LEFT */}
            <div className="home-page-middle-part-left">
              <div className="left-part-astro-div">
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
              <div className="left-part-time-div">
                <div className="card">
                  <div className="label">my time</div>
                  <div>{time.toLocaleTimeString()}</div>
                </div>
              </div>
            </div>

            {/* MIDDLE PART MIDDLE */}
            <div className="home-page-middle-part-middle">
              <div className="home-page-title-div">
                <div className="home-page-title">
                  {`>>`}dreamspace by melih durmus
                </div>
              </div>

              <div className="home-page-hr-div">
                <hr />
              </div>

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
                <div
                  className="middle-part-photos-div"
                  style={{ marginBottom: "1%" }}
                >
                  <div className="card">
                    <div className="label">photos</div>
                    <div
                      style={{
                        wordBreak: "break-word",
                        overflowWrap: "break-word",
                        fontSize: "0.7rem",
                      }}
                    >
                      from ankara(my city), amsterdam, and more..
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: "2%",
                        justifyContent: "center",
                        marginTop: "2%",
                      }}
                    >
                      <img
                        style={{ width: "20%" }}
                        src={amsterdam1}
                        alt="amsterdam1"
                      />
                      <img
                        style={{ width: "20%" }}
                        src={amsterdam2}
                        alt="amsterdam2"
                      />
                      <img
                        style={{ width: "20%" }}
                        src={amsterdam3}
                        alt="amsterdam3"
                      />
                      <img
                        style={{ width: "20%" }}
                        src={amsterdam4}
                        alt="amsterdam4"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="middle-part-musics-div"
                  style={{ marginBottom: "1%" }}
                >
                  <div className="card">
                    <div className="label">musics</div>
                    <div>
                      <div className="home-page-music-images-div">
                        <img
                          style={{ width: "20%" }}
                          src={in_the_court}
                          alt="court"
                        />
                        <img
                          style={{ width: "20%" }}
                          src={hail_to_the_thief}
                          alt="court"
                        />
                        <img
                          style={{ width: "20%" }}
                          src={souvlaki}
                          alt="court"
                        />
                        <img
                          style={{ width: "20%" }}
                          src={i_can_see_your_house_from_here}
                          alt="court"
                        />
                      </div>
                    </div>
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
                <div className="label">torus knot</div>
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
              <img src={anime_char_image} alt="anime-image" />
            </div>
          </div>
          {/* END OF RIGHT */}
        </div>
      </div>
    </>
  );
}

export default HomePage;
