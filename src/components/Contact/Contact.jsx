import React from "react";
import "./Contact.css";
import { BsWhatsapp } from "react-icons/bs";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaVideo } from "react-icons/fa";
import {BiSolidMessageSquareEdit} from 'react-icons/bi'
const Contact = () => {
  return (
    <div id="contact-us" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Nous contacter</span>
          <span className="primaryText">Facile de nous contacter</span>
          <span className="secondaryText">
            Nous sommes là pour vous aider à chaque étape de votre parcours, que ce soit pour discuter de nos services, planifier une consultation ou obtenir des informations complémentaires.
            {" "}
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsWhatsapp size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">WhatsApp</span>
                    <span className="secondaryText">+33 6 51 38 24 08</span>
                  </div>
                </div>
                <div className="flexCenter button">Appeler</div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BiLogoInstagramAlt size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Instagram</span>
                    <span className="secondaryText">@mmh2dn</span>
                  </div>
                </div>
                <div className="flexCenter button">Discuter maintenant</div>
              </div>
            </div>

            {/* second row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <FaVideo size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Appel Vidéo</span>
                    <span className="secondaryText">+33 6 51 38 24 08</span>
                  </div>
                </div>
                <div className="flexCenter button">Appeler</div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BiSolidMessageSquareEdit size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">+33 6 51 38 24 08</span>
                  </div>
                </div>
                <div className="flexCenter button">Message</div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexEnd c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;