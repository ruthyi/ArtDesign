import React from 'react'
import { CarruselSublimation } from '../components/Banner/CarruselSublimation'
import { ButtonQuote } from '../components/Button/ButtonQuote'
import { NavSecondSublimation } from '../components/NavSecond/NavSecondSublimation'
import { Networks } from '../components/SocialMedia/Networks'

export const SublimationPrints = () => {
  return (
    <div className='cardPage'>
      <CarruselSublimation/>
      <section className='network'>
        <Networks/>
        <ButtonQuote/>
      </section>
      <h1 className='cardPageH1'>Sublimación y Estampados</h1>
      <p className='cardPageP'>Usamos papeleria fina de la mas alta calidad</p>
      <NavSecondSublimation/>
      


    </div>
  )
}
