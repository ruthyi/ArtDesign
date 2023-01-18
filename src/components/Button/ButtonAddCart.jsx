import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export const ButtonAddCart = () => {
  return (
    <button>
        <Link to="/shopping-cart" >Agregar al Carrito</Link>
        <Outlet/>
    </button>
  )
}
