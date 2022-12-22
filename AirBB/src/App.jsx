import { useState } from 'react'
import './App.css'
import { Navbar } from './Components/Navbar'
import { Hero } from './Components/Hero'
import { Card } from './Components/Card'
import person from "./assets/person.png"
import data from './Components/Data'


export default function App() {
  const [count, setCount] = useState(0)

  const cardElements = data.map((unit) => {
    return <Card 
    key={unit.id}
    img={person}
    unit={unit}
    />
  })

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className='cards-list'>
        {cardElements}
        </section>
      
    </div>
  )
}
