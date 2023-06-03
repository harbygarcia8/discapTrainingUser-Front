import React, { useState } from "react";
import "../../styles/UserRegister.scss";
import axios from "axios";
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function MedicalHistoryForm() {
  const [fechaGestion, setFechaGestion] = useState("");
  const [descriptionMedicalHistory, setDescriptionMedicalHistory] = useState("");
  const [specialist, setSpecialistUser] = useState("");
  const [discapUser, setDiscapUser] = useState("");

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

    if (data !== []) {
      axios
        .put(
          "http://localhost:8091/api/discapTrainingMedicalUser/MedicalHistory",
          data
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
          alert("Debe de Diligenciar todos los datos");
        });
    } else {
      alert("Debe de Diligenciar todos los datos");
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <TextField
          id="fechaGestion"
          type="date"
          value={fechaGestion}
          onChange={(event) => setFechaGestion(event.target.value)}
        /> <br/>
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
