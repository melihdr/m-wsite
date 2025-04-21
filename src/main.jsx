import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFoundPage from "./NotFoundPage.jsx";
import Projects from "./pages/Projects.jsx";
import Astro from "./pages/homePageSublinks/astro/Astro.jsx";
import SolarSystemRoot from "./pages/projects/solarSystem/SolarSystemRoot.jsx";
import LiquidRoot from "./pages/projects/liquid/LiquidRoot.jsx";
import CaesarCipher from "./pages/projects/rsaEncryption/RSAEncryption.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  { path: "/projects", element: <Projects />, errorElement: <NotFoundPage /> },
  { path: "/astro", element: <Astro />, errorElement: <NotFoundPage /> },
  {
    path: "/solar_system",
    element: <SolarSystemRoot />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "liquid",
    element: <LiquidRoot />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "caesar_cipher",
    element: <CaesarCipher />,
    errorElement: <NotFoundPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
