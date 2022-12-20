import { useState } from 'react'
import './App.css'
import { Navbar } from './Components/Navbar'
import { Hero } from './Components/Hero'
import { Card } from './Components/Card'
import person from "./assets/person.png"


export default function App() {
  const [count, setCount] = useState(0)


  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card 
        img={person}
        rating="5.0" 
        reviewCount={5} 
        country="USA" 
        title="Life Lessons with Katie Zaferes" 
        price={136}/>
    </div>
  )
}
