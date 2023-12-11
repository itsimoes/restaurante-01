import React from "react";
import "./App.scss";
import Home from "../src/components/Home/Home";
import BestSeller from "./components/BestSeller/BestSeller";
import Highlights from "./components/Highlights/Highlights";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <BestSeller />
      <Highlights />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
