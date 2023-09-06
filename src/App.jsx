
import React from 'react'
import {BrowserRouter , Route , Routes } from 'react-router-dom'
import Success from './components/Success'
import Home from './components/Home'
const App = () => {
  return (
    < >
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>  
        <Route path='/success' element={<Success/>}/>   
        <Route path='/*' element={<h1>page not found</h1>}/>   
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
