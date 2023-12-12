import React from "react";
import "./style.scss";

const Subscribe = () => {
  return (
    <div id="subscribe" className="subscribe_wrapper">
      <div className="subscribe_container">
        <h3 className="subscribe_title">Inscreva-se!</h3>
        <div className="subscribe_text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
          consequuntur eaque dicta ea eligendi ut culpa reiciendis accusantium.
        </div>
        <form className="subscribe_form" action="">
          <input id="subscribe_input" type="text" placeholder="Seu Email" />
          <input
            id="subscribe_submit_button"
            type="submit"
            value="INSCREVA-SE"
          />
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
