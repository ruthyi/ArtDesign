import React from "react";
import { CarruselOtherService } from "../components/Banner/CarruselOtherService";
import { ButtonQuote } from "../components/Button/ButtonQuote";
import { Laser } from "../components/Service/Laser";
import { Print } from "../components/Service/Print";
import { Networks } from "../components/SocialMedia/Networks";

export const OtherServices = () => {
  return (
    <div className='cardPage'>
      <CarruselOtherService/>
      <section className='network'>
        <Networks/>
        <ButtonQuote/>
      </section>
      <h1 className='cardPageH1'>Otros Servicios</h1>
      <p className='cardPageP'>Realizamos diseños personalizados</p>
      <section className="containerService">
      <Laser/>
      <Print/>
      </section>
    </div>
  );
};
