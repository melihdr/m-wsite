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
import VigenereCipher from "./pages/projects/vigenereCipher/VigenereCipher.jsx";
import GPGPURoot from "./pages/projects/gpgpu/GPGPURoot.jsx";
import RSAComponent from "./pages/projects/rsa/RSA.jsx";
import CoffeSmokeRoot from "./pages/projects/coffe_smoke/CoffeSmokeRoot.jsx";
import GameOfLifeRoot from "./pages/projects/game_of_life/GameOfLifeRoot.jsx";
import KnightsTourRoot from "./pages/projects/knights_tour/KnightsTourRoot.jsx";
import LangtonsAntRoot from "./pages/projects/langtons_ant/LangtonsAntRoot.jsx";
import MinecraftMapRoot from "./pages/projects/minecraft_map/MinecraftMapRoot.jsx";

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
  {
    path: "vigenere_cipher",
    element: <VigenereCipher />,
    errorElement: <NotFoundPage />,
  },
  { path: "gpgpu", element: <GPGPURoot />, errorElement: <NotFoundPage /> },
  { path: "rsa", element: <RSAComponent />, errorElement: <NotFoundPage /> },
  {
    path: "smoke",
    element: <CoffeSmokeRoot />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "game_of_life",
    element: <GameOfLifeRoot />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "knights_tour",
    element: <KnightsTourRoot />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "langtons_ant",
    element: <LangtonsAntRoot />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "minecraft_map",
    element: <MinecraftMapRoot />,
    errorElement: <NotFoundPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
