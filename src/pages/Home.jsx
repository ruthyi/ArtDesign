import React from 'react'
import { Carrusel } from '../components/Banner/Carrusel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Networks } from '../components/SocialMedia/Networks';
import { ButtonQuote } from '../components/Button/ButtonQuote';
export const Home = () => {
  return (
   <div className='home'>
      <Carrusel/>
      <section className='network'>
        <Networks/>
        <ButtonQuote/>
      </section>
   </div>
  )
}
