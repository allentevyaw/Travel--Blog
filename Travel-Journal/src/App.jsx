import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import { Main } from './Components/Main'
import { Nav } from './Components/Nav'
import data from './Components/Data'

function App() {
  const [count, setCount] = useState(0)

  const dataArray = data.map((item) => {
    return (
      <Main 
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <div className="App">
      <Nav />
      {dataArray}
    </div>
  )
}

export default App

{/* <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
