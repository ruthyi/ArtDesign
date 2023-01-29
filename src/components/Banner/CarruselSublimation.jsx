import React from "react";
import { Carousel } from "react-responsive-carousel";
import carousels from './Styles.module.css';
import ph1 from "../../assets/Card/carrusel/carruselSublimation/1.jpg";
import ph2 from "../../assets/Card/carrusel/carruselSublimation/2.jpg";
import ph3 from "../../assets/Card/carrusel/carruselSublimation/3.jpg";
import ph4 from "../../assets/Card/carrusel/carruselSublimation/4.jpg";
import ph5 from "../../assets/Card/carrusel/carruselSublimation/5.webp";
import ph6 from "../../assets/Card/carrusel/carruselSublimation/6.jpg";

export const CarruselSublimation = () => {
  return (
    <Carousel autoPlay>
    <div className={carousels.photo}>
      <img alt="" src={ph1} />
    </div>
    <div className={carousels.photo}>
      <img alt="" src={ph2} />
    </div>
    <div className={carousels.photo}>
      <img alt="" src={ph3} />
    </div>
    <div className={carousels.photo}>
      <img alt="" src={ph4} />
    </div>
    <div className={carousels.photo}>
      <img alt="" src={ph5} />
    </div>
    <div className={carousels.photo}>
      <img alt="" src={ph6} />
    </div>
  </Carousel>
  )
}