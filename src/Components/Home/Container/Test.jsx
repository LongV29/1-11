import React from "react";
import "./Test.scss";
import img from '../../../img/index'

function Test(props) {
  return (
    <div className="test">
      <p>TESTIMONIALS</p>
      <h1>Read What Other have to Say</h1>
      <div className="test_item">
        <img src={img.test1} alt="error" />
        <img src={img.test2} alt="error" />
        <img src={img.test3} alt="error" />
      </div>
    </div>
  );
}

export default Test;
