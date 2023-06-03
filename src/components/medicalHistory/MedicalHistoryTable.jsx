import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import "../../styles/TableUserDiscapacity.scss";
import "../../styles/InfoUser.scss";
import AddCircleTwoToneIcon from "@mui/icons-material/AddCircleTwoTone";

function MedicalHistoryTable(props) {
  const [data, setData] = useState(props.data || []);
  useEffect(() => {
    setData(props.data || []);
  }, [props.data]);
  const items = props.data;

  return (
    <section className="section-principal">
      <section className="section-data">
        <div className="section-header ">
          <h3>Historias Clinicas</h3>
        </div>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow className="table-header">
                <TableCell className="table-cell">Nombre</TableCell>
                <TableCell className="table-cell">
                  Fecha de modificación
                </TableCell>
                <TableCell className="table-cell">Descipción médica</TableCell>
                <TableCell className="table-cell">
                  Especialista asignado
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item, index) => (
                <TableRow key={index} className="table-row">
                  <TableCell className="table-cell">
                    {item.discapUser.name}
                  </TableCell>
                  <TableCell className="table-cell">
                    {item.fechaGestion}
                    {item.id}
                  </TableCell>
                  <TableCell className="table-cell">
                    {item.descriptionMedicalHistory}
                  </TableCell>
                  <TableCell className="table-cell">
                    {item.specialist.name}
                  </TableCell>

                  <TableCell className="table-cell">
                    <a href="RutinaEntrenamiento">
                      <Button
                        variant="contained"
                        size="medium"
                        onClick={() => handleClickUser(item.id)}
                        endIcon={<AddCircleTwoToneIcon />}
                      >
                        Añadir rutina entrenamiento
                      </Button>
                    </a>
                    <br />
                    <br />
                    <a
                      href="MedicalHistory"
                      onClick={() => handleClickUser(item.id)}
                    >
                      <Button
                        variant="contained"
                        size="medium"
                        endIcon={<AddCircleTwoToneIcon />}
                      >
                        Añadir Historia Clinica
                      </Button>
                    </a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </section>
    </section>
  );
}

export default MedicalHistoryTable;
