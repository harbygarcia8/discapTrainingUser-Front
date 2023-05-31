import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login'
import RegisterUser from '../pages/RegisterUser';
import HomePage from '../pages/HomePage';
import UserDiscapacityPage from '../pages/UserDiscapacityPage'

const App = () => {
  return (
    <><BrowserRouter>
        <Routes>
          <Route path='/signUp' element={<RegisterUser />} />
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/ConsultaDiscapacitado' element={<UserDiscapacityPage />} />
        </Routes>
  </BrowserRouter>
     
      {/* <UserInformation />
      <Users />
      <Discapacity /> */}
    </>
  )
}

export default App