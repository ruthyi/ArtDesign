import React from 'react'
import lastQuote from './Button.module.css'
export const ButtonLastQuoye = () => {
  const mensaje="Buen día, me encuentro interesad@ en cotizar sus servicios"
  const url= `https://api.whatsapp.com/send?phone=573209972620&text=${encodeURIComponent(mensaje)}`
  return (
    <button className={lastQuote.lastQuote}><a  href={url} target="_blank" >Cotiza</a></button>
  )
}
