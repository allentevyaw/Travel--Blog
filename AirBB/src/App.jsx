import { useState } from 'react'
import './App.css'
import { Navbar } from './Components/Navbar'

export default function App() {
  const [count, setCount] = useState(0)


  return (
    <div className="App">
      <Navbar />
    </div>
  )
}
