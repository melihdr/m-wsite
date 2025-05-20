import React from "react";
import { useNavigate } from "react-router-dom";

function SingleProjectPage({ name }) {
  const navigate = useNavigate();

  const handleGoToProjects = () => {
    navigate(`${link}`);
  };

  return (
    <div className="single_project_page">
      <button className="single_project_page_button">
        <div className="single_project_page_name">{name}</div>
      </button>
    </div>
  );
}

export default SingleProjectPage;
