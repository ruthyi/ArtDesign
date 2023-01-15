import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import  {NavFirst}  from './components/NavFirst/NavFirst'
import { Home } from './pages/Home'
import { Card } from './pages/Card'
import { SoppingCart } from './pages/SoppingCart'
import { Banner } from './components/Banner/Banner'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="App">
       
      <Routes>
        <Route path='/' element={<NavFirst/>}>
          <Route path='/' element={<Banner/>}/>
          <Route path='card' element={<Card/>}/>
          <Route path='shopping-cart' element={<SoppingCart/>}/>
          <Route path='*' element={<Error/>}/>
        </Route>
      </Routes>
    </main>
  )
}

export default App
