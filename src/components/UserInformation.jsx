import React, { useState, useEffect } from "react";
import { getMenuData } from "../service/menuData";

function UserInformation() {
  const [infoUsers, setInfoUsers] = useState();
  useEffect(() => {
    async function fetchData() {
      const result = await getMenuData();
      setInfoUsers(result);
    }
    fetchData();
  }, []);

  return (
    <>
      <section className="section-principal">
        <section className="section-data">
          <div className="section-header ">
            <h3>Ficha del cliente</h3>
          </div>
          <div className="mainclientData-ul">
            <table>
              <tbody>
                <tr>
                  <td>
                    {infoUsers ? (
                      <>
                        {infoUsers.results.map((item, index) => (
                          <>
                            <ul key="index" className="section-container">
                              <li className="pb-2">
                                <label htmlFor="ClientName">
                                  <strong>Cliente: </strong>
                                </label>
                                <span> {item.name} {item.surname}</span>
                              </li>
                              <li className="pb-2">
                                <label htmlFor="ClientName">
                                  <strong>Cédula: </strong>
                                </label>
                                <span>{item.personID}</span>
                              </li>
                              <li className="pb-2">
                                <label htmlFor="ClientName">
                                  <strong>Genero: </strong>
                                </label>
                                <span>{item.gender}</span>
                              </li>
                              <li className="pb-2">
                                <label htmlFor="ClientName">
                                  <strong>Email: </strong>
                                </label>
                                <span>{item.email}</span>
                              </li>
                              <li className="pb-2">
                                <label htmlFor="ClientName">
                                  <strong>Teléfono: </strong>
                                </label>
                                <span>{item.phone}</span>
                              </li>
                              
                            </ul>
                          </>
                        ))}
                      </>
                    ) : (
                      <></>
                    )}
                  </td>
                  <td>
                    {infoUsers ? (
                      <>
                        {infoUsers.results.map((item, index) => (
                            <>
                            <ul className="section-container">
                      <li className="pb-2">
                        <label htmlFor="ClientName">
                          <strong>Doc. Identidad: </strong>{" "}
                        </label>
                        <span>{item.personID}</span>
                      </li>
                      <li className="pb-2">
                        <label htmlFor="ClientName">
                          <strong>Estado del cliente: </strong>
                        </label>
                        <span>{item.active}</span>
                      </li>
                    </ul></>
                        ))}</> ) :(<></>)}                    
                    </td>
                  <td>
                    <ul className="section-container">
                      <li className="pb-2">
                        <label htmlFor="ClientName">
                          <strong>NUP: </strong>
                        </label>
                        <span> 1036958016</span>
                      </li>
                      <li className="pb-2">
                        <label htmlFor="ClientName">
                          <strong>Derecho Anticipo: </strong>{" "}
                        </label>
                        <span>NO</span>
                      </li>
                    </ul>
                  </td>
                  <td>
                    <ul className="section-container">
                      <li className="pb-2">
                        <label htmlFor="ClientName">
                          <strong>Tiempo SAP: </strong>
                        </label>
                        <span> 22.35 años</span>
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
  );
}

export default UserInformation;
