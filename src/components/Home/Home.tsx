import React from "react";
import "./style.scss";

// images

import HomeBackground from "../../assets/images/restaurante_home_bg.png";
import HomeDetail from "../../assets/images/restaurante_home_detail_2.png";

const Home = () => {
  return (
    <div className="home_wrapper">
      <img className="home_background" src={HomeBackground} alt="" />
      <img className="home_detail" src={HomeDetail} alt="" />
      <div className="home_text_container">
        <h1 className="home_title">Restaurante</h1>
        <div className="home_text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ratione
          excepturi porro ullam ducimus quam.
        </div>
        <a className="submit_button">FAÇA SEU PEDIDO</a>
      </div>
    </div>
  );
};

export default Home;
