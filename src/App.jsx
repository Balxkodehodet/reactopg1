import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <ListMenu meny={meny} />
      <KortComponent meny={meny} />
    </>
  );
}

export default App;
