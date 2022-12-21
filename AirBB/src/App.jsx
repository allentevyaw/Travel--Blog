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
    img={person}
    rating={unit.rating} 
    reviewCount={unit.reviewCount}
    location={unit.location}
    title={unit.title}
    price={unit.price}
    />
  })

  return (
    <div className="App">
      <Navbar />
      <Hero />
      {cardElements}
    </div>
  )
}
