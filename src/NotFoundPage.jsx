import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <>
      <div>not found</div>
      <Link to="/">go home</Link>
    </>
  );
}

export default NotFoundPage;
