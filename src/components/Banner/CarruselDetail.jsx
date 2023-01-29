import React from "react";
import { Carousel } from "react-responsive-carousel";
import carousels from './Styles.module.css';
import ph1 from "../../assets/Card/carrusel/carruselDetail/1.jpeg";
import ph2 from "../../assets/Card/carrusel/carruselDetail/2.jpeg";
import ph3 from "../../assets/Card/carrusel/carruselDetail/3.jpg";
import ph4 from "../../assets/Card/carrusel/carruselDetail/4.jpg";
import ph5 from "../../assets/Card/carrusel/carruselDetail/5.jpg";
import ph6 from "../../assets/Card/carrusel/carruselDetail/6.jpg";


export const CarruselDetail = () => {
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