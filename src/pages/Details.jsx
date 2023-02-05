import React from 'react'
import { CarruselDetail } from '../components/Banner/CarruselDetail'
import { ButtonQuote } from '../components/Button/ButtonQuote'
import { NavSecondDetail } from '../components/NavSecond/NavSecondDetail'
import { Networks } from '../components/SocialMedia/Networks'

export const Details = () => {
  return (
    <div className='cardPage'>
      <CarruselDetail/>
      <section className='network'>
        <Networks/>
        <ButtonQuote/>
      </section>
      <h1 className='cardPageH1'>Detalles Familiares y Empresariales</h1>
      <p className='cardPageP'>Usamos productos de la mas alta calidad</p>
      <NavSecondDetail/>
      


    </div>
  )
}
