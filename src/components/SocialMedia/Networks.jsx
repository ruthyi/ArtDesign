import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import face from "../../assets/facebook.png"
import whatsA from "../../assets/whatsapp.png"
import insta from "../../assets/instagram.png"
import styles from './Networks.module.css'
export const Networks = () => {
  return (
    <div className={styles.networks}>
        <a href="https://wa.me/c/573209972620" target="_blank"><img src={whatsA} alt="icono de whatsApp" /></a>
        <a href="https://www.facebook.com/Yola2018?mibextid=ZbWKwL" target="_blank"> <img src={face} alt="icono de facebook" /></a>
        <a href="https://www.instagram.com/mrayol1011/" target="_blank" ><img src={insta} alt="icono de instagram" /> </a>
    </div>
  )
}
