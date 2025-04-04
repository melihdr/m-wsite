import React from "react";
import { useNavigate } from "react-router-dom";

function Projects() {
  const navigate = useNavigate();

  const handleGoToHome = () => {
    navigate("/");
  };

  return (
    <>
      <div>
        hey, no projects yet. let's say this page is still on process :]
      </div>
      <button
        style={{
          fontFamily: "JetBrains",
          marginTop: "2px",
          fontWeight: "bold",
          background: "transparent",
          cursor: "pointer",
          border: "none",
          padding: "0",
        }}
        className="go-home-button"
        onClick={handleGoToHome}
      >
        [go home]
      </button>
    </>
  );
}

export default Projects;
