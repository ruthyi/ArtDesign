import React from 'react'
import { Carrusel } from '../components/Banner/Carrusel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Networks } from '../components/SocialMedia/Networks';
import { ButtonQuote } from '../components/Button/ButtonQuote';
import { Category } from '../components/Category/Category';
export const Home = () => {
  return (
   <div className='home'>
      <Carrusel/>
      <section className='network'>
        <Networks/>
        <ButtonQuote/>
      </section>
      <section className='whoIs'>
        <h1>Hechos a mano y con amor</h1>
        <p>Interpretamos y diseñamos experiencias que cuentan tu historia de forma personalizada en cada invitación y diseño.</p>
      </section>
      <Category/>
      
   </div>
  )
}
