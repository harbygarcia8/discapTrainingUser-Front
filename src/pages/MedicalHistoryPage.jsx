import React, { useState, useEffect } from 'react'
import Header from "../components/Header"
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { getInfoMedicalHistory } from '../service/infoDiscapUsers'
import MedicalHistoryTable from '../components/medicalHistory/MedicalHistoryTable'

function MedicalHistoryPage() {

    const [info, setInfo] = useState();

  useEffect(() => {
    async function fetchData() {
      const result = await getInfoMedicalHistory();
      console.log(result)
      setInfo(result);
    }
    fetchData();
  }, []);

  return (
    <div>
    <Header />
    <NavBar />
    <MedicalHistoryTable data={info}/>
    <Footer />
  </div>
  )
}

export default MedicalHistoryPage