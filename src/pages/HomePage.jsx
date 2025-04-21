import { Canvas } from "@react-three/fiber";
import React from "react";
import HomePageCube from "../components/HomePageCube";
import HomePageProjects from "../components/HomePageProjects";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const handleGoToProjects = () => {
    navigate("/projects");
  };

  const handleGoToAstro = () => {
    navigate("/astro");
  };

  return (
    <>
      <div className="layout">
        <div className="homePageGrid">
          {/* FIRST ROW */}
          <div className="first-row">
            <div className="first-row-top">
              <div className="hello-text">dreamspace by melih durmus</div>
              <hr />
            </div>
            <div className="first-row-bottom">
              <button className="sublinks-button" onClick={handleGoToAstro}>
                astro
              </button>
              <button className="sublinks-button">art</button>
              <button className="sublinks-button">geo</button>
              <button className="sublinks-button">quiz</button>
              <button className="sublinks-button">countries</button>
              <button className="sublinks-button">poem</button>
            </div>
          </div>

          {/* SECOND ROW */}
          <div className="second-row">
            <div className="second-row-left">
              <div className="about-me">
                <div className="image-div">
                  <div className="image-grid">
                    <img src="/images/websiteImage.jpg" alt="website_image" />
                  </div>
                  <div className="image-me-text">me, 2024</div>
                </div>
                <div className="about-grid-wrap">
                  <div className="about-grid">
                    <div className="about-nameLinks">
                      <div className="about-nameLinks-name">Melih Durmus</div>
                      <div className="about-nameLinks-links">
                        <a
                          href="https://www.linkedin.com/in/melih-durmuş-727947307/"
                          target="_blank"
                        >
                          <img
                            className="links"
                            src="/images/home_page_links/linkedin.png"
                            alt="linkedin"
                          />
                        </a>
                        <a href="https://github.com/melihdr" target="_blank">
                          <img
                            className="links"
                            src="/images/home_page_links/github.png"
                            alt="linkedin"
                          />
                        </a>
                        <a
                          href="https://www.instagram.com/melihh_7/"
                          target="_blank"
                        >
                          <img
                            className="links"
                            src="/images/home_page_links/instagram.png"
                            alt="linkedin"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="about-mail">meljhdurmus@gmail.com</div>
                    <div className="about-about">
                      hi, i'm an electrical engineering student who has an
                      interest in cool 3d stuff, web development and software in
                      general.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="second-row-right">
              <div className="rotate-cube-canvas">
                <Canvas
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <HomePageCube />
                </Canvas>
              </div>
            </div>
          </div>

          {/* THIRD ROW */}
          {/*  <div className="third-row">
            <div className="third-row-left">
              <div className="my-projects-text"></div>
            </div>
            <div className="third-row-right">
              <div className="view-all-button-div"></div>
            </div>
          </div> */}

          {/* FOURTH ROW */}
          <div className="fourth-row">
            <div className="fourth-top">
              <div style={{ color: "#e0e1dd" }}>my projects</div>

              <button
                className="view-all-button-two"
                onClick={handleGoToProjects}
              >
                [view all]
              </button>
            </div>
            <div>
              <HomePageProjects />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
