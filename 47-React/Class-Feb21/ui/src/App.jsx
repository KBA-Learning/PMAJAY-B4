import React from 'react'

import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigate to="/signup" />} />
      <Route path="/login" element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/dashboard' element={<Dashboard />} />
      
    </Routes>
    </BrowserRouter>

  )
}

export default App