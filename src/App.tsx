import React from "react";
import "./App.scss";
import Home from "../src/components/Home/Home";
import BestSeller from "./components/BestSeller/BestSeller";
import Highlights from "./components/Highlights/Highlights";

function App() {
  return (
    <>
      <Home />
      <BestSeller />
      <Highlights />
    </>
  );
}

export default App;
