import React from 'react'
import { CarruselCards } from '../components/Banner/CarruselCards'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Networks } from '../components/SocialMedia/Networks';
import { ButtonQuote } from '../components/Button/ButtonQuote';
import { NavSecond } from '../components/NavSecond/NavSecond';
import { ListCategory } from '../components/Category/ListCategory';

export const Card = () => {
  return (
    <div className='cardPage'>
      <CarruselCards/>
      <section className='network'>
        <Networks/>
        <ButtonQuote/>
      </section>
      <h1 className='cardPageH1'>Tarjetas</h1>
      <p className='cardPageP'>Usamos papeleria fina de la mas alta calidad</p>
      <NavSecond/>
      


    </div>
  )
}
