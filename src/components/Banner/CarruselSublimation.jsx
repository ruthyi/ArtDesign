import React from "react";
import { Carousel } from "react-responsive-carousel";
import carousels from './Styles.module.css';
import ph1 from "../../assets/Card/carrusel/carruselCards/1.jpeg";
import ph2 from "../../assets/Card/carrusel/carruselCards/2.jpg";
import ph3 from "../../assets/Card/carrusel/carruselCards/3.jpg";
import ph4 from "../../assets/Card/carrusel/carruselCards/4.jpg";
import ph5 from "../../assets/Card/carrusel/carruselCards/5.jpg";
import ph6 from "../../assets/Card/carrusel/carruselCards/6.jpg";
import ph7 from "../../assets/Card/carrusel/carruselCards/7.jpg";
import ph8 from "../../assets/Card/carrusel/carruselCards/8.jpg";
import ph9 from "../../assets/Card/carrusel/carruselCards/9.jpg";

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
    <div className={carousels.photo}>
      <img alt="" src={ph7} />
    </div>
    <div className={carousels.photo}>
      <img alt="" src={ph8} />
    </div>
    <div className={carousels.photo}>
      <img alt="" src={ph9} />
    </div>
    
  </Carousel>
  )
}