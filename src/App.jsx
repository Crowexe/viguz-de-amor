import { useState } from 'react'
import './App.css'

function alerta() {
  alert("Hello\nHow are you?");
}

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <div className="App">
      <h1>Viguz de amor &#60;3</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onclick="alerta()">
          Try it
        </button>
      </div>
    </div>
  )
}

export default App
