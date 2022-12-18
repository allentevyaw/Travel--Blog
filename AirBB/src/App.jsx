import { useState } from 'react'
import './App.css'
import { Navbar } from './Components/Navbar'
import { Hero } from './Components/Hero'

export default function App() {
  const [count, setCount] = useState(0)


  return (
    <div className="App">
      <Navbar />
      <Hero />
    </div>
  )
}
