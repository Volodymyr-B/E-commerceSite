import React from "react";
import AboutUs from "../../components/aboutUs/AboutUs";
import Delivery from "../../components/delivery/Delivery";
import Footer from "../../components/footer/Footer";
import Intro from "../../components/intro/Intro";
import Menu from "../../components/menu/Menu";
import Popular from "../../components/popular/Popular";
import Slider from "../../components/slider/Slider";

const Main = () => {
  return (
    <>
      <Intro />
      <Popular />
      <Delivery />
      <AboutUs />
      <Menu />
      <Slider />
      <Footer />
    </>
  );
};

export default Main;
