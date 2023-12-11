import React from "react";
import "./style.scss";

// images
import FooterLogo from "../../assets/images/restaurant_logo.png";

//icons
import InstagramIcon from "../../assets/images/instagram.png";
import TwitterIcon from "../../assets/images/twitter.png";
import WhatsappIcon from "../../assets/images/whatsapp.png";

const Footer = () => {
  return (
    <div className="footer_wrapper">
      <img id="footer_logo" src={FooterLogo} alt="" />
      <div className="footer_card_container">
        <h4>Siga-nos nas redes sociais!</h4>
        <div className="footer_socialmedia_card">
          <img className="footer_socialmedia_icon" src={InstagramIcon} alt="" />
          <img className="footer_socialmedia_icon" src={TwitterIcon} alt="" />
          <img className="footer_socialmedia_icon" src={WhatsappIcon} alt="" />
        </div>        
        <h4 className="footer_email_contact">ou entre em contato através do email: <a href="mailto:itsimoes1@gmail.com">itsimoes1@gmail.com</a></h4>
      </div>
    </div>
  );
};

export default Footer;
