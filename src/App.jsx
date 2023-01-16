import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import  {NavFirst}  from './components/NavFirst/NavFirst'
import { Home } from './pages/Home'
import { Card } from './pages/Card'
import { SoppingCart } from './pages/SoppingCart'
import {Carrusel } from './components/Banner/Carrusel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="App">
      
      <Routes>
        <Route path='/' element={<NavFirst/>}>
          <Route path='/' element={<Home/>}/>
          <Route
           path='card' element={<Card/>}/>
          <Route path='shopping-cart' element={<SoppingCart/>}/>
          <Route path='*' element={<Error/>}/>
        </Route>
      </Routes>
    </main>
  )
}

export default App
