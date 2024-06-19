import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Success from './pages/Success'
import Home from './pages/Home'
import Error from './pages/Error'
import ProtectedRoute from './Components/ProtectedRoute'



const App = () => {
   
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/success' element={<ProtectedRoute element = {<Success />}/>} />
      <Route path='/*' element={<Error/>} />
    </Routes>

   
    </>
  )
}

export default App
