import React, {useState, useEffect} from 'react'
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
    {infoVideo && (
      <section className="section-principal">
      <section className="section-data">
        <div className="section-header ">
          <h3>VIDEOS DE ENTRENAMIENTOS</h3>
        </div>
        <div className="mainclientData-ul">
          <table>
            <tbody>
              <tr>
              
                <td className="td-table">
                  <ul className="section-container">
                    <li className="padding-bottom">
                      <label htmlFor="ClientName">
                        <strong>Titulo: </strong>
                      </label>
                      <span>{infoVideo[0].title}</span>
                    </li>
                    <li className="padding-bottom">
                      <label htmlFor="ClientName">
                        <strong>Descripción: </strong>
                      </label>
                      <span>{infoVideo[0].descriptionVideo}</span>
                    </li>
                    <li className="padding-bottom">
                      <label htmlFor="ClientName">
                        <strong>Discapacidad: </strong>
                      </label>
                      <span>{infoVideo[0].discapUser.discapacity}</span>
                    </li>
                    <li className="padding-bottom">
                      <label htmlFor="ClientName">
                        <strong>Duración video: </strong>
                      </label>
                      <span>{infoVideo[0].duration}</span>
                    </li>
                    <li className="padding-bottom">
                      <label htmlFor="ClientName">
                        <strong>Duración video: </strong>
                      </label>
                      <span>{infoVideo[0].url}</span>
                    </li>
                  </ul>
                </td>
             
                
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </section>
    )}
    
  </>

  )
}

export default RouteTraining