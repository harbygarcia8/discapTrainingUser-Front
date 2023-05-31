import React, {useState, useEffect} from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';

import {getVideobyUser} from '../../service/InfoVideoByUser'
import '../../styles/InfoUser.scss'

const RouteTraining = (props) => {
  const [infoVideo, setInfoVideo] = useState();
  const infoUser = props.data;

  console.log(infoUser)



  useEffect(() => {
    async function fetchDataVideo() {
      const result = await getVideobyUser();
      setInfoVideo(result);
    }
    fetchDataVideo();
  }, []);


  return (
    <>
      <section className="section-principal">
      <section className="section-data">
        <div className="section-header ">
          <h3>VIDEOS DE ENTRENAMIENTOS</h3>
        </div>
        <div className="mainclientData-ul">
        <Table responsive paging={true}>
            <thead>
              <tr className="title-modal">
                <th>Titulo</th>
                <th>Descripción</th>
                <th>Discapacidad</th>
                <th>Duración</th>
                <th>Video</th>
              </tr>
            </thead>
            <tbody>
              { infoVideo && (
                <tr className="content-modal">
                  <td>{infoVideo[0].title}</td>
                  <td>{infoVideo[0].descriptionVideo}</td>
                  <td>{infoVideo[0].discapUser.discapacity}</td>
                  <td>{infoVideo[0].duration}</td>
                  <td>{infoVideo[0].url}</td>
                </tr>
              )
                
              }
            </tbody>
          </Table>
        </div>
      </section>
    </section>
    
    
  </>

  )
}

export default RouteTraining