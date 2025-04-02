import { Canvas } from "@react-three/fiber";
import React from "react";
import HomePageCube from "../components/HomePageCube";
import HomePageProjects from "../components/HomePageProjects";

function HomePage() {
  return (
    <>
      <div className="layout">
        <div className="homePageGrid">
          {/* FIRST ROW */}
          <div className="first-row">
            <div className="first-row-left">
              <div className="hello-text">Hello,</div>
            </div>
            <div className="first-row-right">
              <div className="rotate-cube-text"></div>
            </div>
          </div>

          {/* SECOND ROW */}
          <div className="second-row">
            <div className="second-row-left">
              <div className="about-me">
                <div className="image-grid">
                  <img src="/images/websiteImage.jpg" alt="website_image" />
                  <div>me, 2024</div>
                </div>
                <div className="about-grid-wrap">
                  <div className="about-grid">
                    <div className="about-nameLinks">
                      <div className="about-nameLinks-name">Melih Durmus</div>
                      <div className="about-nameLinks-links">
                        <a href="https://tr.linkedin.com/?mcid=7011503728440569856&src=go-pa&trk=sem-ga_campid.19331681909_asid.168715020864_crid.698313460548_kw.linkedin_d.c_tid.kwd-148086543_n.g_mt.e_geo.1012763&cid=&gclsrc=aw.ds&gad_source=1&gbraid=0AAAAAojDCNSVk7jb8tN_thVkB3dv-J4Ox&gclid=Cj0KCQjwna6_BhCbARIsALId2Z1jotm_hNsVoJM4AIn8gZgFNOjAl083kwynSOQhmyhI5HhapkM8OPMaAvkKEALw_wcB">
                          <img
                            className="links"
                            src="/images/home_page_links/linkedin.png"
                            alt="linkedin"
                          />
                        </a>
                        <a href="https://github.com/melihdr">
                          <img
                            className="links"
                            src="/images/home_page_links/github.png"
                            alt="linkedin"
                          />
                        </a>
                        <a href="https://www.instagram.com/melihh_7/">
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
          <div className="third-row">
            <div className="third-row-left">
              <div className="my-projects-text"></div>
            </div>
            <div className="third-row-right">
              <div className="view-all-button-div"></div>
            </div>
          </div>

          {/* FOURTH ROW */}
          <div className="fourth-row">
            <div className="fourth-top">
              <div style={{ color: "#e0e1dd" }}>my projects</div>
              <button className="view-all-button-two">[view all]</button>
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
