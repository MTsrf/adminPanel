import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
import Dashborad from './pages/Dashboard'
import Doctor from './pages/Doctor'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Dashborad />} />
          <Route path='/doctor' element={<Doctor />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
