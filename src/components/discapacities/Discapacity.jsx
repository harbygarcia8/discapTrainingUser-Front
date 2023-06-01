import React, { useState, useEffect } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import '../../styles/TableUserDiscapacity.scss'
import '../../styles/InfoUser.scss'


function Discapacity(props) {
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
            <h3>DISCAPACIDADES</h3>
          </div>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow className="table-header">
                  <TableCell className="table-cell"><strong>Discapacidad</strong></TableCell>
                  <TableCell className="table-cell"><strong>Descripción</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((item, index) => (
                  <TableRow key={index} className="table-row">
                    <TableCell className="table-cell">{item.typeDiscapacity}</TableCell>
                    <TableCell className="table-cell">{item.descriptionDiscapacity}</TableCell>
                   
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

export default Discapacity;