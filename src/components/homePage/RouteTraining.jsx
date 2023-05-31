import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

import { getVideobyUser } from '../../service/InfoVideoByUser'
import '../../styles/InfoUser.scss'
import '../../styles/TableUserDiscapacity.scss'

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
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow className="table-header">
                  <TableCell className="table-cell">Titulo</TableCell>
                  <TableCell className="table-cell">Descripción</TableCell>
                  <TableCell className="table-cell">Discapacidad</TableCell>
                  <TableCell className="table-cell">Duración</TableCell>
                  <TableCell className="table-cell">Video</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {infoVideo && infoVideo.map((video, index) => (
                  <TableRow key={index} className="table-row">
                    <TableCell className="table-cell">{video.title}</TableCell>
                    <TableCell className="table-cell">{video.descriptionVideo}</TableCell>
                    <TableCell className="table-cell">{video.discapUser.discapacity}</TableCell>
                    <TableCell className="table-cell">{video.duration}</TableCell>
                    <TableCell className="table-cell">
                      <a href={video.url} target="_blank" className="link-black">Click para ver video</a>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </section>
      </section>
    </>

  )
}

export default RouteTraining