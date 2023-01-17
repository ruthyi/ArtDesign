import React from "react";
import { Carousel } from "react-responsive-carousel";
import photo1 from "../../assets/Card/carrusel/1.jpeg"
import photo2 from "../../assets/Card/carrusel/2.jpeg"
import photo3 from "../../assets/Card/carrusel/3.jpeg"
import photo4 from "../../assets/Card/carrusel/4.jpeg"
import photo5 from "../../assets/Card/carrusel/5.jpeg"
import photo6 from "../../assets/Card/carrusel/6.jpeg"
import photo7 from "../../assets/Card/carrusel/7.jpeg"
import photo8 from "../../assets/Card/carrusel/8.jpeg"
import carousels from './Styles.module.css'
export const Carrusel = () => {
  return (
    <Carousel autoPlay>
    <div className={carousels.photo}>
      <img alt="" src={photo1} />
      <p>Presentamos una opcion muy versátil, que te ayudará a tener una mejor idea del tipo de invitación que quieres.</p>
    </div>
    <div className={carousels.photo}>
      <img alt="" src={photo2} />
      <p >Interpretamos los sueños de nuestras quinceañeras segun la tematica dando una armonia de calidad.</p>
    </div>
    <div className={carousels.photo}>
      <img alt="" src={photo3} />
      <p >Para nuestros cumpleañeros creamos según el mensaje de la tematica del evento.</p>
    </div>
    <div className={carousels.photo}>
      <img alt="" src={photo4} />
      <p >Elaboramos botellitas todas las ocasiones tipo recordatorios hechas a mano y con amor.</p>
    </div>
    <div className={carousels.photo}>
      <img alt="" src={photo5} />
      <p >Para nuestro Bautizos trabajamos según los tonos de nuestros bebes dando esa armonia a nuestros seres queridos.</p>
    </div>
    <div className={carousels.photo}>
      <img alt="" src={photo6} />
      <p >Trabajamos para aquellas personas que ya no estan con nosotros dando esos detalles de luz y armonia para ser recordado.</p>
    </div>
    <div className={carousels.photo}>
      <img alt="" src={photo7} />
      <p >Nuestros grados los hacemos unicos e inolvidables.</p>
    </div>
    <div className={carousels.photo}>
      <img alt="" src={photo8} />
      <p >Diseñamos rompecabezas para toda ocasión dando ese toque de union familiar.</p>
    </div>
    
  </Carousel>
  )
}