import React, {useState, useEffect} from 'react'
import { getDiscapacity } from '../service/discapacity';
import UserRegister from '../components/registerUser/UserRegister'
import Header from '../components/Header'
import Footer from '../components/Footer'

function RegisterUser() {

  const [infoVideo, setInfoVideo] = useState();

  const [infoDiscapacity, setInfoDiscapacity] = useState();
  useEffect(() => {
    async function fetchData() {
      const result = await getDiscapacity();
      setInfoDiscapacity(result.results);
    }
    fetchData();
  }, []);

  return (

    <div>
        <Header />
        {infoDiscapacity &&(<UserRegister data={infoDiscapacity}/>)}
        <Footer />
    </div>
  )
}

export default RegisterUser