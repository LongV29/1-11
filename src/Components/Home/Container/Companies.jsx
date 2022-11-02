import React from "react";
import "../Container/Companies.scss";
import bran1 from "../../../img/Company logo1.png";
import bran2 from "../../../img/Company logo2.png";
import bran3 from "../../../img/Company logo3.png";
import bran4 from "../../../img/Company logo4.png";

function Companies(props) {
  return (
    <div className="companies">
      <div className="companies_text">
        <p>Trusted by 4,000+ companies</p>
      </div>
      <div className="companies_logo">
        <img src={bran1} alt="error" />
        <img src={bran2} alt="error" />
        <img src={bran3} alt="error" />
        <img src={bran4} alt="error" />
      </div>
    </div>
  );
}

export default Companies;
