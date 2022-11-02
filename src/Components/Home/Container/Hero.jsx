import React from "react";
import "../Container/Hero.scss";

class Hero extends React.Component {
  constructor() {
    super();
    this.state = {
      background:"red",
      color:"yellow" ,
    };
  }
  handleClick =()=> {
    if(this.state.background==="black"){
      this.setState({
        background: "white",
        color: "black",
      });
    }
    else{
      this.setState({
        background: "black",
        color: "white",
      });
    }

  }

  render() {
    const { data } = this.props;
    const styleObject = {
      order: data.order ? 2 : "",
      background: this.state.background,
      color: this.state.color,
    };
    return (
      <div className="hero_section">
        <div className="hero_section-left" style={styleObject}>
          <h1>{data.h1}</h1>
          <p>{data.p}</p>
          <button onClick={this.handleClick}>Contact Us</button>
          
        </div>
        <div
          className="hero_section-right"
          style={{ order: data.order ? 1 : "" }}
        >
          <img src={data.img} alt="error" />
        </div>
      </div>
    );
  }
}

// function Hero({ data }) {
//   return (
//     <div className="hero_section">
//       <div className="hero_section-left" style={{ order: data.order ? 2 : "" }}>
//         <h1>{data.h1}</h1>

//         <p>{data.p}</p>
//         <button>Contact Us</button>
//       </div>
//       <div className="hero_section-right" style={{ order: data.order ? 1 : "" }}>
//         <img src={data.img} alt="error" />
//       </div>
//     </div>
//   );
// }

export default Hero;
