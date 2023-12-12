import React from "react";

const Statistics = () => {
  return (
    <div className="statistics_wrapper">
      <div className="statistics_container">
        <h3 className="highlights_title">Nossos números</h3>
        <p id="statistics_text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
          asperiores quas doloribus id. Odit accusamus hic molestias adipisci.
          Recusandae beatae temporibus exercitationem.
        </p>
        <div className="statistics_cards_container">
          <div className="statistics_card">
            <span>123</span>
            UNIDADES
          </div>
          <div className="statistics_card">
            <span>100</span>
            CHEF
          </div>
          <div className="statistics_card">
            <span>300</span>
            MENU
          </div>
          <div className="statistics_card">
            <span>30</span>
            CIDADES
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
