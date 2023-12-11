import React from "react";

// images
import Highlight01Card from "../../assets/images/restaurante_highlight01_card.png";

const Highlight01 = () => {
  return (
    <div className="highlight01_wrapper">
      <div className="highlight01_card_container">
        <img id="highlight01_card" src={Highlight01Card} alt="" />
        <div className="highlight01_text_container">
          <h3 className="highlights_title">Sabor Oriental</h3>
          <p id="highlight01_text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            molestiae distinctio nostrum.
          </p>
          <a className="submit_button">FAÇA SEU PEDIDO</a>
        </div>
      </div>
    </div>
  );
};

export default Highlight01;
