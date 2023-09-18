import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* côté gauche */}
        <div className="flexColStart f-left">
          <img src="./newLogo.png" alt="" width={120} />
          <span className="secondaryText">
          Notre vision est d'offrir à n'importe qui <br />
          le droit d'entretenir son corps 
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">DHCC Bldg 39, 39 Ibn Seena Street, Dubai</span>
          <div className="flexCenter f-menu">
            <span>Propriété</span>
            <span>Service</span>
            <span>Produit</span>
            <span>À propos de nous</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;