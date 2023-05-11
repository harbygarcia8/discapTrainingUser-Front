import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login'
import RegisterUser from '../pages/RegisterUser';

const App = () => {
  return (
    <><BrowserRouter>
        <Routes>
          <Route path='/' element={<RegisterUser />} />
          <Route path='/login' element={<Login />} />
        </Routes>
  </BrowserRouter>
     
      {/* <UserInformation />
      <Users />
      <Discapacity /> */}
    </>
  )
}

export default App