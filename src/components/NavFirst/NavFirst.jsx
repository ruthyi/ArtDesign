import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export const NavFirst = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/card">Card</Link>
            </li>
            <li>
                <Link to="/shopping-cart">Shopping Cart</Link>
            </li>
        </ul>
        <Outlet/>
    </nav>
  )
}
