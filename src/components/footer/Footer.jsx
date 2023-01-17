import React from 'react'
import { Networks } from '../SocialMedia/Networks'
import styleFooter from './Footer.module.css'

export const Footer = () => {
  return (
    <footer className={styleFooter.containerFooter}>
        <Networks/>
        <a href="https://github.com/ruthyi" target="_blank" > Create By Ruth Lizcano</a>
    </footer>
  )
}
