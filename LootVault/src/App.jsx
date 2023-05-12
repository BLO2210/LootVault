import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {useSelector, useDispatch} from 'react-redux'

//import componenets here
import Navbar from './components/Navbar'
import MovieSearch from './components/MovieSearch'
import Login from './components/Login'
import ViewLists from './components/viewLists'

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
