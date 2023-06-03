import React, { useState } from "react";
import "../../styles/UserRegister.scss";
import axios from "axios";
import { TextField } from "@mui/material";
import { toast } from "react-toastify";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function MedicalHistoryForm() {
  const [fechaGestion, setFechaGestion] = useState("");
  const [descriptionMedicalHistory, setDescriptionMedicalHistory] = useState("");
  const isFormValid = fechaGestion !== "" && descriptionMedicalHistory !== "";

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      fechaGestion: fechaGestion,
      descriptionMedicalHistory: descriptionMedicalHistory,
      specialist: {
        id: sessionStorage.getItem('id'),
      },
      discapUser: {
        id: sessionStorage.getItem('selectedUserId'),
      },
    };

    isFormValid
      ? axios
        .post(
          "http://localhost:8091/api/discapTrainingMedicalUser/MedicalHistory",
          data
        )
        .then((response) => {
          console.log(response);
          toast.success("Historia clínica agregada exitosamente");
        })
        .catch((error) => {
          console.log(error);
          toast.error("Error al agregar la historia clínica");
        })
      : toast.error("Debe diligenciar todos los campos");
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <TextField
          id="fechaGestion"
          type="date"
          value={fechaGestion}
          onChange={(event) => setFechaGestion(event.target.value)}
        /> <br />
        <TextField
          id="descriptionMedicalHistory"
          label="Description Medical History"
          value={descriptionMedicalHistory}
          onChange={(event) => setDescriptionMedicalHistory(event.target.value)}
        />

        <Stack className="frame">
          <Button type="submit" className="custom-btn btn-10 ">
            Agregar Historia clinica
          </Button>
        </Stack>
      </form>
    </div>
  );
}

export default MedicalHistoryForm;
