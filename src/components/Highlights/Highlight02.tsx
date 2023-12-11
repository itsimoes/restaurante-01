import React from 'react'

import Highlight02Card from "../../assets/images/restaurante_highlight02_card.png";

const Highlight02 = () => {
  return (
    <div className="highlight02_wrapper">
      <div className="highlight02_card_container">
        <div className="highlight01_text_container">
          <h3 className="highlights_title">Sabor Brasileiro</h3>
          <p id="highlight01_text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            molestiae distinctio nostrum.
          </p>
          <a className="submit_button">FAÇA SEU PEDIDO</a>
        </div>
        <img id="highlight02_card" src={Highlight02Card} alt="" />
      </div>
    </div>
  )
}

export default Highlight02