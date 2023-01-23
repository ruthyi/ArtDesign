import React from 'react'
import quote from './Button.module.css'
export const ButtonQuote = () => {
  const mensaje="Buen día, me encuentro interesad@ en cotizar sus servicios"
  const url= `https://api.whatsapp.com/send?phone=573123966824&text=${encodeURIComponent(mensaje)}`
  return (
    <button className={quote.quote}><a href={url} target="_blank">Cotiza</a></button>
  )
}
