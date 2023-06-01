import React, { useState, useEffect } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import '../../styles/TableUserDiscapacity.scss'
import '../../styles/InfoUser.scss'


function Specialist(props) {
  const [data, setData] = useState(props.data || []);

  useEffect(() => {
    setData(props.data || []);
  }, [props.data]);

  console.log(props.data)
  return (
    <>
      <section className="section-principal">
        <section className="section-data">
          <div className="section-header ">
            <h3>ESPECIALISTAS</h3>
          </div>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow className="table-header">
                  <TableCell className="table-cell"><strong>Tipo Documento</strong></TableCell>
                  <TableCell className="table-cell"><strong>ID de Persona</strong></TableCell>
                  <TableCell className="table-cell"><strong>Nombre</strong></TableCell>
                  <TableCell className="table-cell"><strong>Apellido</strong></TableCell>
                  <TableCell className="table-cell"><strong>Género</strong></TableCell>
                  <TableCell className="table-cell"><strong>Teléfono</strong></TableCell>
                  <TableCell className="table-cell"><strong>Email</strong></TableCell>
                  <TableCell className="table-cell"><strong>Estado</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((item, index) => (
                  <TableRow key={index} className="table-row">
                    <TableCell className="table-cell">{item.documentType}</TableCell>
                    <TableCell className="table-cell">{item.personID}</TableCell>
                    <TableCell className="table-cell">{item.name}</TableCell>
                    <TableCell className="table-cell">{item.surname}</TableCell>
                    <TableCell className="table-cell">{item.gender}</TableCell>
                    <TableCell className="table-cell">{item.phone}</TableCell>
                    <TableCell className="table-cell">{item.email}</TableCell>
                    <TableCell className="table-cell">{item.active ? 'Activo' : 'Inactivo'}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </section>
      </section>
    </>
  );
}

export default Specialist;
