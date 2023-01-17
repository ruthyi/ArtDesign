import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import styles from './NavSecond.module.css'
export const NavSecond = () => {
  return (
        <nav className={styles.secondNav}>
        <ul className={styles.secondtNavUl}>
            <li>
                <Link to="/card/bodas">Bodas</Link>
            </li>
            <li>
                <Link to="/card/quinces">Quince Años</Link>
            </li>
            <li>
                <Link to="/card/grados">Grados</Link>
            </li>
            <li>
                <Link to="/card/babyShower">Baby Shower</Link>
            </li>
            <li>
                <Link to="/card/babyShower">Cumpleaños</Link>
            </li>
            <li>
                <Link to="/card/bautixzos">Bautizos</Link>
            </li>
            <li>
                <Link to="/card/primerasComuniones">Primeras Comuniones</Link>
            </li>
            
        </ul>
        <Outlet/>
       </nav>
    
  )
}