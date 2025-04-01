import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Experience from "./Experience.jsx";
import NotFoundPage from "./NotFoundPage.jsx";
import HomePageCube from "./components/homePageCube.jsx";
import Temporary from "./pages/Temporary.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/experience",
    element: <Experience />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/homePageCube",
    element: <Temporary />,
    errorElement: <NotFoundPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
