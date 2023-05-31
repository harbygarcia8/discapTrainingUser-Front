import React, { useState, useEffect } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import '../../styles/TableUserDiscapacity.scss'


function TableUserDiscapacity(props) {
  const [data, setData] = useState(props.data || []);

  useEffect(() => {
    setData(props.data || []);
  }, [props.data]);
  
  console.log(props.data)
  return (
    <>
      <h2 className="table-title">Usuarios con Discapacidad</h2>
      <TableContainer component={Paper} className="table-container">
        <Table>
          <TableHead>
            <TableRow className="table-header">
              <TableCell className="table-cell">Tipo de Documento</TableCell>
              <TableCell className="table-cell">ID de Persona</TableCell>
              <TableCell className="table-cell">Nombre</TableCell>
              <TableCell className="table-cell">Apellido</TableCell>
              <TableCell className="table-cell">Género</TableCell>
              <TableCell className="table-cell">Teléfono</TableCell>
              <TableCell className="table-cell">Email</TableCell>
              <TableCell className="table-cell">Discapacidad</TableCell>
              <TableCell className="table-cell">Estado</TableCell>
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
                <TableCell className="table-cell">{item.discapacity}</TableCell>
                <TableCell className="table-cell">{item.active ? 'Activo' : 'Inactivo'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default TableUserDiscapacity;
