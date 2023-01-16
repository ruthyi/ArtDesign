import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import logo from "../../assets/logo.png"
import cart from "../../assets/carrito-de-compras.png"
import styles from './Nav.module.css'
export const NavFirst = () => {
  return (
        <nav className={styles.firstNav}>
        <ul className={styles.firstNavUl}>
            <li>
                <Link to="/card">Tarjeta de Invitación</Link>
            </li>
            <li>
                <Link to="/otherService">Otros Servicios</Link>
            </li>
            <li>
                <Link to="/"><img src={logo} alt="logo de arte y diseño" /></Link>
            </li>
            <li>
                <Link to="/detail">Detalles</Link>
            </li>
            <li>
                <Link to="/sublimationPrint">Sublimación y Estampados</Link>
            </li>
            <li>
                <Link to="/shopping-cart"><img src={cart} alt="carrito de compras" /></Link>
            </li>
        </ul>
        <Outlet/>
       </nav>
    
  )
}
