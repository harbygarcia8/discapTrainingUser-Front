import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import InfoUser from '../components/homePage/InfoUser'


function HomePage() {

  // const [infoUser, setInfoUser] = useState();
  //   useEffect(() => {
  //   async function fetchData() {
  //     const result = await infoUserByEmail();
  //     setInfoUser(result);
  //   }
  //   fetchData();
  // }, []);

  return (
    <>
        <Header />
        <NavBar />
        <InfoUser />
        <Footer />
    </>
  )
}

export default HomePage