import React from "react";
import "./style.scss";

import BestSellerCard01 from "../../assets/images/bestseller_card_01.png";
import BestSellerCard02 from "../../assets/images/bestseller_card_02.png";
import BestSellerCard03 from "../../assets/images/bestseller_card_03.png";

const BestSeller = () => {
  return (
    <div className="bestseller_wrapper">
      <div className="bestseller_container">
        <h2 className="bestseller_title">Mais Vendidos</h2>
        <p className="bestseller_text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          doloremque eum aperiam nesciunt ratione ex eius quaerat, molestias
          molestiae, voluptates dolore cupiditate, nemo perferendis eveniet
          veritatis libero. Asperiores, nisi nostrum.
        </p>

        <div className="bestseller_cards_wrapper">
          <div className="bestseller_card_container">
            <img src={BestSellerCard01} alt="" />
            <h3>Prato 01</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="bestseller_card_container">
            <img src={BestSellerCard02} alt="" />
            <h3>Prato 02</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="bestseller_card_container">
            <img src={BestSellerCard03} alt="" />
            <h3>Prato 03</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
