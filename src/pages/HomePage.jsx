import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import InfoUser from '../components/homePage/InfoUser'
import {getInfoUser} from '../service/infoUser'
import RouteTraining from '../components/homePage/RouteTraining'

function HomePage() {

  const [info, setInfo] = useState();
  const [infoVideo, setInfoVideo] = useState();

  useEffect(() => {
    async function fetchData() {
      const result = await getInfoUser();
      console.log(result)
      setInfo(result.results);
    }
    fetchData();
  }, []);

  
  return (
    <>
        <Header />
        { info ? (info.registerType === "ADMIN" || info.registerType === "ESPECIALISTA" ? <NavBar />: null) : null}
        { info && (<InfoUser data={info} />)}
        <RouteTraining/>
        <Footer />
    </>
  )
}

export default HomePage