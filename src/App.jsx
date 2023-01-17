import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import  {NavFirst}  from './components/NavFirst/NavFirst'
import { Home } from './pages/Home'
import { Card } from './pages/Card'
import { SoppingCart } from './pages/SoppingCart'
import { Footer } from './components/footer/Footer'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './App.css'
import { OtherServices } from './pages/OtherServices'
import {Details} from './pages/Details'
import {SublimationPrints} from './pages/SublimationPrints'
function App() {
  const [count, setCount] = useState(0)
  return (
    <main className="App">
      
      <Routes>
        <Route path='/' element={<NavFirst/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/card' element={<Card/>}/>
          <Route path='/otherService' element={<OtherServices/>}/>
          <Route path='/detail' element={<Details/>}/>
          <Route path='/sublimationPrint' element={<SublimationPrints/>}/>
          <Route path='/shopping-cart' element={<SoppingCart/>}/>
          <Route path='*' element={<Error/>}/>
        </Route>
      </Routes>
      <Footer/>
    </main>
  )
}

export default App
