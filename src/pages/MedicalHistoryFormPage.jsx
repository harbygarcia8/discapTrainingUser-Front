import React, { useState, useEffect } from 'react'
import Header from "../components/Header"
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { getInfoDiscapUsers } from '../service/infoDiscapUsers'
import MedicalHistoryForm from '../components/medicalHistory/MedicalHistoryForm'


function MedicalHistoryFormPage() {

  useEffect(() => {
    async function fetchData() {
      const result = await getInfoDiscapUsers();
      setInfo(result);
    }
    fetchData();
  }, []);
    
  return (
    <div>
      <Header />
      <NavBar />
      <MedicalHistoryForm />
      <Footer />
    </div>
  );
}

export default MedicalHistoryFormPage;