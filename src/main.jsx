import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFoundPage from "./NotFoundPage.jsx";
import Projects from "./pages/Projects.jsx";
import Astro from "./pages/homePageSublinks/Astro.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  { path: "/projects", element: <Projects />, errorElement: <NotFoundPage /> },
  { path: "/astro", element: <Astro />, errorElement: <NotFoundPage /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
