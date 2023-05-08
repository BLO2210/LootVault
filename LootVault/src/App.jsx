import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//import componenets here
import MovieSearch from './components/MovieSearch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>LOOT VAULT</h1>
      <MovieSearch/>
    </>
  )
}

export default App