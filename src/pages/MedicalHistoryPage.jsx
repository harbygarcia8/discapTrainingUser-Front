import React, { useState, useEffect } from 'react'
import Header from "../components/Header"
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { getInfoMedicalHistory } from '../service/infoDiscapUsers'
import TableUserDiscapacity from '../components/userDiscapacity/TableUserDiscapacity'

function MedicalHistoryPage() {

    const [info, setInfo] = useState();

  useEffect(() => {
    async function fetchData() {
      const result = await getInfoMedicalHistory();
      setInfo(result);
    }
    fetchData();
  }, []);

  return (
    <div>
    <Header />
    <NavBar />
    <TableUserDiscapacity data={info}/>
    <Footer />
  </div>
  )
}

export default MedicalHistoryPage