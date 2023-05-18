import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Login from './components/Login.jsx'
import ViewLists from './components/viewLists.jsx'
import './index.css'

import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import store from './store/store'
import ProtectedRoute from './components/ProtectedRoute.js'


const token = localStorage.getItem('jwtToken')
if(token) {
  store.dispatch({type: 'ON_LOGIN', payload: token})
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path='/home' element={<ProtectedRoute><App /></ProtectedRoute>} />
          <Route path = '/viewlists' element = {<ProtectedRoute><ViewLists/></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
