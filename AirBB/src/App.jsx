import { useState } from 'react'
import './App.css'
import { Navbar } from './Components/Navbar'
import { Hero } from './Components/Hero'
import { Card } from './Components/Card'

export default function App() {
  const [count, setCount] = useState(0)


  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card />
    </div>
  )
}
