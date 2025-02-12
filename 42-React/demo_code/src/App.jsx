import { useState } from 'react'
import './App.css'
import Logos from './Logos.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [liked,setLiked] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  const toggleLike = () => {
    setLiked((prevLiked) => !prevLiked)
  }

  const toggleDarkMode = () => {
    setDarkMode((prevMode)=> !prevMode)
  }

  return (
    <div className={darkMode ? "dark" : ""}>

      <Logos />
      <Logos />
      
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick = {toggleLike}>
          {liked?"Liked":"Disliked"}
        </button>
        <button onClick={toggleDarkMode}>
          {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
        </button>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
