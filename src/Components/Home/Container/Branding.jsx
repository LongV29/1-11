import React from "react";
import "./Branding.scss";
// import bran from '../../../img/designer-team-working-on-creative-design.png'
// import arrow from '../../../img/Arrow 1.png'

function Branding({ data }) {
  console.log(data.oder);
  return (
    <div className="branding">
      <div className="branding_left" style={{ order: data.order ? 2 : "" }}>
        <img src={data.img} alt="error" />
      </div>
      <div className="branding_right" style={{ order: data.order ? 1 : "" }}>
        <h1>{data.h1}</h1>
        <p>{data.p}</p>
        <img src={data.arrow} alt="error" />
      </div>
    </div>
    
  );
}

export default Branding;
