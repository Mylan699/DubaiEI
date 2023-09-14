import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Démarrer avec DubaiEI</span>
          <span className="secondaryText">
          Souscrivez et obtenez des offres de prix super attractives.
            <br />
            Trouvez rapidement votre résidence
          </span>
          <button className="button" href>
            <a href="mailto:mylanmahieddine@icloud.com">Commencer</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;