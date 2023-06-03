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

function TableUserDiscapacity(props) {
  const [data, setData] = useState(props.data || []);
  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    setData(props.data || []);
  }, [props.data]);

  const handleClickUser = (userId) => {
    setSelectedUserId(userId);
    sessionStorage.setItem("selectedUserId", userId);
  };

  console.log(props.data);
  return (
    <>
      <section className="section-principal">
        <section className="section-data">
          <div className="section-header ">
            <h3>Usuarios con Discapacidad</h3>
          </div>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow className="table-header">
                  <TableCell className="table-cell">Tipo Documento</TableCell>
                  <TableCell className="table-cell">ID de Persona</TableCell>
                  <TableCell className="table-cell">Nombre</TableCell>
                  <TableCell className="table-cell">Apellido</TableCell>
                  <TableCell className="table-cell">Género</TableCell>
                  <TableCell className="table-cell">Teléfono</TableCell>
                  <TableCell className="table-cell">Email</TableCell>
                  <TableCell className="table-cell">Discapacidad</TableCell>
                  <TableCell className="table-cell">Estado</TableCell>
                  <TableCell className="table-cell">Gestion</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((item, index) => (
                  <TableRow key={index} className="table-row">
                    <TableCell className="table-cell">
                      {item.documentType}
                      {item.id}
                    </TableCell>
                    <TableCell className="table-cell">
                      {item.personID}
                    </TableCell>
                    <TableCell className="table-cell">{item.name}</TableCell>
                    <TableCell className="table-cell">{item.surname}</TableCell>
                    <TableCell className="table-cell">{item.gender}</TableCell>
                    <TableCell className="table-cell">{item.phone}</TableCell>
                    <TableCell className="table-cell">{item.email}</TableCell>
                    <TableCell className="table-cell">
                      {item.discapacity}
                    </TableCell>
                    <TableCell className="table-cell">
                      {item.active ? "Activo" : "Inactivo"}
                    </TableCell>
                    <TableCell className="table-cell">
                      <a href="RutinaEntrenamiento">
                        <Button
                          variant="contained"
                          size="medium"
                          endIcon={<AddCircleTwoToneIcon />}
                          onClick={() => handleClickUser(item.id)}
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
    </>
  );
}

export default TableUserDiscapacity;
