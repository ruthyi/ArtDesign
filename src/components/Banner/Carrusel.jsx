import React from "react";
import { Carousel } from "react-responsive-carousel";
import photo1 from "../../assets/Card/marriage/22.jpg"
import photo2 from "../../assets/Card/marriage/21.jpg"
import photo3 from "../../assets/Card/marriage/22.jpg"
import photo4 from "../../assets/Card/marriage/23.jpg"
import photo5 from "../../assets/Card/marriage/3.jpg"
import photo6 from "../../assets/Card/marriage/2.jpg"
import carousels from './Styles.module.css'
export const Carrusel = () => {
  return (
    <Carousel autoPlay>
    <div className={carousels.photo}>
      <img alt="" src={photo1} />
      <p className="legend">Legend 1</p>
    </div>
    <div className={carousels.photo}>
      <img alt="" src={photo2} />
      <p className="legend">Legend 2</p>
    </div>
    <div className={carousels.photo}>
      <img alt="" src={photo3} />
      <p className="legend">Legend 3</p>
    </div>
    <div className={carousels.photo}>
      <img alt="" src={photo4} />
      <p className="legend">Legend 4</p>
    </div>
    <div className={carousels.photo}>
      <img alt="" src={photo5} />
      <p className="legend">Legend 5</p>
    </div>
    <div className={carousels.photo}>
      <img alt="" src={photo6} />
      <p className="legend">Legend 6</p>
    </div>
    <div className={carousels.photo}>
      <img alt="" src={photo1} />
      <p className="legend">Legend 7</p>
    </div>
    <div className={carousels.photo}>
      <img alt="" src={photo2} />
      <p className="legend">Legend 8</p>
    </div>
    
  </Carousel>
  )
}