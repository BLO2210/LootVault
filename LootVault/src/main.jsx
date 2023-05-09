import React from 'react'
import ReactDOM from 'react-dom/client'

//import components below
import App from './App.jsx'
import Login from './components/Login.jsx'
import './index.css'

import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import store from './store/store'
import ProtectedRoute from './components/ProtectedRoute.js'


const token = localStorage.getItem('jwtToken')
if(token) {
  // dispatch an action to update the isAuthenticated property in global state 
  store.dispatch({type: 'ON_LOGIN', payload: token})
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path='/home' element={<ProtectedRoute><App /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
