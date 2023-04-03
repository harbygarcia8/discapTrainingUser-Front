import React from 'react'
import NavBar from '../components/NavBar'
import Users from '../components/Users'
import Discapacity from '../components/Discapacity'
import UserInformation from '../components/UserInformation'
const App = () => {
  return (
    <>
      <NavBar />
      <UserInformation />
      <Users />
      <Discapacity />
    </>
  )
}

export default App