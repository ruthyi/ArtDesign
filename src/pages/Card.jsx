import React from 'react'
import { CarruselCards } from '../components/Banner/CarruselCards'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Networks } from '../components/SocialMedia/Networks';
import { ButtonQuote } from '../components/Button/ButtonQuote';
import { NavSecond } from '../components/NavSecond/NavSecond';

export const Card = () => {
  return (
    <div className='cardPage'>
      <CarruselCards/>
      <section className='network'>
        <Networks/>
        <ButtonQuote/>
      </section>
      <NavSecond/>


    </div>
  )
}
