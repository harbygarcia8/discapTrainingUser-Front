import React, { useState, useEffect } from 'react'
import Header from "../components/Header"
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { getInfoSpecialist } from '../service/infoDiscapUsers'
import TableUserDiscapacity from '../components/userDiscapacity/TableUserDiscapacity'
import Specialist from '../components/Specialist/Specialist'

function SpecialistPage() {
    const [info, setInfo] = useState();

    useEffect(() => {
      async function fetchData() {
        const result = await getInfoSpecialist();
        setInfo(result);
      }
      fetchData();
    }, []);
      
    return (
      <div>
        <Header />
        <NavBar />
        <Specialist data={info}/>
        <Footer />
      </div>
    );
}

export default SpecialistPage