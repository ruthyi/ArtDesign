import React from "react";
import { Carousel } from "react-responsive-carousel";
import carousels from './Styles.module.css';
import ph1 from "../../assets/Card/carrusel/carruselOther/1.jpeg";
import ph2 from "../../assets/Card/carrusel/carruselOther/2.jpeg";
import ph3 from "../../assets/Card/carrusel/carruselOther/3.jpeg";
import ph4 from "../../assets/Card/carrusel/carruselOther/4.jpeg";
import ph5 from "../../assets/Card/carrusel/carruselOther/5.jpeg";
import ph6 from "../../assets/Card/carrusel/carruselOther/6.jpg";


export const CarruselOtherService = () => {
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