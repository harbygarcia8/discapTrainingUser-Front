import React, {useState, useEffect} from 'react'
import { getDiscapacity } from '../service/discapacity';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Discapacity from '../components/discapacities/Discapacity';
import NavBar from '../components/NavBar';

function DiscapacitiesPage() {

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
        <NavBar />
        {infoDiscapacity &&(<Discapacity data={infoDiscapacity}/>)}
        <Footer />
    </div>
  )
}

export default DiscapacitiesPage