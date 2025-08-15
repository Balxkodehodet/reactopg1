import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ListMenu from "./components/ListMenu.jsx";
import KortComponent from "./components/KortComponent.jsx";
import { meny } from "./RestaurantData.jsx";

function App() {
  return (
    <>
      <ListMenu meny={meny} />
      <KortComponent meny={meny} />
    </>
  );
}

export default App;
