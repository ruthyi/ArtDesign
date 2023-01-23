import React from 'react'
import carts from "../assets/cart.png"
import { ListProducts } from '../components/CartProduct/ListProducts'

export const ShoppingCart = () => {
  return (
    <section className='shoppingCart' >
      <img className='shoppingCartImg' src={carts} alt="" />
      <h1>Carrito de Compras</h1>
      <ListProducts/>
    </section>
  )
}
