import React, { useState, useEffect } from 'react'
import Header from "../components/Header"
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { getInfoDiscapUsers } from '../service/infoDiscapUsers'
import TableUserDiscapacity from '../components/userDiscapacity/TableUserDiscapacity'


function UserDiscapacityPage() {
 
  const [info, setInfo] = useState();
  const [infoVideo, setInfoVideo] = useState();

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
      <TableUserDiscapacity data={info}/>
      <Footer />
    </div>
  );
}

export default UserDiscapacityPage;