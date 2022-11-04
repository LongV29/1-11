import React from "react";
import Navbar from "./Navbar/Navbar";
import "../Home/Home.scss";
import Hero from "./Container/Hero";
import Companies from "./Container/Companies";
import Footer from "./Footer/Footer";
import Branding from "./Container/Branding";
import img from "../../img/index";
import Test from "./Container/Test";
import GetList from "./Container/getList";

function Home(props) {
  const data1 = [
    {
      order: false,
      img: img.Bus_peo,
      h1: "Building digital products, brands & experience",
      p: "Digital Agency is your online team mangement tool that easy and prompt",
    },
    {
      order: true,
      img: img.cus,
      h1: "Be a part of the next big thing",
      p: "We work with Brans, Startups, to SMEs. Colaborate for more impact and growt",
    },
  ];
  const data2 = [
    {
      arrow: img.Arrow,
      img: img.Des_team,
      order: false,
      h1: "Branding & Design system",
      p: "Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups",
    },
    {
      arrow: img.Arrow,
      img: img.Bus_ana,
      order: true,
      h1: "Custome & Plugin Development",
      p: "Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups",
    },
  ];
  console.log(img);

  return (
    <div className="App">
      <Navbar />
      <Hero data={data1[0]} />
      <Companies />
      <Branding data={data2[0]} />
      <Branding data={data2[1]} />
      <GetList />
      {/* <Test /> */}
      <Hero data={data1[1]} />
      <Footer />
    </div>
  );
}

export default Home;
