import React, { useState, useEffect } from 'react'
import '../../styles/InfoUser.scss'


function InfoUser(props) {
  const item = props.data;
  const id = sessionStorage.setItem('id', item.id)
  console.log(item)

  return (
    <>
      <section className="section-principal">
        <section className="section-data">
          <div className="section-header ">
            <h3>Información Personal </h3>
          </div>
          <div className="mainclientData-ul">
            <table>
              <tbody>
                <tr>
                  <td className="td-table">
                    <ul className="section-container">
                      <li className="padding-bottom">
                        <label htmlFor="ClientName">
                          <strong>Nombre: </strong>
                        </label>
                        <span>{item.name}{" "}{item.surname} ({item.registerType})</span>
                      </li>
                      <li className="padding-bottom">
                        <label htmlFor="ClientName">
                          <strong>Email: </strong>
                        </label>
                        <span>{item.email}</span>
                      </li>
                    </ul>
                  </td>
                  <td className="td-table">
                    <ul className="section-container">
                      <li className="padding-bottom">
                        <label htmlFor="ClientName">
                          <strong>Tipo documento: </strong>
                        </label>
                        <span>{item.documentType}</span>
                      </li>
                      <li className="padding-bottom">
                        <label htmlFor="ClientName">
                          <strong>Número del documento: </strong>
                        </label>
                        <span>{item.personID}</span>
                      </li>
                    </ul>
                  </td>
                  <td className="td-table">
                    <ul className="section-container">
                      <li className="padding-bottom">
                        <label htmlFor="ClientName">
                          <strong>Género: </strong>
                        </label>
                        <span>{item.gender}</span>
                      </li>
                      <li className="padding-bottom">
                        <label htmlFor="ClientName">
                          <strong>Teléfono: </strong>
                        </label>
                        <span>{item.phone}</span>
                      </li>
                    </ul>
                  </td>
                  <td className="td-table">
                    <ul className="section-container">
                      <li className="padding-bottom">
                        <label htmlFor="ClientName">
                          <strong>Estado: </strong>
                        </label>
                        <span>{item.active === true ? "ACTIVO" : "INACTIVO"}</span>
                      </li>
                      <li className="padding-bottom">
                        <label htmlFor="ClientName">
                          <strong>Discapacidad: </strong>
                        </label>
                        <span>{item.discapacity === "NINGUNO" || item.discapacity === null ? `Es ${item.registerType}, no tiene discapacidad asignada`  : item.discapacity }</span>
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </section>
    </>
  )
}

export default InfoUser