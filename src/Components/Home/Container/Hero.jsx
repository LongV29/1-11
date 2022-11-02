import React from "react";
import "../Container/Hero.scss";
// import hero1 from "../../../img/business-people-discussing-business-idea.png"

function Hero({ data }) {
  return (
    <div className="hero_section">
      <div className="hero_section-left" style={{ order: data.order ? 2 : "" }}>
        <h1>{data.h1}</h1>

        <p>{data.p}</p>
        <button>Contact Us</button>
      </div>
      <div className="hero_section-right" style={{ order: data.order ? 1 : "" }}>
        <img src={data.img} alt="error" />
        {/* <img src="./img/business-people-discussing-business-idea.png" alt="business-people-discussing-business-idea.png" /> */}
      </div>
    </div>
  );
}

export default Hero;
