import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import InfoUser from '../components/homePage/InfoUser'
import {getInfoUser} from '../service/infoUser'
import {getVideobyUser} from '../service/InfoVideoByUser'
import RouteTraining from '../components/homePage/RouteTraining'

function HomePage() {

  const [info, setInfo] = useState();

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
        { info ? (info.registerType === "USUARIO" ?  <RouteTraining data={info}/>: null) : null}
        <Footer />
    </>
  )
}

export default HomePage